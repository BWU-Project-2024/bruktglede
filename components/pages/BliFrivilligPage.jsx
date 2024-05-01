import { Header } from "../Header"
import { UrlPath } from "../UrlPath"
import { BliFrivilligForm } from "../BliFrivilligForm"
import { H2Section } from "../H2Section"
import { getStore } from "@/lib/supabase/actionsPublicForms";

export const BliFrivilligPage = async () => {
    const store = await getStore();
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Vil du bli frivillig?" description="Jobb som frivillig i Gjøvik!" />
            <main className="flex-1 px-6 md:px-28 lg:px-64 md:max-w-[85%] lg:max-w-[75%] pt-5 lg:pt-10 font-opensans">
                <H2Section heading="Hvorfor bli frivillig?" paragraph="Å jobbe som frivillig i en bruktbutikk er en fantastisk måte å gi tilbake til samfunnet på samtidig som man får verdifull erfaring. Her får du muligheten til å møte nye mennesker og være en del av et positivt fellesskap. Du vil også lære om bærekraftig forbruk og gjenbruk, noe som kan inspirere til mer miljøvennlige vaner." />
                <H2Section heading="Hva går arbeidet ut på?" paragraph="Arbeidet som frivillig i en bruktbutikk kan variere, men det inkluderer ofte oppgaver som kundeservice, sortering av donerte varer, prising, og organisering av butikkens inventar. Du kan også få muligheten til å delta i markedsføringsaktiviteter, arrangementer og salgskampanjer for å øke butikkens inntekter og synlighet i lokalsamfunnet.
" />
                <div className="w-[100%] md:w-[75%]">
                    <BliFrivilligForm storeData={store} />
                </div>

            </main>
        </div>
    )
}