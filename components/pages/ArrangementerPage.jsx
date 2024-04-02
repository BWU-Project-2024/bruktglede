import { Header } from "../Header";
import { ArrangementCard } from "../ArrangementCard";
import { PiHouseLineLight, PiMapPinLineLight, PiTimer } from "react-icons/pi";
export const ArrangementerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
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
        </div>
    );
};
