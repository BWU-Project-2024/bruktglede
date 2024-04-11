"use client"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { newArticle, updateArticle } from "@/lib/supabase/actionsCMSForms";
import { useRouter } from 'next/navigation';

export const ArticleForm = ({ tagOptions, existingArticle, existingTags }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const router = useRouter();

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
            await updateArticle(formData, existingArticle.id);
            router.refresh();
            setShowSuccessAlert(true);
        } else {
            // Create new article
            await newArticle(formData);
            setShowSuccessAlert(true);
        }
        reset();
    };

    const onCloseAlert = () => {
        setShowSuccessAlert(false)
    }

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
            {showSuccessAlert && (
                <div id="alert-1" className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm">
                        <span className="font-medium">Suksess!</span> Arrangement ble vellykket laget eller oppdatert.
                    </div>
                    <button onClick={onCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" data-dismiss-target="#alert-1" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}
            <button type="submit" className="w-full bg-success-lighter hover:bg-success-default py-2 rounded mt-6 font-medium">Lagre endringer</button>
        </form>
    )
}