import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { BliFrivilligCard } from "../BliFrivilligCard";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main>
                <div className="flex-1 lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20">
                    <UkensHoydepunkt
                        image={tekopp}
                        text="Antikk kopp"
                        store="Fretex"
                        description="Denne uken er ukens høydepunkt en antikk kopp, som skinner i sin eldgamle prakt..."
                    />
                </div>
                <BliFrivilligCard />
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div> 
    );
};
