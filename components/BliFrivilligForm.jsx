import { getStore } from "@/lib/supabase/actionsPublicForms";
import { Controller, useForm } from "react-hook-form";

export const BliFrivilligForm = async () => {
    const store = await getStore();

    
    return (
        <>
            <section className="mb-40">
                <form className="flex flex-col" aria-label="CMS form" encType="multipart/form-data">
                    <label className="text-md mb-2 font-medium" htmlFor="navn">
                        Navn
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="navn"
                        name="navn"
                        placeholder="Ditt navn.."
                    />
                    <p className="mb-6 italic text-error-darker">error</p>

                    <label className="text-md mb-2 font-medium" htmlFor="epost">
                        E-post
                    </label>
                    <input
                        className="rounded-md px-3 py-2 bg-inherit border mb-1"
                        id="epost"
                        name="epost"
                        placeholder="Din e-post addresse.."
                    />
                    <p className="mb-6 italic text-error-darker">error</p>

                    <label htmlFor="countries" className="text-md mb-2 font-medium">Hvor vil du bli frivillig?</label>
                    <select id="butikker" className="border border-gray-200 rounded-lg block w-full p-2.5 mb-6">
                        <option defaultValue="">Velg butikk</option>
                        {store.map((storesData) => (
                            <option key={storesData.id} value={storesData.name}>
                                {storesData.name}
                            </option>
                        ))}
                    </select>

                    <label className="text-md mb-2 font-medium" htmlFor="beskrivelse">
                        Skriv om deg selv
                    </label>
                    <textarea
                        className="rounded-md px-3 py-2 border border-gray-200 min-h-32 h-58 mb-1"
                        id="beskrivelse"
                        name="beskrivelse"
                        placeholder="Hvem er du, og hvorfor vil du bli frivillig?"
                    />
                    <p className="mb-6 italic text-error-darker">error</p>

                    <button type="submit" className="w-1/2 mt-4 lg:mt-8 lg:ml-20 lg:w-60 outline outline-1 p-2 md:p-2 px-4 font-opensans font-semibold rounded-sm outline-forestgreen-default md:px-4 md:outline-1.5 text-forestgreen-default hover:bg-forestgreen-default hover:text-ivory-default transition transition-duration-300">Send søknad</button>
                </form>
            </section>
        </>
    );
};
