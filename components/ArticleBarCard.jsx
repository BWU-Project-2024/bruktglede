import Link from "next/link";
import { StoreTag } from "./StoreTag";
import { CategoryTag } from "./CategoryTag";
import { getArticles } from "@/lib/supabase/actionsPublic";

export const ArticleBarCard = async () => {
    const articleInfo = await getArticles();

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-GB'); //
    };

    return (
        <div className="font-opensans">
            {articleInfo.map((articleData) => (
                <div key={articleData.id} className="flex flex-col gap-1">
                    <Link href="" className="text-lg font-medium underline">
                        {articleData.title}
                    </Link>
                    <p className="text-xs mb-1">{formatDate(articleData.created_at)}</p>
                    <p className="text-base line-clamp-2">{articleData.ingress}</p>
                    <div className="mt-2 mb-5">

                        <StoreTag children={articleData.store_name} className="mr-1" />
                        {articleData.tags.map((tag) => (
                            <CategoryTag key={tag} title={tag} />
                        ))}

                        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </div>
                </div>
            ))}
        </div>
    );
};
