import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
// import tekopp from "@/public/tekopp.jpg";
import { BliFrivilligCard } from "../BliFrivilligCard";
import { AlleButikker } from "../AlleButikker/AlleButikker";

export const HomePage = () => {
    return (
        <>
            <LandingHeader />
            <main className="flex flex-col min-h-screen w-full">
                <div className="px-6 md:px-20 lg:px-64 pt-10 lg:pt-20">
                    <h2 className="text-xl lg:text-2xl font-medium mb-6">Møt butikkene</h2>
                </div>
                <AlleButikker />
                <BliFrivilligCard />
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </>
    );
};
