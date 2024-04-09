"use client"
import { useForm } from "react-hook-form"
import { newArticle, updateArticle } from "@/lib/supabase/actionsCMSForms";

export const ArticleForm = ({ tagOptions, existingArticle, existingTags }) => {
    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: existingArticle ? {
            tittel: existingArticle.title,
            ingress: existingArticle.ingress,
            brodtekst: existingArticle.bodyText,
            tagger: existingTags.tagger
            // Set other fields' default values here
        } : {},
    });

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {
        if (existingArticle) {
            // Update existing article
            // Adjust the updateArticle function according to your Supabase logic
            await updateArticle(formData, existingArticle.id);
        } else {
            // Create new article
            await newArticle(formData);
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
                Ingress
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

            <label className="text-md font-medium mb-2" htmlFor="brodtekst">
                Brødtekst
            </label>
            <textarea
                className="rounded-md min-h-32 px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
                id="brodtekst"
                name="brodtekst"
                placeholder=""
                rows="3"
                {...register("brodtekst", {
                    required: "Vennligst skriv inn brødtekst",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.brodtekst?.message}</p>

            <label className="text-md font-medium mb-3" htmlFor="tagger">
                Tagger
            </label>
            <div className="flex flex-wrap gap-3 mb-4">
                {tagOptions.map((tag) => (
                    <div key={tag.id} className="flex justify-center items-center gap-2 bg-[#F5F5F5] rounded py-1 px-2">
                        <input
                            type="checkbox"
                            id={tag.id}
                            name="tagger"
                            value={tag.id}
                            className="rounded-sm border border-[#D9D9D9]"
                            {...register("tagger", {
                                required: "Vennligst velg minst én tagg",
                            })}
                            defaultChecked={existingTags && existingTags.some(existingTag => existingTag.tag_id === tag.id)}
                        />
                        <label htmlFor={tag.id}>{tag.name}</label>
                    </div>
                ))}
            </div>
            <p className="mb-6 italic text-error-darker">{errors.tagger?.message}</p>

            <label className="text-md font-medium mb-3 mt-3" htmlFor="fileIn put">
                Header bilde
            </label>
            <input
                type="file"
                name="fileInput"
                id="fileInput"
                accept="image/png, image/jpeg, image/jpg, image/webp, image/*"
                // må finne ut hvordan style file button (tailwind sier å bruke form: forran men funker ikke)
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
            <button type="submit" className="w-full bg-success-lighter hover:bg-success-default py-2 rounded mt-12 font-medium">Lagre endringer</button>
        </form>
    )
}