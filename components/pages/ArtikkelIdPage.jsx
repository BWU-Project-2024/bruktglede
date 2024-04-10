
import { Header } from "../Header";
import { getArticleById } from "@/lib/supabase/actions";

export const ArtikkelIdPage = async ({ params }) => {
    const articleData = await getArticleById(params);
    console.log("articleData:", articleData);

    // så du slipper å skrive [0] på alle elementene i html'en
    const data = articleData[0]


    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <h1>{data.title}</h1>
            </main>
        </div>
    );
};