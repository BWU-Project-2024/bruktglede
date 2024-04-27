"use server"
import { createClient } from "./supabaseServer"
import EmailTemplate from "@/components/EmailLayout";
import nodemailer from 'nodemailer';



// * CREATE QUERY FUNCTIONS FOR PUBLIC FORM DATA HERE - THEN IMPORT WHERE YOU NEED IT
// All public data for form-handling

/**  
    Det jeg har funnet ut er beste måten å bruke react-hook-forms sammen med supbase:

    1. Pagen (foreks Hompegage) er 'parenten', som må være et "use server" component.
    2. Du må lage react-hook-formet i et component som blir et 'child' som du importer til parenten.
    3. Du må lage submitform funksjonaliteten (supabase) her i actionsPublicForms.js, siden det er et "use server" funksjon.
    4. Så kan du passe supabase funksjonen inn i form fila/componentet ditt.  

    - Så, parent componentet må alltid være et "use server" component som kan ta inn "use client" components som children. IKKE omvendt. 
**/



export async function getStore() {
    const supabase = createClient();

    try {
        const { data: storesData, error: storeError } = await supabase
            .from("Store")
            .select();

        if (storeError) {
            throw new Error(storeError.message);
        }
        
        console.log("Data fetched from Supabase:", storesData); 
        return storesData;
        
    } catch (error) {
        console.error("Error fetching stores:", error);
        throw error;
    }
}


export const sendEmail = async (formData) => {
    const fornavn = formData.fornavn;
    const etternavn = formData.etternavn;
    const epost = formData.epost;
    const beskrivelse = formData.beskrivelse;
    const butikk = formData.butikker;
    const mobil = formData.mobil;

    const supabase = createClient();
    
    try {
        const { data: storeData, error: storeError } = await supabase
            .from("Store")
            .select("contactEmail")
            .eq("name", butikk);
        
        if (storeError) {
            throw new Error(storeError.message);
        } 

        const storeEmail = storeData[0].contactEmail;

   
        const transporter = nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user: 'bruktglede@hotmail.com',
                pass: 'WebByenBWU2024'
            }
        });

       
        const mailOptions = {
            from: transporter.options.auth.user,
            to: storeEmail,
            subject: 'Frivillig søknad',
            html: `<h2>Søknad om å bli frivillig</h2>
            <p>${fornavn} ${etternavn} ønsker å bli frivillig hos ${butikk}!</p>
            <h3>Søknadstekst</h3>
            <p>${beskrivelse}</p>
            <h3>Kontaktinformasjon</h3>

           <p> 
           Navn: ${fornavn} ${etternavn} <br>
           E-post: ${epost} <br>
            Mobilnr: ${mobil}
            </p>
            
            <p>Søknad sendt via Bruktglede</p>`

            
        };

        
        const info = await transporter.sendMail(mailOptions);

        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};