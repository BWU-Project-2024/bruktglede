import { Header } from "../Header"
import { ArticleBarCard } from "../ArticleBarCard";
import { getArticles } from "@/lib/supabase/actionsPublic";

export const ArtiklerPage = async () => {
    const articleInfo = await getArticles();

    console.log("articleInfo", articleInfo.articleData);

    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Siste nytt" description="Her finner du en oversikt over nyheter og artikler fra butikkene" />
            <main className="flex p-2 px-6 md:px-28 lg:px-64 lg:pt-20">
                <ArticleBarCard articlesData={articleInfo.articleData} />
            </main>
        </div>
    )
}