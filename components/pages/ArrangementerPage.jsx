import { Header } from "../Header";
import { UrlPath } from "../UrlPath";
import { EventCardLong } from "../EventCardLong";
import { getEvents } from "@/lib/supabase/actionsPublic";

export const ArrangementerPage = async () => {
    const { eventData } = await getEvents();

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
            <main className="">
                <div className=" md:px-28 lg:px-64 pt-5 lg:pt-10">
                    <EventCardLong eventData={eventData} />
                </div>
            </main>
        </div>
    );
};
