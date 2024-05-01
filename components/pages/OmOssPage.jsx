import { Header } from "../Header"
import { Accordion } from "../Accordion"
import { H2Section } from "../H2Section"
import { UrlPath } from "../UrlPath"

export const OmOssPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Om Bruktglede" description="Hva er Bruktglede? Her finner du informasjon om plattformen og vår visjon." />

            <main className="p-2 px-6 md:px-28 lg:px-64 md:max-w-[85%] lg:max-w-[75%] pt-5 lg:pt-10 font-opensans">
                <H2Section heading="Om oss" paragraph="Gjenbruksglede er en plattform med ett hovedfokus: å gjøre det lettere å orientere seg i gjenbruksmiljøet på Gjøvik. Ved å samle bruktbutikker, arrangementer og tilbud som finnes i kommunen gjør vi det lettere å navigere seg frem og holde seg oppdatert." />
                <H2Section heading="Vår visjon" paragraph="Vår visjon er forankret i et sterkt engasjement for å gjøre en forskjell og bidra til en grønnere klode. Hos oss handler det ikke bare om å tilby produkter eller tjenester – det handler om å forme en bedre fremtid. Vi tror på kraften av små handlinger som kan føre til store endringer, og vi er fast bestemt på å være en drivkraft for positiv forandring." />

                <h2 className="text-lg lg:text-2xl font-medium mb-3">Ofte stilte spørsmål</h2>
                <div className=" w-full mb-10">
                    <Accordion question="Hvem står bak Bruktglede?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                    <Accordion question="Kan butikken min bli en del av siden?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                    <Accordion question="Hvem er ansvarlig for nettsiden?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                    <Accordion question="Hva gjør Bruktglede for lokalsamfunnet?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />
                </div>

                <div className="md:mb-20 md:mt-12">
                    <H2Section heading="Fikk du ikke svar på spørsmålet ditt?" paragraph="For flere spørsmål, send oss gjerne en mail til bruktglede@hotmail.com." />
                </div>
            </main>
        </div>
    )
}