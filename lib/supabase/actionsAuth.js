"use server"
import { createClient } from "./supabaseServer"

// * CREATE QUERY FUNCTIONS FOR AUTH DATA HERE - THEN IMPORT WHERE YOU NEED IT
//  All auth data that is fetched (logged in)

// GET user session (to check if logged in)
export const readUserSession = async () => {
    const supabase = createClient();

    return supabase.auth.getSession();
}

// GET all articles posts from the store (logged in user)
export const readStorePostsData = async (postType) => {
    const supabase = createClient();

    try {
        // Find logged in account that is connected to the logged in auth.user
        const user = await supabase.auth.getUser()
        const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('*')
            .eq('id', user.data.user.id)

        if (accountError) {
            throw new Error(data.message);
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
        const storeId = accountData[0].store_id;
        const { data: postData, error: postError  } = await supabase
        .from('Post')
        .select()
        .eq('store_id', storeId)
        .eq('postType_id', postTypeId);

        if (postError) {
            throw new Error(postError.message);
        }
        // console.log("post data:", postData);
        return postData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET the selected posts from the store in CMS (logged in user)
export const readStorePostsDataId = async (postId) => {
    const supabase = createClient();

    try {
        // Find the specific article/post by ID
        const { data: postIdData, error: postIdError } = await supabase
            .from('Post')
            .select()
            .eq('id', postId);

        if (postIdError) {
            throw new Error(postIdError.message);
        }

        // Find the associated tags for the post
        const { data: postTagsData, error: postTagsError } = await supabase
            .from("Post_Tags")
            .select()
            .eq("post_id", postId);

        if (postTagsError) {
            throw new Error(postTagsError.message);
        }

        // Return an object containing both sets of data
        return { postIdData, postTagsData };

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null;
    }
}

// GET all stations from the store (logged in user)
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

        // Find all stations connected to the logged in store
        const storeId = accountData[0].store_id;
        const { data: stationData, error: stationError  } = await supabase
        .from('Station')
        .select()
        .eq('store_id', storeId)

        if (stationError) {
            throw new Error(stationError.message);
        }
        // console.log("post data:", postData);
        return stationData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET the selected station from the store in CMS (logged in user)
export const readStoreStationsDataId = async (stationId) => {
    const supabase = createClient();

    try {
        // Find the specific article/post by id
        const { data: stationIdData, error: stationIdError } = await supabase
            .from('Station')
            .select()
            .eq('id', stationId);

        if (stationIdError) {
            throw new Error(stationIdError.message);
        }

        // Find the associated tags for the post
        const { data: stationTagsData, error: stationTagsError } = await supabase
            .from("Station_Tags")
            .select()
            .eq("station_id", stationId);

        if (stationTagsError) {
            throw new Error(stationTagsError.message);
        }

        // Return an object containing both sets of data
        return { stationIdData, stationTagsData };

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null;
    }
}


