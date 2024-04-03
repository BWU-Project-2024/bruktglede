import { Header } from "../Header";
import { ArrangementCard } from "../ArrangementCard";
import test from "@/public/test.jpg";

export const ArrangementerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Arrangementer"
                description="Her finner du en oversikt over alle kommende arrangementer"
            />
            <main className="flex-1">
                <ArrangementCard
                    image={test}
                    type="Arrangement"
                    date="24"
                    month="JUN"
                    store="Fretex"
                    title="Gratis middag for studenter"
                    address="Gjøvikvegen 22, 2815 Gjøvik"
                    time="10:00 - 12:00"
                />
            </main>
        </div>
    );
};
