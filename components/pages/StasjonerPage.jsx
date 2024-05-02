import { Header } from "../Headers/Header"
import { StationInfo } from "../Info/StationInfo"
import { UrlPath } from "../Navbar/UrlPath"
import { fetchAllStationsSortedByStore } from "@/lib/supabase/actionsPublic";

export const StasjonerPage = async () => {
    const stationInfo = await fetchAllStationsSortedByStore();
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Innleveringsstasjoner" description="Her finner du en oversikt over hvor du kan gjøre donasjoner til bruktbutikkene." />
            <main className="flex-1 lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20 font-opensans">
                <section className="-mt-5">
                    <StationInfo stationInfo={stationInfo} />
                </section>
            </main>
        </div>
    )
}