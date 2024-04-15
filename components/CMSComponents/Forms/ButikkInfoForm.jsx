"use client"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { insertStoreData } from "@/lib/supabase/actionsCMSForms";
import { useRouter } from 'next/navigation';

export const ButikkInfoForm = ({ tagOptions, existingData, existingTags }) => {
    const router = useRouter()
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [openingHours, setOpeningHours] = useState([
        { day: 'Mandag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Tirsdag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Onsdag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Torsdag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Fredag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Lørdag', isOpen: false, openingTime: '', closingTime: '' },
        { day: 'Søndag', isOpen: false, openingTime: '', closingTime: '' },
    ]);

    // Create react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: existingData ? {
            butikknavn: existingData.name,
            beskrivelse: existingData.description,
            adresse: existingData.address,
            tlfnummer: existingData.phone,
            epost: existingData.contactEmail,
            tagger: existingTags.tagger,
            apningstider: existingData.apningstider
            // Set other fields' default values here
        } : {},
    });

    // On submit async function and passing in formData from the form into the supabase function.
    const onSubmit = async (formData) => {

        // Get the opening hours from form
        const openingHoursData = openingHours.map((day) => ({
            day: day.day,
            isOpen: day.isOpen,
            openingTime: day.openingTime,
            closingTime: day.closingTime,
        }));

        await insertStoreData(formData, openingHoursData);

        router.refresh();
        setShowSuccessAlert(true);
    };

    const toggleDay = (index) => {
        const updatedOpeningHours = [...openingHours];
        updatedOpeningHours[index] = {
            ...updatedOpeningHours[index],
            isOpen: !updatedOpeningHours[index].isOpen,
        };
        setOpeningHours(updatedOpeningHours);
    };

    const handleTimeChange = (index, field, value) => {
        const updatedOpeningHours = [...openingHours];
        updatedOpeningHours[index] = {
            ...updatedOpeningHours[index],
            [field]: value,
        };
        setOpeningHours(updatedOpeningHours);
    };

    const onCloseAlert = () => {
        setShowSuccessAlert(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" aria-label="CMS form" encType="multipart/form-data">
            <label className="text-md mb-2 font-medium" htmlFor="butikknavn">
                Butikknavn
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-1"
                id="butikknavn"
                name="butikknavn"
                placeholder=""
                {...register("butikknavn", {
                    required: "Vennligst skriv inn et butikknavn",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.butikknavn?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="beskrivelse">
                Kort beskrivelse av butikk
            </label>
            <textarea
                className="rounded-md px-3 py-2 bg-inherit border border-[#DBDBDB] mb-1"
                id="beskrivelse"
                name="beskrivelse"
                placeholder=""
                rows="2"
                {...register("beskrivelse", {
                    required: "Vennligst skriv inn en kort beskrivelse",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.beskrivelse?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="apningstider">
                Åpningstider
            </label>
            <p className="mb-4">Kryss av for de dagene butikken holder åpent, og velg åpningstid og stengetid. De som <span className="font-bold">ikke</span> blir krysset av blir automatisk markert som <span className="italic">stengt</span>.</p>

            {openingHours.map((day, index) => (
                <div key={index} className="flex items-center mb-3">
                    <input
                        type="checkbox"
                        id={day.day}
                        name={day.day}
                        className="rounded-sm border border-[#D9D9D9]"
                        checked={day.isOpen}
                        onChange={() => toggleDay(index)}
                    />
                    <label htmlFor={day.day} className="ml-2">
                        {day.day}
                    </label>
                    {day.isOpen && (
                        <div className="flex items-center ml-4">
                            <input
                                type="time"
                                placeholder="xx:xx"
                                className="rounded-md py-1 bg-inherit border border-[#D9D9D9]"
                                value={day.openingTime}
                                onChange={(e) =>
                                    handleTimeChange(index, "openingTime", e.target.value)
                                }
                            />
                            <p className="mx-1">-</p>
                            <input
                                type="time"
                                placeholder="xx:xx"
                                className="rounded-md py-1 bg-inherit border border-[#D9D9D9]"
                                value={day.closingTime}
                                onChange={(e) =>
                                    handleTimeChange(index, "closingTime", e.target.value)
                                }
                            />
                        </div>
                    )}
                </div>
            ))}
            <p className="mb-6 italic text-error-darker">{errors.apningstider?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="adresse">
                Adresse
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-1"
                id="adresse"
                name="adresse"
                placeholder=""
                {...register("adresse", {
                    required: "Vennligst skriv inn adresse",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.adresse?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="tlfnummer">
                Telefonnummer
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-1"
                id="tlfnummer"
                name="tlfnummer"
                placeholder=""
                {...register("tlfnummer", {
                    required: "Vennligst skriv inn telefonnummer",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.tlfnummer?.message}</p>

            <label className="text-md font-medium mb-2" htmlFor="epost">
                Epost
            </label>
            <input
                className="rounded-md px-3 py-2 bg-inherit border mb-1"
                id="epost"
                name="epost"
                placeholder=""
                {...register("epost", {
                    required: "Vennligst skriv inn en epost",
                })}
            />
            <p className="mb-6 italic text-error-darker">{errors.epost?.message}</p>

            <label className="text-md font-medium mb-3" htmlFor="tagger">
                Butikkens overordnet sortiment
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
                Bilde av eller fra butikken
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
                        <span className="font-medium">Suksess!</span> Butikkens nøkkelinformasjon ble oppdatert.
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