import { Header } from "../Header";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";

export const HoydepunktPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Ukens høydepunkt"
                description="Hver uke plukker butikkene ut hvert sitt spesielle produkt som ukens høydepunkt."
            />

            <h3 className="font-semibold pl-4 py-5">
                Høydepunkt hos Fretex uke 25
            </h3>

            <UkensHoydepunkt
                image={tekopp}
                text="Antikk kopp"
                store="Fretex"
                description="Denne uken er ukens høydepunkt en antikk kopp, som skinner i sin eldgamle prakt..."
            />

            <h3 className="font-semibold pl-4">Hold deg oppdatert</h3>
            <p className="pl-4 pt-3 w-11/12">
                Ønsker du å bli opplyst om ukens highlight? Legg igjen epost
                adressen din for å holde deg oppdatert!{" "}
            </p>
            <main className="flex-1"></main>
        </div>
    );
};
