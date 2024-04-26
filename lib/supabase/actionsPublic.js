"use server";
import { createClient } from "./supabaseServer";

// * CREATE QUERY FUNCTIONS FOR PUBLIC DATA HERE - THEN IMPORT WHERE YOU NEED IT
// All public data that is fetched

// GET all tags from supabase
export const readAllTags = async () => {
    const supabase = createClient();

    try {
        const { data: tagsData, error: tagsError } = await supabase
            .from("Tags")
            .select("*");

        if (tagsError) {
            throw new Error(data.message);
        }

        return tagsData;
    } catch (error) {
        console.error("Error fetching tags data:", error);
        return null;
    }
};

// GET all stations from each store with tags
export async function fetchAllStationsSortedByStore() {
    const supabase = createClient();

    try {
        // Get all stores data to get their id
        const { data: storesData, error: storeError } = await supabase
            .from("Store")
            .select();

        if (storeError) {
            throw new Error(storeError.message);
        }

        // New array to store stores with their stations
        const storesWithStationsAndTags = [];

        // Iterate through each store
        for (const store of storesData) {
            // Fetch stations for the each store
            const { data: stationsData, error: stationsError } = await supabase
                .from("Station")
                .select("*")
                .eq("store_id", store.id);

            if (stationsError) {
                throw new Error(stationsError.message);
            }

            // For each station, fetch its associated tags
            const stationsWithTags = await Promise.all(
                stationsData.map(async (station) => {
                    // Fetch tag IDs for the current station from Station_Tags table
                    const { data: stationTags, error: stationTagsError } =
                        await supabase
                            .from("Station_Tags")
                            .select("tag_id")
                            .eq("station_id", station.id);

                    if (stationTagsError) {
                        throw new Error(stationTagsError.message);
                    }

                    // Fetch tag names for the extracted tag_id's from Tags table
                    const tagIds = stationTags.map(({ tag_id }) => tag_id);

                    const { data: tagsData, error: tagsError } = await supabase
                        .from("Tags")
                        .select("name")
                        .in("id", tagIds);

                    if (tagsError) {
                        throw new Error(tagsError.message);
                    }

                    // Return the station with its associated tags
                    return {
                        ...station,
                        tags: tagsData.map(({ name }) => name),
                    };
                })
            );
            // Add the store along with its stations and tags to the result array
            storesWithStationsAndTags.push({
                store,
                stations: stationsWithTags,
            });
        }

        return storesWithStationsAndTags;
    } catch (error) {
        console.error("Error fetching stations data:", error);

        return null;
    }
}

// GET all articles with respective tags
export async function getArticles() {
    const supabase = createClient();

    try {
        // Fetch the post type ID for articles from the PostType table
        const { data: postTypeData, error: postTypeError } = await supabase
            .from("PostType")
            .select("id")
            .eq("name", "Artikkel");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const articlePostTypeId = postTypeData[0].id; // Extract article post type ID

        // Fetch all articles with the specified post type ID from the Post table
        const { data: articleData, error: articleError } = await supabase
            .from("Post")
            .select("*")
            .eq("postType_id", articlePostTypeId);

        if (articleError) {
            throw new Error(articleError.message);
        }

        // Fetch tags for each article
        for (let i = 0; i < articleData.length; i++) {
            const postId = articleData[i].id;

            // Fetch tags associated with the current article
            const { data: tagsData, error: tagsError } = await supabase
                .from("Post_Tags")
                .select("tag_id")
                .eq("post_id", postId);

            if (tagsError) {
                throw new Error(tagsError.message);
            }

            // Extract tag IDs
            const tagIds = tagsData.map(({ tag_id }) => tag_id);

            // Fetch tag names for the extracted tag IDs from Tags table
            const { data: tagNamesData, error: tagNamesError } = await supabase
                .from("Tags")
                .select("name")
                .in("id", tagIds);

            if (tagNamesError) {
                throw new Error(tagNamesError.message);
            }

            // Add tag names to the current article
            articleData[i].tags = tagNamesData.map(({ name }) => name);
        }

        for (let i = 0; i < articleData.length; i++) {
            const storeId = articleData[i].store_id;

            const { data: storeData, error: storeError } = await supabase
                .from("Store")
                .select("name")
                .eq("id", storeId);

            if (storeError) {
                throw new Error(storeError.message);
            }

            // Add store name to the current article
            articleData[i].store_name = storeData[0].name;
        }

        return articleData; // Return the fetched articles with tags and store names
    } catch (error) {
        console.error(
            "Error fetching articles with tags and store names:",
            error
        );
        return null; // Return null in case of an error
    }
}

// GET data from selected article id
export const getArticleById = async (articleId) => {
    const supabase = createClient();

    try {
        // Get the article that matches the article id params
        const { data: articleData, error: articleError } = await supabase
            .from("Post")
            .select()
            .eq("id", articleId.id);

        if (articleError) {
            throw new Error(articleError.message);
        }

        if (articleData.length === 0) {
            // If no article found with the given ID
            throw new Error("Article not found");
        }

        const article = articleData[0];

        // Get store name based on store ID
        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select("name")
            .eq("id", article.store_id);

        if (storeError) {
            throw new Error(storeError.message);
        }

        article.store_name = storeData[0].name;

        const { data: tagsData, error: tagsError } = await supabase
            .from("Post_Tags")
            .select("tag_id")
            .eq("post_id", article.id);

        if (tagsError) {
            throw new Error(tagsError.message);
        }

        const tagIds = tagsData.map(({ tag_id }) => tag_id);

        const { data: tagNamesData, error: tagNamesError } = await supabase
            .from("Tags")
            .select("name")
            .in("id", tagIds);

        if (tagNamesError) {
            throw new Error(tagNamesError.message);
        }

        article.tags = tagNamesData.map(({ name }) => name);

        return article;
    } catch (error) {
        console.error("Error fetching article id data:", error);
        return null;
    }
};

// GET data from selected event id
export async function getEvents() {
    const supabase = createClient();

    //1 Hente posttype = arrangement
    //2 

    try {
        const { data: postTypeData, error: postTypeError } = await supabase
            .from("PostType")
            .select()
            .eq("name", "Arrangement");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const eventPostTypeName = postTypeData[0].name;
        const eventPostTypeId = postTypeData[0].id;

        const { data: eventData, error: eventError } = await supabase
            .from("Post")
            .select("*")
            .eq("postType_id", eventPostTypeId);

        if (eventError) {
            throw new Error(eventError.message);
        }

        for (let i = 0; i < eventData.length; i++) {
            const postId = eventData[i].id;

            const { data: tagsData, error: tagsError } = await supabase
                .from("Post_Tags")
                .select("tag_id")
                .eq("post_id", postId);

            if (tagsError) {
                throw new Error(tagsError.message);
            }

            const tagIds = tagsData.map(({ tag_id }) => tag_id);

            const { data: tagNamesData, error: tagNamesError } = await supabase
                .from("Tags")
                .select("name")
                .in("id", tagIds);

            if (tagNamesError) {
                throw new Error(tagNamesError.message);
            }

            eventData[i].tags = tagNamesData.map(({ name }) => name);
        }

        for (let i = 0; i < eventData.length; i++) {
            const storeId = eventData[i].store_id;

            const { data: storeData, error: storeError } = await supabase
                .from("Store")
                .select("name")
                .eq("id", storeId);

            if (storeError) {
                throw new Error(storeError.message);
            }

            eventData[i].store_name = storeData[0].name;
        }
        
        return { eventPostTypeName, eventData };
    } catch (error) {
        console.error("Error fetching events:", error);
        return null;
    }
}

// GET all events with respective tags
export const getEventById = async (eventId) => {
    const supabase = createClient();

    try {
        const { data: eventData, error: eventError } = await supabase
            .from("Post")
            .select()
            .eq("id", eventId.id);

        if (eventError) {
            throw new Error(eventError.message);
        }

        if (eventData.length === 0) {
            throw new Error("Event not found");
        }

        const event = eventData[0];

        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select("name")
            .eq("id", event.store_id);

        if (storeError) {
            throw new Error(storeError.message);
        }

        event.store_name = storeData[0].name;

        const { data: tagsData, error: tagsError } = await supabase
            .from("Post_Tags")
            .select("tag_id")
            .eq("post_id", event.id);

        if (tagsError) {
            throw new Error(tagsError.message);
        }

        const tagIds = tagsData.map(({ tag_id }) => tag_id);

        const { data: tagNamesData, error: tagNamesError } = await supabase
            .from("Tags")
            .select("name")
            .in("id", tagIds);

        if (tagNamesError) {
            throw new Error(tagNamesError.message);
        }

        event.tags = tagNamesData.map(({ name }) => name);

        return event;
    } catch (error) {
        console.error("Error fetching event id data:", error);
        return null;
    }
};



export async function getStores() {
    const supabase = createClient();

    try {
        // Fetch store name and image from the Store table
        const { data: stores, error: storeError } = await supabase
            .from('Store')
            .select();

        if (storeError) {
            throw new Error(storeError.message);
        }
        console.log("Stores Data:", stores);
        return stores; 
    } catch (error) {
        console.error('Error fetching stores:', error); // Return null in case of an error
    }
}


// GET data from selected article id
export const getStoreById = async (storeId) => {
    const supabase = createClient();

    try {
        // Get the article that matches the article id params
        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select()
            .eq("id", storeId.id);

        if (storeError) {
            throw new Error(storeError.message);
        }

        if (storeData.length === 0) {
            // If no article found with the given ID
            throw new Error("Article not found");
        }

        
        const { data: tagsData, error: tagsError } = await supabase
            .from('Post_Tags')
            .select('tag_id')
            .eq('post_id', stores.id);

        if (tagsError) {
            throw new Error(tagsError.message);
        }

        const tagIds = tagsData.map(({ tag_id }) => tag_id);


        const { data: tagNamesData, error: tagNamesError } = await supabase
            .from('Tags')
            .select('name')
            .in('id', tagIds);

        if (tagNamesError) {
            throw new Error(tagNamesError.message);
        }


        stores.tags = tagNamesData.map(({ name }) => name);

        return stores;

    } catch (error) {
        console.error('Error fetching article id data:', error);
        return null;
    }
};
