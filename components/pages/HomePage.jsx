import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import { StoreInfoBar } from "../StoreInfoBar";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />

            <StoreInfoBar
                time="Man-Fre 10:00 - 16:00"
                address="Gjøvikvegen 22, 2815 Gjøvik"
                phone="+47 953 45 968"
                mail="hello@fretex.no"
                categories={["Klær", "Sko", "Møbler"]}
            />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
