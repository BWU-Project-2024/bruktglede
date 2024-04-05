import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />

            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
