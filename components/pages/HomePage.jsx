import { Footer } from "../Footer";
import { LandingHeader } from "../LandingHeader";
import { EventCard } from "../EventCard";
import { Button } from "../Button";
import { ArrangementCard } from "../ArrangementCard";
import { PiHouseLineLight, PiMapPinLineLight, PiTimer } from "react-icons/pi";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main className="flex-1">
                <EventCard
                    type="Artikkel"
                    store="Fretex"
                    title="Vi har pusset opp butikken!"
                    description="De siste månedene har vi jobbet med å gjøre butikken fin. Dette har vært..."
                />
            </main>

            <main className="flex-1">
                <ArrangementCard
                    type="Arrangement"
                    store="Fretex"
                    title="Gratis middag for studenter"
                    icons={[PiHouseLineLight, PiMapPinLineLight, PiTimer]}
                    description={[
                        "Fretex Gjøvik",
                        "Lalala vegen 30",
                        "16.00 - 20.00",
                    ]}
                />
            </main>
            <Footer />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
