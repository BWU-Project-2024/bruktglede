import { Footer } from "../Footer";
import { LandingHeader } from "../LandingHeader";
import { ArticleCard } from "../ArticleCard";
import { Button } from "../Button";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main className="flex-1">
                <ArticleCard
                    type="Artikkel"
                    store="Fretex"
                    title="Vi har pusset opp butikken!"
                    description="De siste månedene har vi jobbet med å gjøre butikken fin. Dette har vært..."
                />
            </main>

            <Footer />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
