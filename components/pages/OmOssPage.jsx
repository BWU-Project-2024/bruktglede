import { Header } from "../Header"
import { Accordion } from "../Accordion"
import { H2Section } from "../H2Section"
import { UrlPath } from "../UrlPath"

export const OmOssPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Om Bruktglede" description="Hva er Bruktglede? Her finner du informasjon om hvem vi er og vår visjon. " />
            <UrlPath />
            <main className="p-2 px-6 md:px-28 lg:px-64 md:max-w-[85%] lg:max-w-[75%] lg:pt-10">
                <H2Section heading="Om oss" paragraph="Gjenbruksglede er en plattform med ett hovedfokus: å gjøre det lettere å orientere seg i gjenbruksmiljøet på Gjøvik. Ved å samle bruktbutikker, arrangementer og tilbud som finnes i kommunen gjør vi det lettere å navigere seg frem og holde seg oppdatert." />
                <H2Section heading="Vår visjon" paragraph="Bærekraft, klimaet, et eller annet om det og sånn. Hvordan vi vil bidra til en grønnere klode. Something fancy like that. Bærekraft, klimaet, et eller annet om det og sånn. Hvordan vi vil bidra til en grønnere klode. Something fancy like that." />

                <h2 className="text-lg lg:text-2xl lg:mb-5 font-semibold font-opensans mb-3">Ofte stilte spørsmål</h2>
                <div className=" w-full mb-10">
                    <Accordion question="Hvem står bak Bruktglede?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                    <Accordion question="Kan butikken min bli en del av siden?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                    <Accordion question="Dette er et langt spørsmål. hvorfor blir teksten så fucked" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                </div>

                <div className="md:mb-20 md:mt-12">
                    <H2Section heading="Fikk du ikke svar på spørsmålet ditt?" paragraph="For flere spørsmål, send oss gjerne en mail til bruktglede@hotmail.com." />
                </div>
            </main>
        </div>
    )
}