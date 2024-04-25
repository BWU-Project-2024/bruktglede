
import { Header } from "../Header";
import { ArrangementCard } from "../ArrangementCard";
import { getEvents } from "@/lib/supabase/actionsPublic";

export const ArrangementerPage = async () => {
    const { eventPostTypeName, eventData } = await getEvents();

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
            <main>
                <div className="flex gap-6">
                    <ArrangementCard
                        eventData={eventData}
                        eventPostTypeName={eventPostTypeName}
                    />
                </div>
            </main>
        </div>
    );
};
