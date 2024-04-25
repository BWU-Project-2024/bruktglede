"use server"
import { createClient } from "./supabaseServer"
import { decode } from 'base64-arraybuffer'
import { v2 as cloudinary } from 'cloudinary';

// * CREATE QUERY FUNCTIONS FOR CMS FORM DATA HERE - THEN IMPORT WHERE YOU NEED IT
//! legge inn try-catch der det mangler

// Create new article
export const newArticle = async (formData, selectedImage) => {

    //* Retrieve the data input from the form
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const selectedTags = Array.from(formData.tagger);

    const supabase = createClient();

    //* Find the logged in user's store_id 
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(data.message);
    }

    //* Find the 'PostType' id that matches the type 'Artikkel' (funker)
    const { data: postTypeData, error: postTypeError } = await supabase
        .from('PostType')
        .select('id')
        .eq('name', "Artikkel");

    if (postTypeError) {
        throw new Error(postTypeError.message);
    }

    //* Insert data into the 'Post' table
    const storeId = accountData[0].store_id;
    const postTypeId = postTypeData[0].id;
    const { data: postData, error: postDataError } = await supabase
        .from("Post")
        .insert({
            title: tittel,
            ingress: ingress,
            bodyText: brodtekst,
            img: selectedImage, 
            postType_id: postTypeId,
            store_id: storeId,
        })
        .select('id');

    if (postDataError) {
        throw new Error(postDataError.message);
    }

    //* Insert data into the 'Post_Tags' table for each selected tag (if the are)
    if (selectedTags.length > 0) {
        await Promise.all(selectedTags.map(async (tagId) => {
            await supabase.from('Post_Tags').insert({
                tag_id: tagId,
                post_id: postData[0].id
            });
        }));
    }
};

// UPDATE article
export const updateArticle = async (formData, postId, existingImage) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const tagger = Array.from(formData.tagger);

    const supabase = createClient();
   
    try {
        // Update the article in the Post table
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .update({
                title: tittel,
                ingress: ingress,
                bodyText: brodtekst,
                img: existingImage,
            })
            .eq("id", postId);

        if (postDataError) {
                throw new Error(postDataError.message);
        }

        ("postdata:", postData);

        // Update the tags associated with the article in the Post_Tags table
        await supabase
            .from("Post_Tags")
            .delete()
            .eq("post_id", postId);

        // Insert the new tags associated with the article in the Post_Tags table
        await Promise.all(
            tagger.map(async (tagId) => {
                await supabase.from("Post_Tags").insert({
                    tag_id: tagId,
                    post_id: postId,
                });
            })
        );

    } catch (error) {
        console.error("Error updating article:", error.message);
        throw new Error("Error updating article.");
    }
};

// POST new event
export const newEvent = async (formData, selectedImage) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const adresse = formData.adresse;
    const dato = formData.dato;
    const startTid = formData.startTid;
    const sluttTid = formData.sluttTid;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const selectedTags = Array.from(formData.tagger);

    const supabase = createClient();

    //* Find the logged in user's store_id (funker)
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(data.message);
    }

    //* Find the 'PostType' id that matches the type 'Arrangement' (funker)
    const { data: postTypeData, error: postTypeError } = await supabase
        .from('PostType')
        .select('id')
        .eq('name', "Arrangement");

    if (postTypeError) {
        throw new Error(postTypeError.message);
    }

    //* Insert data into the 'Post' table
    const storeId = accountData[0].store_id;
    const postTypeId = postTypeData[0].id;
    const { data: postData, error: postDataError } = await supabase
        .from("Post")
        .insert({
            title: tittel,
            address: adresse,
            date: dato,
            startTime: startTid,
            endTime: sluttTid,
            ingress: ingress,
            bodyText: brodtekst,
            img: selectedImage,
            postType_id: postTypeId,
            store_id: storeId,
        })
        .select('id');

    if (postDataError) {
        throw new Error(postDataError.message);
    }

    //* Insert data into the 'Post_Tags' table for each selected tag (if the are)
    if (selectedTags.length > 0) {
        await Promise.all(selectedTags.map(async (tagId) => {
            await supabase.from('Post_Tags').insert({
                tag_id: tagId,
                post_id: postData[0].id
            });
        }));
    }
};

// UPDATE event
export const updateEvent = async (formData, postId, selectedImage) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const adresse = formData.adresse;
    const dato = formData.dato;
    const startTid = formData.startTid;
    const sluttTid = formData.sluttTid;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const tagger = Array.from(formData.tagger);

    const supabase = createClient();
   
    try {
        // Update the event in the Post table
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .update({
                title: tittel,
                address: adresse,
                date: dato,
                startTime: startTid,
                endTime: sluttTid,
                ingress: ingress,
                bodyText: brodtekst,
                img: selectedImage,
            })
            .eq("id", postId);

        if (postDataError) {
                throw new Error(postDataError.message);
        }

        ("postdata:", postData);

        // Update the tags associated with the article in the Post_Tags table
        await supabase
            .from("Post_Tags")
            .delete()
            .eq("post_id", postId);

        // Insert the new tags associated with the article in the Post_Tags table
        await Promise.all(
            tagger.map(async (tagId) => {
                await supabase.from("Post_Tags").insert({
                    tag_id: tagId,
                    post_id: postId,
                });
            })
        );
        
    } catch (error) {
        console.error("Error updating event:", error.message);
        throw new Error("Error updating event.");
    }
};


// POST new highlight
export const newHighlight = async (formData, selectedImage) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const ingress = formData.ingress; 

    const supabase = createClient();

    //* Find the logged in user's store_id (funker)
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(data.message);
    }

    //* Find the 'PostType' id that matches the type 'Ukens høydepunkt' (funker)
    const { data: postTypeData, error: postTypeError } = await supabase
        .from('PostType')
        .select('id')
        .eq('name', "Ukens høydepunkt");

    if (postTypeError) {
        throw new Error(postTypeError.message);
    }

    //* Insert data into the 'Post' table
    const storeId = accountData[0].store_id;
    const postTypeId = postTypeData[0].id;
    const { data: postData, error: postDataError } = await supabase
        .from("Post")
        .insert({
            title: tittel,
            ingress: ingress,
            img: selectedImage,
            postType_id: postTypeId,
            store_id: storeId,
        })
        .select('id');
        
    if (postDataError) {
        throw new Error(postDataError.message);
    }
};

// UPDATE highlight
export const updateHighlight = async (formData, postId, selectedImage) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const ingress = formData.ingress;

    const supabase = createClient();
   
    try {
        // Update the highlight in the Post table
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .update({
                title: tittel,
                ingress: ingress,
                img: selectedImage,
            })
            .eq("id", postId);

        if (postDataError) {
                throw new Error(postDataError.message);
        }

        
    } catch (error) {
        console.error("Error updating highlight:", error.message);
        throw new Error("Error updating highlight.");
    }
};

// DELETE post
export const deletePost = async (postId) => {
    const supabase = createClient();
    try {
        const { data: postData, error: errorData } = await supabase
            .from('Post')
            .delete()
            .eq('id', postId)
            .single(); 

        if (errorData) {
            throw new Error(errorData.message);
        }
        return postData;
    } catch (error) {
        console.error('Error deleting post:', error.message);
        return null;
    }
};

// POST new station
export const newStation = async (formData) => {

    //* Retrieve the data input from the form
    const tittel = formData.tittel;
    const addresse = formData.addresse;
    const selectedTags = Array.from(formData.tagger);

    const supabase = createClient();

    //* Find the logged in user's store_id 
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(data.message);
    }

    //* Insert data into the 'Station' table
    const storeId = accountData[0].store_id;
    const { data: stationData, error: stationDataError } = await supabase
        .from("Station")
        .insert({
            title: tittel,
            address: addresse,
            store_id: storeId,
        })
        .select('id');

    if (stationDataError) {
        throw new Error(stationDataError.message);
    }

    //* Insert data into the 'Station_Tags' table for each selected tag (if the are)
    if (selectedTags.length > 0) {
        await Promise.all(selectedTags.map(async (tagId) => {
            await supabase.from('Station_Tags').insert({
                tag_id: tagId,
                station_id: stationData[0].id
            });
        }));
    }
};

// UPDATE station
export const updateStation = async (formData, stationId) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const addresse = formData.address;
    const tagger = Array.from(formData.tagger);

    const supabase = createClient();
   
    try {
        // Update the station in the Station table
        const { data: stationData, error: stationDataError } = await supabase
            .from("Station")
            .update({
                title: tittel,
                address: addresse,
            })
            .eq("id", stationId);

        if (stationDataError) {
            throw new Error(stationDataError.message);
        }

        // Update the tags associated with the station in the Station_Tags table
        await supabase
            .from("Station_Tags")
            .delete()
            .eq("station_id", stationId);

        await Promise.all(
            tagger.map(async (tagId) => {
                await supabase.from("Station_Tags").insert({
                    tag_id: tagId,
                    station_id: stationId,
                });
            })
        );

    } catch (error) {
        console.error("Error updating station:", error.message);
        throw new Error("Error updating station.");
    }
};

// DELETE station
export const deleteStation = async (stationId) => {
    const supabase = createClient();
    try {
        const { data: stationData, error: stationError } = await supabase
            .from('Station')
            .delete()
            .eq('id', stationId)
            .single(); 

        if (stationError) {
            throw new Error(stationError.message);
        }
        return stationData;
    } catch (error) {
        console.error('Error deleting station:', error.message);
        return null;
    }
};

// Update password
export const updatePassword = async (formData) => {
    
    const password = formData.passord;

    const supabase = createClient();
    try {
        const { data: passwordData, error: passwordError } = await supabase
        .auth
        .updateUser({ 
            password: password 
        })

        if (passwordError) {
            throw new Error(passwordError.message);
        }

    } catch (error) {
        console.error('Error updating password:', error.message);
        return null;
    }
};

// Insert data into store
export const insertStoreData = async (formData, openingHoursData, selectedImage) => {

    //* Retrieve the data input from the form (funker)
    const butikknavn = formData.butikknavn;
    const beskrivelse = formData.beskrivelse;
    const adresse = formData.adresse;
    const tlfnummer = formData.tlfnummer;
    const epost = formData.epost;
    const selectedTags = Array.from(formData.tagger);

    const supabase = createClient();

    //* Find the logged in user's store_id (funker)
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(accountData.message);
    }

    const storeId = accountData[0].store_id;
    
    //* Insert data into the 'Store' table
    const { data: storeData, error: storeDataError } = await supabase
        .from("Store")
        .update({
            name: butikknavn,
            description: beskrivelse,
            address: adresse,
            phone: tlfnummer,
            contactEmail: epost,
            img: selectedImage,
        })
        .eq('id', storeId);

    if (storeDataError) {
        throw new Error(storeDataError.message);
    }

    //* Delete existing opening hours
    await supabase
    .from("OpeningTimes")
    .delete()
    .eq("store_id", storeId);
    
    
    //* Insert opening hours data into the 'OpeningTimes' table
    // Insert opening hours data
    await Promise.all(openingHoursData.map(async (hourData) => {        
        // Find the corresponding day ID
        const { data: dayIdData, error: dayIdError } = await supabase
            .from('Day')
            .select('id')
            .eq('name', hourData.day)
            .single();

        if (dayIdError) {
            throw new Error(dayIdError.message);
        }

        // Insert opening times into the 'OpeningTimes' table
        const dayId = dayIdData.id
        const { data: openingTimesData, error: openingTimesError } = await supabase
            .from("OpeningTimes")
            .insert({
                open: hourData.isOpen,
                openingHour: hourData.openingTime,
                closingHour: hourData.closingTime,
                day_id: dayId,
                store_id: storeId
            });

        if (openingTimesError) {
            throw new Error(openingTimesError.message);
        }
    }));

    //* Delete if there are old tags before inserting
    await supabase
    .from("Store_Tags")
    .delete()
    .eq("store_id", storeId);

    //* Insert data into the 'Store_Tags' table for each selected tag (if the are)
    if (selectedTags.length > 0) {
        await Promise.all(selectedTags.map(async (tagId) => {
            await supabase.from('Store_Tags').insert({
                tag_id: tagId,
                store_id: storeId
            });
        }));
    } 
};

// Insert data into store
export const insertStoreVisionData = async (formData, selectedImage) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const subtittel = formData.subtittel;
    const brodtekst = formData.brodtekst;

    const supabase = createClient();

    //* Find the logged in user's store_id (funker)
    const user = await supabase.auth.getUser()
    const { data: accountData, error: accountError } = await supabase
        .from('Account')
        .select('store_id')
        .eq('id', user.data.user.id)

    if (accountError) {
        throw new Error(accountData.message);
    }

    const storeId = accountData[0].store_id;
    
    //* Insert data into the 'Store' table
    const { data: storeVisionData, error: storeVisionError } = await supabase
        .from("StoreVision")
        .update({
            title: tittel,
            ingress: ingress, 
            subtitle: subtittel, 
            bodyText: brodtekst,
            img: selectedImage,
            store_id: storeId
        })
        .eq('store_id', storeId);

    if (storeVisionError) {
        throw new Error(storeVisionError.message);
    }

};

// Create new store user
export const newStoreUser = async (formData) => {
  //? Først lage en bruker er auth.user tablet (epost) -> sende passord
    //? Så ta id'en fra accounts tablet som blir laget.
    //? Lage en ny store med butikknavn.
    //? Hente den store_id'en som blir laget
    //? Legge inn brukernavn og store_id i accounts

    // Må huske å informere brukere at de må huske å legge inn egen kontakt-epost slik de kan bli nåes på epost.

    //* Retrieve the data input from the form 
    const brukernavn = formData.brukernavn;
    const butikknavn = formData.butikknavn;
    const epost = formData.epost;

    const supabase = createClient();
    try {
      

        //* endreee
        const { data: storeVisionData, error: storeVisionError } = await supabase
            .from("StoreVision")
            .update({
                title: tittel,
                ingress: ingress, 
                subtitle: subtittel, 
                bodyText: brodtekst,
                img: selectedImage,
                store_id: storeId
            })
            .eq('store_id', storeId);

        if (storeVisionError) {
            throw new Error(storeVisionError.message);
        }
        
    } catch (error) {
        console.error("Error adding newStoreUser:", error.message);
    }
        
};

export const glemtPassword = async (formData) => {
    const epost = formData.epost

    console.log(epost);

    const supabase = createClient();

    try {
        // Check if the user with the provided email exists
        const {data: accountData, error: accountError} = await supabase
            .from('Account')
            .select('email')
            .eq('email', epost)
            
        if (accountError) {
            throw new Error(accountError.message);
        }

        // If user exists, update the password
        if (accountData) {
            const { data: passwordData, error: passwordError } = await supabase
            .auth.resetPasswordForEmail(`${epost}`, {
                // redirectTo: 'http://localhost:3000/glemtpassord/nyttpassord',
              })

            if (passwordError) {
                throw new Error(passwordError.message);
            }
        } else {
            // If user does not exist, return an error
            throw new Error('User with provided email does not exist.');
        }

    } catch (error) {
        console.error('Error sending reset password email:', error.message);
        return error.message;
    }    
}

export const nyttPassword = async (formData) => {
    const epost = formData.epost
    const passord = formData.passord;

    console.log(epost);

    const supabase = createClient();

    try {
        //!funker ikke
        // Check if the user with the provided email exists
        const {data: accountData, error: accountError} = await supabase
            .from('Account')
            .select('email')
            .eq('email', epost)
            
        if (accountError) {
            throw new Error(accountError.message);
        }

        //! funker ikke
        // If user exists, update the password
        if (accountData) {
            const { data: token, error } = await supabase.auth.refreshSession();
            const { data: passwordData, error: passwordError } = await supabase
            .auth
            .updateUser(token,{ 
                email: epost,
                password: passord 
            })

            if (passwordError) {
                throw new Error(passwordError.message);
            }
        } else {
            // If user does not exist, return an error
            throw new Error('User with provided email does not exist.');
        }

    } catch (error) {
        console.error('Error updating password:', error.message);
        return error.message;
    }    
}