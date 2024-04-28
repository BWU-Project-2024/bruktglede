"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/lib/supabase/actionsPublicForms";

export const BliFrivilligForm = ({ storeData }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {
        // Create new station
        await sendEmail(formData);
        setShowSuccessAlert(true);
        reset();
    };

    const onCloseAlert = () => {
        setShowSuccessAlert(false);
    };

    return (
        <>
            <section className="mb-40">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col"
                    aria-label="Volunteer form"
                    encType="multipart/form-data"
                >
                    <label className="text-md mb-2 font-medium" htmlFor="fornavn">
                        Fornavn
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="fornavn"
                        name="fornavn"
                        placeholder="Ditt fornavn.."
                        {...register("fornavn", {
                            required: "Vennligst skriv inn fornavnet ditt",
                        })}
                    />
                    <p className="mb-6 italic text-error-darker">
                        {errors.fornavn?.message}
                    </p>

                    <label className="text-md mb-2 font-medium" htmlFor="etternavn">
                        Etternavn
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="etternavn"
                        name="etternavn"
                        placeholder="Ditt etternavn.."
                        {...register("etternavn", {
                            required: "Vennligst skriv inn etternavnet ditt",
                        })}
                    />
                    <p className="mb-6 italic text-error-darker">
                        {errors.etternavn?.message}
                    </p>

                    <label className="text-md mb-2 font-medium" htmlFor="epost">
                        E-post
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="epost"
                        name="epost"
                        placeholder="Din e-post addresse.."
                        {...register("epost", {
                            required: "Vennligst skriv inn en e-post addresse",
                        })}
                    />
                    <p className="mb-6 italic text-error-darker">
                        {errors.epost?.message}
                    </p>

                    <label className="text-md mb-2 font-medium" htmlFor="mobil">
                        Mobilnummer
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="mobil"
                        name="mobil"
                        placeholder="Ditt mobilnummer.."
                        {...register("mobil", {
                            required: "Vennligst skriv inn et mobilnummer",
                        })}
                    />
                    <p className="mb-6 italic text-error-darker">
                        {errors.mobil?.message}
                    </p>

                    <label
                        htmlFor="butikker"
                        className="text-md mb-2 font-medium"
                    >
                        Hvor vil du bli frivillig?
                    </label>
                    <select
                        id="butikker"
                        name="butikker" // Ensure the name attribute is correctly set
                        className="border border-gray-200 rounded-lg block w-full p-2.5 mb-6"
                        {...register("butikker", {
                            required: "Vennligst velg en butikk", // Error message for required validation
                        })}
                    >
                        <option value="">Velg butikk</option>
                        {storeData.map((store) => (
                            <option key={store.id} value={store.name}>
                                {store.name}
                            </option>
                        ))}
                    </select>
                    {errors.butikker && (
                        <p className="mb-6 -mt-5 italic text-error-darker">
                            {errors.butikker.message}
                        </p>
                    )}
                    <label
                        className="text-md mb-2 font-medium"
                        htmlFor="beskrivelse"
                    >
                        Skriv om deg selv
                    </label>
                    <textarea
                        className="rounded-md px-3 py-2 border border-gray-200 min-h-32 h-58 mb-1"
                        id="beskrivelse"
                        name="beskrivelse"
                        placeholder="Hvem er du, og hvorfor vil du bli frivillig?"
                        {...register("beskrivelse", {
                            required: "Vennligst skriv din søknadstekst",
                        })}
                    />
                    <p className="mb-6 italic text-error-darker">
                        {errors.beskrivelse?.message}
                    </p>

                    {showSuccessAlert && (
                        <div id="alert-1" className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div className="ms-3 text-sm">
                                <span className="font-medium">Suksess!</span> Din forespørsel om å bli frivillig ble sendt.
                            </div>
                            <button onClick={onCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" data-dismiss-target="#alert-1" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-1/2 mt-4 lg:mt-8 lg:ml-20 lg:w-60 outline outline-1 p-2 md:p-2 px-4 font-opensans font-semibold rounded-sm outline-forestgreen-default md:px-4 md:outline-1.5 text-forestgreen-default hover:bg-forestgreen-default hover:text-ivory-default transition transition-duration-300"
                    >
                        Send søknad
                    </button>
                </form>
            </section>
        </>
    );
};
