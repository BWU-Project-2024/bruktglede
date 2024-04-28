"use server"
import { createClient } from "./supabaseServer"
import EmailTemplate from "@/components/EmailLayout";
import nodemailer from 'nodemailer';

// * CREATE QUERY FUNCTIONS FOR PUBLIC FORM DATA HERE - THEN IMPORT WHERE YOU NEED IT

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

// Send bli frivllig skjema
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

// Send bli bli en del av plattformen skjema
export const sendRequestToAdmin = async (formData) => {
    const email = formData.epost;
    const name = formData.navn;
    const storeName = formData.butikkNavn;
    const phone = formData.mobil;
    const message = formData.melding;

    console.log(formData);

    const supabase = createClient();

    try {
        const { data: requestData, error: requestError } = await supabase
        .from("Requests")
        .insert({
            email: email,
            name: name,
            storeName: storeName,
            phone: phone,
            message: message,
        })
        
        if (requestError) {
            throw new Error(requestError.message);
        }
        
    } catch (error) {
        console.error("Error sending forespørsel til butikk:", error);
        throw error;
    }
}
