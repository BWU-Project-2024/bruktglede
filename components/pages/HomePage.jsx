import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />


            <UkensHoydepunkt
                image={tekopp}
                text="Antikk kopp"
                store="Fretex"
                description="Denne uken er ukens høydepunkt en antikk kopp, som skinner i sin eldgamle prakt..."
            />

            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
