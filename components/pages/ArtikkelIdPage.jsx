
import { Header } from "../Header";
import { getArticleById } from "@/lib/supabase/actions";

export const ArtikkelIdPage = async ({ params }) => {
    const articleData = await getArticleById(params);
    console.log(articleData);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <h1>hello</h1>
            </main>
        </div>
    );
};