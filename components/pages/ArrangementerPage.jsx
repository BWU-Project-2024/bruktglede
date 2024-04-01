import { ArrangementCard } from "../ArrangementCard";
import { PiHouseLineLight, PiMapPinLineLight, PiTimer } from "react-icons/pi";
export const ArrangementerPage = () => {
    return (
        <main>
            <ArrangementCard
                type="Arrangement"
                store="Fretex"
                title="Gratis middag for studenter"
                description={
                    <>
                        <div className="flex items-center gap-3">
                            {" "}
                            <PiHouseLineLight /> Fretex Gjøvik{" "}
                        </div>
                        <div className="flex items-center gap-3">
                            <PiMapPinLineLight /> Lalala vegen 30
                        </div>
                        <div className="flex items-center gap-3">
                            <PiTimer /> 16.00 - 20.00{" "}
                        </div>
                    </>
                }
            />
        </main>
    );
};
