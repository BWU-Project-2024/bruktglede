import { Header } from "../Headers/Header";
import { UkensHoydepunktCard } from "../Cards/UkensHoydepunktCard";
import { getHighlights } from "@/lib/supabase/actionsPublic";
import { UrlPath } from "../Navbar/UrlPath";
import { NyhetsbrevForm } from "../Forms/NyhetsbrevForm";

export const HoydepunktPage = async () => {
    const highlightData = await getHighlights();

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header
                title="Ukens høydepunkter"
                description="Her finner du en oversikt over unike produkter butikkene plukker ut hver uke."
            />
            <main className="px-6 md:px-28 lg:px-64 font-opensans mb-20">
                <h2 className="text-lg lg:text-2xl font-medium font-opensans pt-5 md:mt-6 mb-8">Denne ukens høydepunkt</h2>
                <div className="w-full md:w-[80%] lg:w-[70%]">
                    <UkensHoydepunktCard highlightData={highlightData} />
                    <div className="mt-10 md:mt-20">
                        <h2 className="text-xl lg:text-2xl font-medium mb-4">Meld deg på nyhetsbrev</h2>
                        <p className="mb-4">Ønsker du å bli opplyst om ukens highlight? Legg igjen epost adressen din for å holde deg oppdatert! </p>
                    </div>
                    <NyhetsbrevForm />
                </div>
            </main>
        </div>
    );
};
