import { Header } from "../Header";

export const ButikkIdPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <StoreInfoBar
                time="Man-Fre 10:00 - 16:00"
                address="Gjøvikvegen 22, 2815 Gjøvik"
                phone="+47 953 45 988"
                mail="hello@fretex.no"
                categories={["Klær", "Møbler", "Sko"]}
            />

            <main className="flex-1"></main>
        </div>
    );
};
