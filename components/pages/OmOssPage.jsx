import { Header } from "../Header"
import { Accordion } from "../Accordion"
import { H2Section} from "../H2Section"


export const OmOssPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Om Bruktglede" description="Hva er Bruktglede? Her finner du informasjon om hvem vi er og vår visjon. " />
            <main className="flex-1  lg:-mt-10 p-2 px-6 md:w-4/5 lg:w-3/4 max-w-readable md:px-20 lg:px-40 lg:pt-20">


<H2Section heading="Om oss" paragraph="Gjenbruksglede er en plattform med ett hovedfokus: å gjøre det lettere å orientere seg i gjenbruksmiljøet på Gjøvik. Ved å samle bruktbutikker, arrangementer og tilbud som finnes i kommunen gjør vi det lettere å navigere seg frem og holde seg oppdatert."/>

<H2Section heading="Vår visjon" paragraph="Bærekraft, klimaet, et eller annet om det og sånn. Hvordan vi vil bidra til en grønnere klode. Something fancy like that. Bærekraft, klimaet, et eller annet om det og sånn. Hvordan vi vil bidra til en grønnere klode. Something fancy like that."/>



<div className="lg:mb-5">
  
<h2 className="text-lg lg:text-xl font-semibold font-opensans mb-3">Ofte stilte spørsmål</h2>  
</div>

<div className=" w-full mb-10">
<Accordion question="Hvem står bak Bruktglede?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />

<Accordion question="Kan butikken min bli en del av siden?" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />

<Accordion question="Dette er et langt spørsmål. hvorfor blir teksten så fucked" answer="Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver." />

</div>


<div className="md:mb-20 md:mt-20">
<H2Section heading="Fikk du ikke svar på spørsmålet ditt?" paragraph="For flere spørsmål, send en mail til mail@mail.com ."/>
</div>



            </main>
        </div>
    )
}