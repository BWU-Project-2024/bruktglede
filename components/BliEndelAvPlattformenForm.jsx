"use client"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendRequestToAdmin } from "@/lib/supabase/actionsPublicForms";

export const BliEndelAvPlattformenForm = ({ toggleForm }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {
        await sendRequestToAdmin(formData);
        setShowSuccessAlert(true);
        reset()
        toggleForm();
    };

    const onCloseAlert = () => {
        setShowSuccessAlert(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[90%] md:w-[30%]" aria-label="CMS form" encType="multipart/form-data">
            <h2 className="text-xl">Vil du bli endel av Bruktglede?</h2>
            <p className="text-lg mb-10">Send oss en forespørsel</p>
            <label className="text-md mb-2 font-medium" htmlFor="navn">
                Fult navn
            </label>
            <input
                className="bg-white rounded-md px-3 py-2 bg-inherit border"
                id="navn"
                name="navn"
                placeholder=""
                {...register("navn", {
                    required: "Vennligst skriv inn navnet ditt",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.navn?.message}</p>


            <label className="text-md font-medium mb-2" htmlFor="butikkNavn">
                Navnet på din butikk
            </label>
            <input
                className="bg-white rounded-md px-3 py-2 bg-inherit border"
                id="butikkNavn"
                name="butikkNavn"
                placeholder=""
                {...register("butikkNavn", {
                    required: "Vennligst skriv inn butikknavnet",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.butikkNavn?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="epost">
                Epost
            </label>
            <input
                className="bg-white rounded-md px-3 py-2 bg-inherit border"
                id="epost"
                name="epost"
                placeholder=""
                {...register("epost", {
                    required: "Vennligst skriv inn epostadressen din",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.epost?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="mobil">
                Telefonnummer
            </label>
            <input
                className="bg-white rounded-md px-3 py-2 bg-inherit border"
                id="mobil"
                name="mobil"
                placeholder=""
                {...register("mobil", {
                    required: "Vennligst skriv inn telefonnummeret ditt",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.mobil?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="melding">
                Kort melding
            </label>
            <textarea
                className="bg-white rounded-md min-h-32 h-58 px-3 py-2 bg-inherit border border-[#DBDBDB]"
                id="melding"
                name="melding"
                placeholder="Hvem er du, og hvorfor vil du bli endel av Bruktglede?"
                row="3"
                {...register("melding", {
                    required: "Vennligst skriv inn en kort melding",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.melding?.message}</p>


            {showSuccessAlert && (
                <div id="alert-1" className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 " role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm">
                        <span className="font-medium">Suksess!</span> Din forespørsel om å bli en del av plattformen ble sendt.
                    </div>
                    <button onClick={onCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-1" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}
            <button
                type="submit"
                className="mt-4 w-fit bg-forestgreen-default text-ivory-default px-16 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200"
            >
                Send forespørsel
            </button>
        </form>
    )
}