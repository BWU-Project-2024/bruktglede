"use server";
import { Header } from "../Header"
import { BliFrivilligForm } from "../BliFrivilligForm"
import { H2Section } from "../H2Section"


export const BliFrivilligPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Vil du bli frivillig?" description="Jobb som frivillig i Gjøvik" />
            <main className="flex-1  lg:-mt-10 p-2 px-6 md:w-4/5 lg:w-3/4 max-w-readable md:px-20 lg:px-40 lg:pt-20">

            <H2Section heading="Hvorfor bli frivillig?" paragraph="Å jobbe som frivillig i en bruktbutikk er en fantastisk måte å gi tilbake til samfunnet på samtidig som man får verdifull erfaring. Her får du muligheten til å møte nye mennesker og være en del av et positivt fellesskap. Du vil også lære om bærekraftig forbruk og gjenbruk, noe som kan inspirere til mer miljøvennlige vaner." />
            <H2Section heading="Hva går arbeidet ut på?" paragraph="Arbeidet som frivillig i en bruktbutikk kan variere, men det inkluderer ofte oppgaver som kundeservice, sortering av donerte varer, prising, og organisering av butikkens inventar. Du kan også få muligheten til å delta i markedsføringsaktiviteter, arrangementer og salgskampanjer for å øke butikkens inntekter og synlighet i lokalsamfunnet.
" />
            <H2Section heading="En til overskrift" paragraph="lala" />

<BliFrivilligForm />
            </main>



        </div>
    )
}