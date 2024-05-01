import { Header } from "../Header"
import { UrlPath } from "../UrlPath"
import { AllStoresCard } from "../AllStoresCard";
import { BliEndelCard } from "../BliEndelCard";
import { Map } from "../Map";

export async function ButikkerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" />
            <main className="mt-5 font-opensans">
                <AllStoresCard />
                <BliEndelCard tittel="Savner du butikken din her?" tekst="Driver du en bruktbutikk i Gjøvik og ønsker å bli en del av Bruktglede? Send en søknad og bli en del av plattformen vår." knapptekst="Send søknad" />
                <Map />
            </main>
        </div>
    )
}