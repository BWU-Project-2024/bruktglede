"use server"
import { createClient } from "./supabaseServer"

// * CREATE QUERY FUNCTIONS HERE - THEN IMPORT WHERE YOU NEED IT

// GET user session (to check if logged in)
export const readUserSession = async () => {
    const supabase = createClient();

    return supabase.auth.getSession();
}

// GET the articles posts from the store logged in user
export const readStorePostsData = async (postType) => {
    const supabase = createClient();

    try {
        // find logged in account that is connected to the logged in auth.user
        const user = await supabase.auth.getUser()
        const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('*')
            .eq('id', user.data.user.id)

        if (accountError) {
            throw new Error(data.message);
        }

        // Find the store that is connected to the logged in account
        const storeId = accountData[0].store_id;
        console.log("store id:", storeId);
        const { data: storeData, error: storeError } = await supabase
            .from('Store')
            .select()
            .eq('id', storeId);

        if (storeError) {
            throw new Error(storeError.message);
        }

        // Get the id of the 'Artikler' post type
        const { data: postTypeData, error: postTypeError } = await supabase
        .from('PostType')
        .select('id')
        .eq('name', postType);

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        // Find all the article-posts connected to the store
        const postTypeId = postTypeData[0].id;
        const storeid = storeData[0].id
        const { data: postData, error: postError  } = await supabase
        .from('Post')
        .select()
        .eq('store_id', storeid)
        .eq('postType_id', postTypeId);

        if (postError) {
            throw new Error(postError.message);
        }
console.log("post data:", postData);
        return postData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET the articles posts from the store logged in user
export const readStoreStationsData = async () => {
    const supabase = createClient();

    try {
        // find logged in account that is connected to the logged in auth.user
        const user = await supabase.auth.getUser()
        const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('*')
            .eq('id', user.data.user.id)

        if (accountError) {
            throw new Error(data.message);
        }

        // Find the store that is connected to the logged in account
        const storeId = accountData[0].store_id;
        const { data: storeData, error: storeError } = await supabase
            .from('Store')
            .select()
            .eq('id', storeId);

        if (storeError) {
            throw new Error(storeError.message);
        }

        // Find all the article-posts connected to the store
        const storeid = storeData[0].id
        const { data: stationData, error: stationError  } = await supabase
        .from('Station')
        .select()
        .eq('store_id', storeid)

        if (stationError) {
            throw new Error(stationError.message);
        }

        return stationData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET all stations from each store with tags
export async function fetchAllStationsSortedByStore() {
    const supabase = createClient();

    try {
        // Get all stores data to get their id
        const { data: storesData, error: storeError } = await supabase
        .from("Store")
        .select()

        if (storeError) {
            throw new Error(storeError.message);
        }
        
        // New array to store stores with their stations
        const storesWithStationsAndTags = []

        // Iterate through each store
        for (const store of storesData) {

            // Fetch stations for the each store
            const { data: stationsData, error: stationsError } = await supabase
                .from('Station')
                .select('*')
                .eq('store_id', store.id);
            
            if (stationsError) {
                throw new Error(stationsError.message);   
            }

            // For each station, fetch its associated tags
            const stationsWithTags = await Promise.all(
                stationsData.map(async (station) => {
                    // Fetch tag IDs for the current station from Station_Tags table
                    const { data: stationTags, error: stationTagsError } = await supabase
                        .from('Station_Tags')
                        .select('tag_id')
                        .eq('station_id', station.id);
                
                    if (stationTagsError) {
                        throw new Error(stationTagsError.message);
                    }

                    // Fetch tag names for the extracted tag_id's from Tags table
                    const tagIds = stationTags.map(
                        ({ tag_id }) => tag_id
                    );
                    
                    const { data: tagsData, error: tagsError } = await supabase
                        .from('Tags')
                        .select('name')
                        .in('id', tagIds);

                    if (tagsError) {
                        throw new Error(tagsError.message);
                    }

                    // Return the station with its associated tags
                    return {
                        ...station,
                        tags: tagsData.map(
                            ({ name }) => name
                        ),
                    };
                })
            );
            // Add the store along with its stations and tags to the result array
            storesWithStationsAndTags.push({
                store,
                stations: stationsWithTags
            });
        }   

        return storesWithStationsAndTags;

    } catch (error) {
        console.error('Error fetching stations data:', error);
       
        return null;
    }
}


// Function to fetch all articles from the Post table
export async function getArticles() {
    const supabase = createClient(); // Create Supabase client instance

    try {
        // Fetch the post type ID for articles from the PostType table
        const { data: postTypeData, error: postTypeError } = await supabase
            .from('PostType')
            .select('id')
            .eq('name', 'Artikkel'); // Use 'Artikkel' instead of 'article'

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        const articlePostTypeId = postTypeData[0].id; // Extract article post type ID

        
        // Fetch all articles with the specified post type ID from the Post table
        const { data: articleData, error: articleError } = await supabase
            .from('Post')
            .select('*') 
            .eq('postType_id', articlePostTypeId); // Filter posts by post type ID

        if (articleError) {
            throw new Error(articleError.message);
        }

        
        console.log("Article Data:", articleData); // Log fetched articles
        return articleData; // Return the fetched articles
    } catch (error) {
        console.error('Error fetching articles:', error);
        return null; // Return null in case of an error
    }
};
