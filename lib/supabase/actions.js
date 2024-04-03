"use server"
import { createClient } from "./supabaseServer"

// * CREATE QUERY FUNCTIONS HERE - THEN IMPORT WHERE YOU NEED IT

// GET user session (to check if logged in)
export const readUserSession = async () => {
    const supabase = createClient();

    return supabase.auth.getUser()
}

// GET the store from the logged in user
export const readStoreData = async () => {
    const supabase = createClient();

    try {
        const user = await supabase.auth.getUser()

        const { data: accountData, error: accountError  } = await supabase
            .from('Account')
            .select('*')
            .eq('id', user.data.user.id)

        console.log('data: ', accountData)

        if (accountError) {
            throw new Error(data.message);
        }

        const storeId = accountData[0].store_id;

        const { data: storeData, error: storeError } = await supabase
            .from('Store')
            .select()
            .eq('id', storeId);

        if (storeError) {
            throw new Error(storeError.message);
        }

        console.log(storeData);
        // console.log("user data: ", userData);

    } catch (error) {
        console.error('Error fetching store data:', error);
        return null; 
    }
}


