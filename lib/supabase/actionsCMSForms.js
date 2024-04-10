"use server"
import { createClient } from "./supabaseServer"

// * CREATE QUERY FUNCTIONS FOR CMS FORM DATA HERE - THEN IMPORT WHERE YOU NEED IT
// All auth data for form-handling

/**  
    Det jeg har funnet ut er beste måten å bruke react-hook-forms sammen med supbase:

    1. Pagen (foreks Hompegage) er 'parenten', som må være et "use server" component.
    2. Du må lage react-hook-formet i et component som blir et 'child' som du importer til parenten.
    3. Du må lage submitform funksjonaliteten (supabase) her i actionsCMSForms.js, siden det er et "use server" funksjon.
    4. Så kan du passe supabase funksjonen inn i form fila/componentet ditt.  

    - Så, parent componentet må alltid være et "use server" component som kan ta inn "use client" components som children. IKKE omvendt. 
**/

// POST new article
export const newArticle = async (formData) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const headerbilde = formData.fileInput;
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
            img: headerbilde,
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
//! Tror den funker, men må lage en policy i supabase som allower oss å update tabelet - som ikke var så lett.. Så får ikke testet om denne funker ennå.
export const updateArticle = async (formData, postId) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const headerbilde = formData.fileInput;
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
                img: headerbilde,
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

// DELETE post
export const deletePost = async (postId) => {

}

// POST new event
export const newEvent = async (formData) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const addresse = formData.adresse;
    const dato = formData.dato;
    const klokkeslett = formData.klokkeslett;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const headerbilde = formData.fileInput;
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
            address: addresse,
            date: dato,
            time: klokkeslett,
            ingress: ingress,
            bodyText: brodtekst,
            img: headerbilde,
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
//! Tror den funker, men må lage en policy i supabase som allower oss å update tabelet - som ikke var så lett.. Så får ikke testet om denne funker ennå.
export const updateEvent = async (formData, postId) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const addresse = formData.adresse;
    const dato = formData.dato;
    const klokkeslett = formData.klokkeslett;
    const ingress = formData.ingress;
    const brodtekst = formData.brodtekst;
    const headerbilde = formData.fileInput;
    const tagger = Array.from(formData.tagger);

    const supabase = createClient();
   
    try {
        // Update the event in the Post table
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .update({
                title: tittel,
                address: addresse,
                date: dato,
                time: klokkeslett,
                ingress: ingress,
                bodyText: brodtekst,
                img: headerbilde,
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
export const newHighlight = async (formData) => {

    //* Retrieve the data input from the form (funker)
    const tittel = formData.tittel;
    const ingress = formData.ingress; 
    const headerbilde = formData.fileInput;

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
            img: headerbilde,
            postType_id: postTypeId,
            store_id: storeId,
        })
        .select('id');
        

    if (postDataError) {
        throw new Error(postDataError.message);
    }
};

// UPDATE event
//! Tror den funker, men må lage en policy i supabase som allower oss å update tabelet - som ikke var så lett.. Så får ikke testet om denne funker ennå.
export const updateHighlight = async (formData, postId) => {
    
    //* Retrieve the data input from the form 
    const tittel = formData.tittel;
    const ingress = formData.ingress;
    const headerbilde = formData.fileInput;

    const supabase = createClient();
   
    try {
        // Update the highlight in the Post table
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .update({
                title: tittel,
                ingress: ingress,
                img: headerbilde,
            })
            .eq("id", postId);

        if (postDataError) {
                throw new Error(postDataError.message);
        }

        ("postdata:", postData);
        
    } catch (error) {
        console.error("Error updating highlight:", error.message);
        throw new Error("Error updating highlight.");
    }
};