"use client"
import { useForm } from "react-hook-form"
import { newHighlight, updateHighlight } from "@/lib/supabase/actionsCMSForms";

export const HoydepunktForm = ({ existingHighlight }) => {
    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: existingHighlight ? {
            tittel: existingHighlight.title,
            ingress: existingHighlight.ingress,
            // Set other fields' default values here (img)
        } : {},
    });

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {
        if (existingHighlight) {
            // Update existing article
            await updateHighlight(formData, existingHighlight.id);
        } else {
            // Create new article
            await newHighlight(formData);
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" aria-label="CMS form" encType="multipart/form-data">
            <label className="text-md mb-2 font-medium" htmlFor="tittel">
                Tittel
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-1"
                id="tittel"
                name="tittel"
                placeholder=""
                {...register("tittel", {
                    required: "Vennligst skriv inn en tittel",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.tittel?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="ingress">
                Beskrivelse
            </label>
            <textarea
                className="rounded-md min-h-20 px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
                id="ingress"
                name="ingress"
                placeholder=""
                rows="2"
                {...register("ingress", {
                    required: "Vennligst skriv inn ingress",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.ingress?.message}</p>

            <label className="text-md font-medium mb-3 mt-3" htmlFor="fileIn put">
                Bilde av produkt
            </label>
            <input
                type="file"
                name="fileInput"
                id="fileInput"
                accept="image/png, image/jpeg, image/jpg, image/webp, image/*"
                // må finne ut hvordan style file button (tailwind sier å bruke file: forran men funker ikke)
                className="mb-4 rounded bg-[#F5F5F5] file:bg-[#F5F5F5] file:text-base"
                {...register("fileInput")}
            // Når vi får bildeopplasting på plass, gjør at bilde et required:
            // {...register("fileInput", {
            //     required: "Vennligst last opp ett bilde",
            // })}
            >
            </input>
            <div>
                <p className="italic mb-2">Ingen filer er valg for opplasting.</p>
            </div>
            <p className="mb-6 italic text-error-darker">{errors.fileInput?.message}</p>
            {/* Vil gjerne forhåndsvise bildet som personen laster opp her: */}
            {/* <img src="bilde som blir lastet opp av bruker" alt="Bilde" /> */}
            <button type="submit" className="w-full bg-success-lighter hover:bg-success-default py-2 rounded mt-6 font-medium">Lagre endringer</button>
        </form>
    )
}