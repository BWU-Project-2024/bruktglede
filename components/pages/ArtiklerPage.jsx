import { Header } from "../Header"
import { ArticleCard } from "../ArticleCard"
import test from "@/public/test.jpg";


export const ArtiklerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Siste nytt" description="Her finner du en oversikt over nyheter og artikler fra butikkene" />
            <main className="flex-1">
                <ArticleCard
                    image={test}
                    type="ARTIKKEL"
                    title="Nyåpnet i Gjøvik!"
                    description="Vi har nå pusset opp og gjort det fint her!"
                    store="Fretex" />
            </main>

        </div>
    )
}