"use client"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { updatePassword, } from "@/lib/supabase/actionsCMSForms";
import { FiAlertOctagon } from "react-icons/fi";

export const EndrePassordForm = () => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {

        const { passord, bekreftPassord } = formData;

        if (passord !== bekreftPassord) {
            setPasswordMismatch(true);
            return;
        }
        setPasswordMismatch(false)
        await updatePassword(formData);
        setShowSuccessAlert(true);
        reset();
    };

    const onCloseAlert = () => {
        setShowSuccessAlert(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" aria-label="CMS form" encType="multipart/form-data">
            <label className="text-md mb-2 font-medium" htmlFor="passord">
                Skriv inn nytt passord:
            </label>
            <input
                type="password"
                className="bg-white rounded-md px-3 py-2 bg-inherit border mb-1 border-[#D9D9D9]"
                id="passord"
                name="passord"
                placeholder=""
                {...register("passord", {
                    required: "Vennligst skriv inn et nytt passord",
                    minLength: {
                        value: 6,
                        message: "Passordet må være minst 6 tegn"
                    }
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.passord?.message}</p>

            <label className="text-md mb-2 font-medium" htmlFor="bekreftPassord">
                Bekreft nytt passord:
            </label>
            <input
                type="password"
                className="bg-white rounded-md px-3 py-2 bg-inherit border mb-1 border-[#D9D9D9]"
                id="bekreftPassord"
                name="bekreftPassord"
                placeholder=""
                {...register("bekreftPassord", {
                    required: "Vennligst bekreft passord",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.bekreftPassord?.message}</p>

            {passwordMismatch && (
                <div className="flex items-center my-6 gap-2">
                    <FiAlertOctagon />
                    <p className="italic text-error-darker">Passordene stemmer ikke overens!</p>
                </div>
            )}

            {showSuccessAlert && (
                <div id="alert-1" className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm">
                        <span className="font-medium">Suksess!</span> Passordet ble oppdatert.
                    </div>
                    <button onClick={onCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" data-dismiss-target="#alert-1" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}

            <button type="submit" className="w-full bg-success-lighter hover:bg-success-default py-2 rounded mt-6 font-medium">Opprett nytt passord</button>
        </form>
    )
}