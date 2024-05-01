import { Header } from "../Headers/Header"
import { UrlPath } from "../Navbar/UrlPath"
import { ArticleBarCard } from "../Cards/ArticleBarCard";
import { getArticles } from "@/lib/supabase/actionsPublic";

export const ArtiklerPage = async () => {
    const articleInfo = await getArticles();

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Siste nytt" description="Her finner du en oversikt over nyheter og artikler fra butikkene." />
            <main className="flex p-2 px-6 md:px-28 lg:px-64 pt-5 lg:pt-10 font-opensans">
                <ArticleBarCard articlesData={articleInfo.articleData} />
            </main>
        </div>
    )
}