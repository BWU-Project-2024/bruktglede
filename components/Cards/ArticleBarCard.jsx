import { CategoryTag } from "../Tags/CategoryTag";
import { StoreTag } from "../Tags/StoreTag";
import Link from "next/link";
import Image from "next/image";

export const ArticleBarCard = ({ articlesData }) => {

    //Get the date from the timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('nb-NO');
    };

    return (
        <div className="font-opensans">
            {articlesData?.map((article, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1 md:mr-4">
                            <Link href={`/artikler/${article.id}`} key={index}>
                                <span className="text-lg font-medium underline text-forestgreen-darker hover:text-forestgreen-lighter transition transition-300">{article.title}</span>
                            </Link>
                            <p className="text-sm md:text-md text-textLight flex-grow font-medium uppercase">Artikkel</p>
                            <p className="text-xs mb-1">{formatDate(article.created_at)}</p>

                            <p className="text-base line-clamp-2 mr-4">{article.ingress}</p>

                            <div className="mt-4 mb-2">
                                <StoreTag storename={article.store_name} className="mr-1" />
                                {article.tags.map((tag, index) => (
                                    <CategoryTag key={index} title={tag} />
                                ))}
                            </div>
                        </div>
                        <Image
                            src={article.img}
                            width={250}
                            height={100}
                            alt="Artikkel cover bilde"
                            className="hidden md:block"
                        />
                    </div>
                    <hr className="w-full h-px my-5 bg-gray-200 border-0 "></hr>
                </div>
            ))}
        </div>
    );
};