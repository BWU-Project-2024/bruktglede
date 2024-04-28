import { Header } from "../Header";
import { ArrangementCard } from "../ArrangementCard";
import { getEvents } from "@/lib/supabase/actionsPublic";
import { UrlPath } from "../UrlPath"

export const ArrangementerPage = async () => {
    const { eventPostTypeName, eventData } = await getEvents();

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
            <UrlPath />
            <main className="">
                <div className="p-2 px-6 md:px-28 lg:px-64 lg:pt-20">

                </div>
                <div className="flex gap-6 ">
                    <ArrangementCard
                        eventData={eventData}
                        eventPostTypeName={eventPostTypeName}
                    />
                </div>
            </main>
        </div>
    );
};
