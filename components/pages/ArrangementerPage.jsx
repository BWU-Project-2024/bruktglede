import { Header } from "../Header"
import { ArrangementCard } from "../ArrangementCard";
import { PiHouseLineLight, PiMapPinLineLight, PiTimer } from "react-icons/pi";
export const ArrangementerPage = () => {
    return (
      
       <div className="flex flex-col min-h-screen">
            <Header title="Arrangementer" description="Her finner du en oversikt over alle kommende arrangementer" />
            <main className="flex-1">
      
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
        </div>
      
        <main>
           
        </main>
    );
};

