import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import { ButikkVisjon } from "../ButikkVisjon";
import butikk from "@/public/butikk.jpg";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />

            <ButikkVisjon image={butikk} store="Fretex" />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
