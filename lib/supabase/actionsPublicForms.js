"use server";
import { createClient } from "./supabaseServer";
import nodemailer from "nodemailer";
import cron from "node-cron";

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
            service: "Hotmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: transporter.options.auth.user,
            to: storeEmail,
            subject: "Frivillig søknad",
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
            
            <p>Søknad sendt via Bruktglede</p>`,
        };

        const info = await transporter.sendMail(mailOptions);

        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export const newContact = async (formData) => {
    //* Retrieve the data input from the form
    const fornavn = formData.fornavn;
    const etternavn = formData.etternavn;
    const epost = formData.epost;

    const supabase = createClient();

    try {
        //* Insert data into the 'Station' table

        const { data: contactData, error: contactDataError } = await supabase
            .from("Contacts")
            .insert({
                firstName: fornavn,
                lastName: etternavn,
                epost: epost,
            });

        if (contactDataError) {
            throw new Error(contactDataError.message);
        }
    } catch (error) {
        console.error("Error inserting contact:", error.message);
        return null;
    }
};



export async function sendNewsletter() {
    const supabase = createClient();
  
    try {
      // Fetch recipient's data from the database
      const { data: contactData, error: contactError } = await supabase
        .from("Contacts")
        .select();
  
      if (contactError) {
        throw new Error(contactError.message);
      }
  
    
      const contacts = contactData[0]

      console.log(contacts)
  
      console.log("Contact data:", contactData);


 
      const transporter = nodemailer.createTransport({
        service: "Hotmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
     
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: epost,
        subject: "Bruktglede - ukens høydepunkt!",
        html: `<h2>Her er ukens høydepunkt</h2>
              <p>Hei, ${firstName} ${lastName}! Ta en titt på ukens høydepunkt fra Bruktglede.</p>
              <p>Søknad sendt via Bruktglede</p>`,
      };
  
      // Send the email
      const info = await transporter.sendMail(mailOptions);
  
      return info;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };


  

cron.schedule(
    "* * * * *", // 9 minutes past 19:00 on Sunday (0 represents Sunday)
   async () => {
        console.log("Cron job triggered!");
    
    },
    {   scheduled: true,
        timezone: "Europe/Oslo",
    }
);

