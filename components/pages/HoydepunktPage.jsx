import { Header } from "../Header"
import { UrlPath } from "../UrlPath"

export const HoydepunktPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Ukens høydepunkt" description="Her finner du en oversikt over unike produkter butikkene plukker ut hver uke." />
            <main className="flex-1">

            </main>
        </div>
    )
}