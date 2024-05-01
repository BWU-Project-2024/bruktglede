import { Header } from "../Headers/Header";
import { UrlPath } from "../Navbar/UrlPath";
import { EventCardLong } from "../Cards/EventCardLong";
import { getEvents } from "@/lib/supabase/actionsPublic";

export const ArrangementerPage = async () => {
    const { eventData } = await getEvents();

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer."
            />
            <main className="font-opensans mt-10 md:mt-0 mb-10 md:mb-20">
                <div className="px-2 md:px-28 lg:px-64 lg:pt-20">
                    <EventCardLong eventData={eventData} />
                </div>
            </main>
        </div>
    );
};
