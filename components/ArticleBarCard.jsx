import { CategoryTag } from "./CategoryTag";
import { StoreTag } from "./StoreTag";
import Link from "next/link";

export const ArticleBarCard = ({ articlesData }) => {

    //Get the date from the timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('nb-NO');
    };

    return (
        <div className="font-opensans">
            {articlesData?.map((article, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <Link href={`/artikler/${article.id}`} key={index}>
                        <span className="text-lg font-medium underline">{article.title}</span>
                    </Link>
                    <p className="text-xs mb-1">{formatDate(article.created_at)}</p>
                    <p className="text-base line-clamp-2">{article.ingress}</p>
                    <div className="mt-2 mb-5">
                        <StoreTag storename={article.store_name} className="mr-1" />
                        {article.tags.map((tag, index) => (
                            <CategoryTag key={index} title={tag} />
                        ))}
                        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </div>
                </div>
            ))}
        </div>
    );
};