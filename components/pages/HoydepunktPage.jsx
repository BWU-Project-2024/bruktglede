
import { Header } from "../Header";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { getHighlights } from "@/lib/supabase/actionsPublic";
import { Header } from "../Header"
import { UrlPath } from "../UrlPath"

export const HoydepunktPage = async () => {
    const highlightData = await getHighlights();
    return (
        <div className="flex flex-col min-h-screen">

            <Header
                title="Ukens høydepunkt"
                description="Her finner du en oversikt over unike produkter butikkene plukker ut hver uke."
            />
            <main className="flex-1"></main>
            <UkensHoydepunkt highlightData={highlightData} />

            <Header title="Ukens høydepunkt" description="Her finner du en oversikt over unike produkter butikkene plukker ut hver uke." />
            <UrlPath />
            <main className="flex-1">

            </main>

        </div>
    );
};
