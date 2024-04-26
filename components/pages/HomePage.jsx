import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { BliFrivilligCard } from "../BliFrivilligCard";
import { AlleButikkerCardLong } from "../AlleButikker/AlleButikkerCardLong";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main>
                <div className="flex-1 lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20">
                    <h2 className="text-xl lg:text-2xl font-medium">Møt butikkene</h2>
                    <AlleButikkerCardLong />
                </div>
                <BliFrivilligCard />
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
