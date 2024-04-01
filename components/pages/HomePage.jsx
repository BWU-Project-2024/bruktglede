import { Header } from "../Header";
import { StoreTag } from "../StoreTag";
import { CategoryTag } from "../CategoryTag";
import { Footer } from "../Footer";
import { LandingHeader } from "../LandingHeader";
import { EventCard } from "../EventCard";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            {/* test */}
            <main className="flex-1">
                <EventCard
                    type="Artikkel"
                    store="Fretex"
                    title="Vi har pusset opp butikken!"
                    description="De siste månedene har vi jobbet med å gjøre butikken fin. Dette har vært..."
                />
            </main>
            <Footer />
        </div>
    );
};
