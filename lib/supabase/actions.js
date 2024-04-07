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
        // console.log("store id:", storeId);
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
        // console.log("post data:", postData);
        return postData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET the selected posts from the store logged in user
export const readStorePostsDataId = async (postId) => {
    const supabase = createClient();

    try {
        // Find the specific article/post by ID
        const { data: postIdData, error: postIdError  } = await supabase
            .from('Post')
            .select()
            .eq('id', postId);

        if (postIdError) {
            throw new Error(postIdError.message);
        }

        return postIdData;

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}

// GET all stations from the store, logged in user
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



