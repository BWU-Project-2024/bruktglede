"use client"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { insertStoreVisionData } from "@/lib/supabase/actionsCMSForms";
import Image from "next/image";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

export const ButikkVisjonForm = ({ existingData }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [image, setImage] = useState();
    const [imageError, setImageError] = useState('');
    const [existingImage, setExistingImage] = useState(existingData ? existingData.img : null);
    const [updateImage, setUpdateImage] = useState(false);

    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: existingData ? {
            tittel: existingData.title,
            ingress: existingData.ingress,
            subtittel: existingData.subtitle,
            brodtekst: existingData.bodyText,
        } : {},
    });

    // Read file selected
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const fileContent = reader.result;
            setImage(fileContent);
            setImageError('');
            setExistingImage(null)
            setUpdateImage(true);
        };
        reader.readAsDataURL(selectedFile);
    };

    // Listen on image changes
    useEffect(() => {
    }, [image]);

    useEffect(() => {
        if (existingData) {
            setExistingImage(existingData.img);
        }
    }, [existingData]);

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {

        let imageUrl = existingImage;
        if (existingData) {
            // Update existing data
            if (updateImage && image) {
                imageUrl = await uploadImageToCloudinary(image);
            }
            await insertStoreVisionData(formData, imageUrl);
        } else {
            // Insert data
            if (!image) {
                setImageError('Vennligst last opp ett bilde');
                return;
            }
            const imageUrl = await uploadImageToCloudinary(image);
            await insertStoreVisionData(formData, imageUrl);
        }
        setShowSuccessAlert(true);
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
                rows="4"
                {...register("ingress", {
                    required: "Vennligst skriv inn ingress",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.ingress?.message}</p>

            <label className="text-md mb-2 font-medium" htmlFor="subtittel">
                Underoverskrift
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-6"
                id="subtittel"
                name="subtittel"
                placeholder=""
                {...register("subtittel")}
            />

            <label className="text-md font-medium mb-2" htmlFor="brodtekst">
                Brødtekst
            </label>
            <textarea
                className="rounded-md min-h-20 px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
                id="brodtekst"
                name="brodtekst"
                placeholder=""
                rows="6"
                {...register("brodtekst", {
                    required: "Vennligst skriv inn brødtekst",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.brodtekst?.message}</p>

            <label className="text-md font-medium mb-3 mt-3" htmlFor="fileInput">
                Bilde
            </label>
            <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept="image/*"
                className="mb-4 rounded bg-[#F5F5F5] file:bg-[#F5F5F5] file:text-base"
                onChange={handleFileChange}
            />
            {imageError && <p className="mb-6 italic text-error-darker">{imageError}</p>}
            <div className="mb-4 bg-[#F5F5F5] p-4 rounded">
                {existingData && existingImage ? (
                    <Image
                        src={existingImage}
                        width={700}
                        height={0}
                        alt="Uploaded image"
                    />
                ) : (
                    image && (
                        <Image
                            src={image}
                            width={700}
                            height={0}
                            alt="Uploaded image"
                        />
                    )
                )}
            </div>
            {showSuccessAlert && (
                <div id="alert-1" className="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 " role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm">
                        <span className="font-medium">Suksess!</span> Butikkens visjon ble vellykket oppdatert.
                    </div>
                    <button onClick={onCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-1" aria-label="Close">
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