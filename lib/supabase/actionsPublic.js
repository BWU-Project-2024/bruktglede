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

            if (stationsData.length > 0) {
                const stationsWithTags = await Promise.all(
                    stationsData.map(async (station) => {
                        const { data: stationTags, error: stationTagsError } =
                            await supabase
                                .from("Station_Tags")
                                .select("tag_id")
                                .eq("station_id", station.id);

                        if (stationTagsError) {
                            throw new Error(stationTagsError.message);
                        }

                        const tagIds = stationTags.map(({ tag_id }) => tag_id);

                        const { data: tagsData, error: tagsError } =
                            await supabase
                                .from("Tags")
                                .select("name")
                                .in("id", tagIds);

                        if (tagsError) {
                            throw new Error(tagsError.message);
                        }

                        return {
                            ...station,
                            tags: tagsData.map(({ name }) => name),
                        };
                    })
                );

                storesWithStationsAndTags.push({
                    store,
                    stations: stationsWithTags,
                });
            }
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
            .select()
            .eq("name", "Artikkel");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const articlePostType = postTypeData[0].name;
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

        // Add store name to article
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
        return { articlePostType, articleData };
    } catch (error) {
        console.error(
            "Error fetching articles with tags and store names:",
            error
        );
        return null;
    }
}

// GET all articles with respective tags
export async function getTopFourArticles() {
    const supabase = createClient();

    try {
        // Fetch the post type ID for articles from the PostType table
        const { data: postTypeData, error: postTypeError } = await supabase
            .from("PostType")
            .select()
            .eq("name", "Artikkel");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const articlePostType = postTypeData[0].name;
        const articlePostTypeId = postTypeData[0].id; // Extract article post type ID

        // Fetch all articles with the specified post type ID from the Post table
        const { data: articleData, error: articleError } = await supabase
            .from("Post")
            .select("*")
            .eq("postType_id", articlePostTypeId)
            .limit(4);

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
        return { articlePostType, articleData };
    } catch (error) {
        console.error(
            "Error fetching articles with tags and store names:",
            error
        );
        return null;
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

// select all events
export async function getEvents() {
    const supabase = createClient();

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

export async function getTopFourEvents() {
    const supabase = createClient();

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
            .eq("postType_id", eventPostTypeId)
            .limit(4);

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
        console.log(eventId);
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
            .from("Store")
            .select()
            .not("img", "is", null);

        if (storeError) {
            throw new Error(storeError.message);
        }
        return stores; // Return the fetched stores data
    } catch (error) {
        console.error("Error fetching stores:", error);
        return null; // Return null in case of an error
    }
}

// GET data from selected store id
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

        const stores = storeData[0];

        const { data: tagsData, error: tagsError } = await supabase
            .from("Store_Tags")
            .select("tag_id")
            .eq("store_id", stores.id);

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

        stores.tags = tagNamesData.map(({ name }) => name);

        // Get opening times for the store
        const { data: openingTimesData, error: openingTimesError } =
            await supabase
                .from("OpeningTimes")
                .select()
                .eq("store_id", stores.id);

        if (openingTimesError) {
            throw new Error(openingTimesError.message);
        }

        const dayIds = openingTimesData.map(
            (openingTime) => openingTime.day_id
        );
        const { data: dayData, error: dayError } = await supabase
            .from("Day")
            .select("name, id")
            .in("id", dayIds);

        if (dayError) {
            throw new Error(dayError.message);
        }

        // Create a map of day names with their corresponding ids for efficient lookup
        const dayMap = {};
        dayData.forEach((day) => {
            dayMap[day.id] = day.name;
        });

        // Add the day name to each opening time object
        const openingTimesWithDay = openingTimesData.map((openingTime) => {
            const dayName = dayMap[openingTime.day_id];
            return { ...openingTime, dayName };
        });

        return { stores, openingTimesWithDay };
    } catch (error) {
        console.error("Error fetching article id data:", error);
        return null;
    }
};

export async function getStoreVisions(storeId) {
    const supabase = createClient();

    try {
        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select()
            .eq("id", storeId.id);

        if (storeError) {
            throw new Error(storeError.message);
        }

        const store = storeData[0].id;
        const { data: storeVisionData, error: storeVisionError } =
            await supabase
                .from("StoreVision")
                .select("*")
                .eq("store_id", store);

        if (storeVisionError) {
            throw new Error(storeVisionError.message);
        }

        return storeVisionData;
    } catch (error) {
        console.error("Error fetching store visions:", error);
        return null;
    }
}

export async function getHighlights() {
    const supabase = createClient();

    const today = new Date();
    const startOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
    );

    const endOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay() + 6
    );

    const formattedStartOfWeek = startOfWeek.toISOString().split("T")[0];
    const formattedEndOfWeek = endOfWeek.toISOString().split("T")[0];

    try {
        const { data: postTypeData, error: postTypeError } = await supabase
            .from("PostType")
            .select()
            .eq("name", "Ukens høydepunkt");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const highlightPostTypeId = postTypeData[0].id;

        const { data: highlightData, error: highlightError } = await supabase
            .from("Post")
            .select()
            .eq("postType_id", highlightPostTypeId)
            .gte("updated_at", formattedStartOfWeek)
            .lte("updated_at", formattedEndOfWeek);
        if (highlightError) {
            throw new Error(highlightError.message);
        }
        if (!highlightData || highlightData.length <= 0) {
            throw new Error("Not highlights available");
        }

        for (let i = 0; i < highlightData.length; i++) {}

        return { highlights: highlightData };
    } catch (error) {
        console.error("Error fetching highlights:", error);
        return null;
    }
}
