"use server"
import { createClient } from "./supabaseServer"

// * CREATE QUERY FUNCTIONS FOR AUTH DATA HERE - THEN IMPORT WHERE YOU NEED IT
//  All auth data that is fetched (logged in)

// GET admin user session (to check if logged in)
export const readUserSession = async () => {
    const supabase = createClient();
    try {
        const user = await supabase.auth.getUser()
        const session = await supabase.auth.getSession();

        if (session){
            //* Hente role_id til den logged in user
            const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('role_id')
            .eq('id', user.data.user.id)

            if (accountError) {
                throw new Error(accountError.message);
            }

            //* Hente id som matcher role_id til logged in user
            const accountRoleId = accountData[0].role_id;
            const {data: roleData, error: roleError } = await supabase
                .from('Role')
                .select('role')
                .eq('id', accountRoleId)
                
            if (roleError) {
                throw new Error(roleError.message);
            }
            
            return {session, roleData};
        }
    } catch (error) {
        console.error('Error fetching account data:', error);
        return null; 
    }
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
        console.error('Error fetching storePost data:', error);
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
        console.error('Error fetching storePostId data:', error);
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
        console.error('Error fetching station data:', error);
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
        console.error('Error fetching storeStationId data:', error);
        return null;
    }
}


// Fetch the logged in account's data
export const readAccountDataId = async () => {
    const supabase = createClient();

    try {
        // Find logged in account that is connected to the logged in auth.user
        const user = await supabase.auth.getUser();
        const authEmail = user.data.user.email;
    
        const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('*')
            .eq('id', user.data.user.id)

        if (accountError) {
            throw new Error(data.message);
        }

        // Find the associated store and info
        const storeId = accountData[0].store_id;
        const { data: storeIdData, error: storeIdError } = await supabase
            .from("Store")
            .select()
            .eq("id", storeId);

        if (storeIdError) {
            throw new Error(storeIdError.message);
        }

        // Find the associated tags for the post
        const { data: storeTagsData, error: storeTagsError } = await supabase
            .from("Store_Tags")
            .select()
            .eq("store_id", storeId);

        if (storeTagsError) {
            throw new Error(storeTagsError.message);
        }

        // Find the associated vision
        const { data: storeVisionData, error: storeVisionError } = await supabase
            .from("StoreVision")
            .select()
            .eq("store_id", storeId);

        if (storeVisionError) {
            throw new Error(storeVisionError.message);
        }

        return { authEmail, accountData, storeIdData, storeTagsData, storeVisionData };

    } catch (error) {
        console.error('Error fetching account and store data:', error);
        return null;
    }
}

// Read all requests from the db
export const readRequests = async () => {
    const supabase = createClient();
    try {
        const { data: requestData, error: requestError } = await supabase
            .from("Requests")
            .select()

        if (requestError) {
            throw new Error(requestError.message);
        }

        return requestData
        
    } catch (error) {
        console.error('Error fetching requests data:', error);
        return null;
    }
}

export const readAllSuperUsers = async () => {
    const supabase = createClient();
    try {

        // Get superuser role
        const { data: roleData, error: roleError } = await supabase
            .from("Role")
            .select("id")
            .eq("role", "superuser" )

        if (roleError) {
            throw new Error(roleError.message);
        }

        // Get account data with the role superuser
        const roleId = roleData[0].id
        const { data: accountData, error: accountError } = await supabase
            .from("Account")
            .select()
            .eq("role_id", roleId)

        if (accountError) {
            throw new Error(accountError.message);
        }

        // Get store data
        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select("name")

        if (storeError) {
            throw new Error(storeError.message);
        }

        // Combine accountData and storeData arrays into an array of objects
        const allSuperUsers = accountData.map((account, index) => ({
            accountData: account,
            storeData: storeData[index]
        }));

        return allSuperUsers;
        
    } catch (error) {
        console.error('Error fetching account and store data:', error);
        return null;
    }
}

//! Funker ikker
export const deleteAuthUser = async (accountId) => {
    const supabase = createClient();
    try {
        const user = await supabase.auth.getUser()
        const session = await supabase.auth.getSession();

        console.log("userid", accountId);
        const { data: userData, error: userError } = await supabase.auth.api.deleteUser(accountId)
      
        if (userError) {
            throw new Error(userError.message);
        }
        
    } catch (error) {
        console.error('Error deleting auth user:', error);
        return null;
    }
}
