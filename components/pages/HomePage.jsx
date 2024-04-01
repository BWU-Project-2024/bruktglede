import { Header } from "../Header";
import { StoreTag } from "../StoreTag";
import { CategoryTag } from "../CategoryTag";

export const HomePage = () => {
    return (
        <div>
            <Header title="Homepage" description="Beskrivende tekst"></Header>

            <main>
                <StoreTag title="Fretex"></StoreTag>
                <CategoryTag bgColor="ivory-default" title="Klær"></CategoryTag>
            </main>
        </div>
    );
};
import { LandingHeader } from "../LandingHeader"
import { Button } from "../Button"

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    )
}
