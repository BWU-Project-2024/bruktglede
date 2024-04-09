import { Header } from "../Header"
import { ArticleCard } from "../ArticleCard"
import test from "@/public/test.jpg";
import { ArticleBarCard } from "../ArticleBarCard";


export const ArtiklerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Siste nytt" description="Her finner du en oversikt over nyheter og artikler fra butikkene" />
            <main className="flex-1 lg:-mt-10 p-2 px-6 md:w-4/5 lg:w-3/4 max-w-readable md:px-20 lg:px-40 lg:pt-20">
            <ArticleBarCard />
            </main>

         

        </div>
    )
}