import { Header } from "../Header"
import { ArticleBarCard } from "../ArticleBarCard";

export const ArtiklerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Siste nytt" description="Her finner du en oversikt over nyheter og artikler fra butikkene" />
            <main className="flex p-2 px-6 md:px-28 lg:px-64 lg:pt-20">
                <ArticleBarCard />
            </main>
        </div>
    )
}