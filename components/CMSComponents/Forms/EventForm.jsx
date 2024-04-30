"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { newEvent, updateEvent } from "@/lib/supabase/actionsCMSForms";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

export const EventForm = ({ tagOptions, existingEvent, existingTags }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [image, setImage] = useState();
    const [imageError, setImageError] = useState('');
    const [existingImage, setExistingImage] = useState(existingEvent ? existingEvent.img : null);
    const [updateImage, setUpdateImage] = useState(false);

    // Create react-hook-form
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: existingEvent ? {
            tittel: existingEvent.title,
            adresse: existingEvent.address,
            dato: existingEvent.date,
            startTid: existingEvent.startTime,
            sluttTid: existingEvent.endTime,
            ingress: existingEvent.ingress,
            brodtekst: existingEvent.bodyText,
            tagger: existingTags.tagger
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
        if (existingEvent) {
            setExistingImage(existingEvent.img);
        }
    }, [existingEvent]);

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {
        let imageUrl = existingImage;
        if (existingEvent) {
            // Update existing event
            if (updateImage && image) {
                imageUrl = await uploadImageToCloudinary(image);
            }
            await updateEvent(formData, existingEvent.id, imageUrl);
            setShowSuccessAlert(true);
        } else {
            // Create new event
            if (!image) {
                setImageError('Vennligst last opp ett bilde');
                return;
            }
            const imageUrl = await uploadImageToCloudinary(image);
            await newEvent(formData, imageUrl);
            setShowSuccessAlert(true);
        }
        reset();
        setImage(null);
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
                className="bg-white rounded-md px-3 py-2 bg-inherit border mb-1"
                id="tittel"
                name="tittel"
                placeholder=""
                {...register("tittel", {
                    required: "Vennligst skriv inn en tittel",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.tittel?.message}</p>

            <label className="text-md mb-2 font-medium" htmlFor="adresse">
                Adresse
            </label>
            <input
                className="bg-white rounded-md px-3 py-2 bg-inherit border mb-1"
                id="adresse"
                name="adresse"
                placeholder="Eksempel: Adressevegen 15, 2815 Gjøvik"
                {...register("adresse", {
                    required: "Vennligst skriv inn en adresse",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.adresse?.message}</p>

            <label className="text-md mb-2 font-medium" htmlFor="dato">
                Dato
            </label>
            <Controller
                control={control}
                id="dato"
                name="dato"
                render={({ field }) => (
                    <DatePicker
                        className="bg-white w-full rounded border border-[#DBDBDB] mb-2"
                        placeholderText="Velg dato"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        dateFormat="dd/MM/yyyy"
                    />
                )}
                {...register("dato", {
                    required: "Vennligst velg en dato",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.dato?.message}</p>
            <label className="text-md  mb-4 font-medium" htmlFor="klokkeslett">
                Start og slutt tid for arrangement
            </label>
            <div className="flex items-center">
                <input
                    type="time"
                    id="startTid"
                    name="startTid"
                    className="rounded-md bg-white py-1 bg-inherit border border-[#D9D9D9]"
                    {...register("startTid", {
                        required: "Vennligst velg en start tid",
                    })}
                />
                <p className="mx-1">-</p>
                <input
                    type="time"
                    id="sluttTid"
                    name="sluttTid"
                    className="rounded-md bg-white py-1 bg-inherit border border-[#D9D9D9]"
                    {...register("sluttTid", {
                        required: "Vennligst velg en slutt tid",
                    })}
                />
            </div>
            <p className="mt-2 italic text-error-darker">{errors.startTid?.message}</p>
            <p className="mb-6 italic text-error-darker">{errors.sluttTid?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="ingress">
                Ingress
            </label>
            <textarea
                className="bg-white rounded-md min-h-20 px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
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
                className="bg-white rounded-md min-h-32 px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
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

            <label className="text-md font-medium mb-3 mt-3" htmlFor="fileInput">
                Header bilde
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
                {existingImage ? (
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
                        <span className="font-medium">Suksess!</span> Arrangementet ble vellykket laget eller oppdatert.
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