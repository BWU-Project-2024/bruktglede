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
