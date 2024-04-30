import { Header } from "../Header";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { getHighlights } from "@/lib/supabase/actionsPublic";
import { UrlPath } from "../UrlPath";

export const HoydepunktPage = async () => {
    const highlightData = await getHighlights();

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header
                title="Ukens høydepunkter"
                description="Her finner du en oversikt over unike produkter butikkene plukker ut hver uke."
            />
            <main className="px-6 md:px-28 lg:px-64 font-opensans">
                <h2 className="mt-10 text-xl lg:text-2xl font-medium mb-10">Denne ukens høydepunkt</h2>
                <div className="w-full md:w-[80%] lg:w-[70%]">
                    <UkensHoydepunkt highlightData={highlightData} />
                </div>
            </main>
        </div>
    );
};
