import { Header } from "../Header";
import { ArrangementCard } from "../ArrangementCard";

export const ArrangementerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
            <main className="flex-1">
                <ArrangementCard />
            </main>
        </div>
    );
};
