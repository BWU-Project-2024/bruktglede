import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { BliFrivilligCard } from "../BliFrivilligCard";
import { EventCardLong } from "../EventCardLong";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <EventCardLong
                date="24"
                month="juni"
                title="gratis middag"
                address="testvegen 10b"
                time="10-12"
                store="fretex"
            />
            <UkensHoydepunkt
                image={tekopp}
                text="Antikk kopp"
                store="Fretex"
                description="Denne uken er ukens høydepunkt en antikk kopp, som skinner i sin eldgamle prakt..."
            />
            <main className="">
                <BliFrivilligCard />
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
