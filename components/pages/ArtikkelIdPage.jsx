import { getArticleById } from "@/lib/supabase/actionsPublic";
import { StoreTag } from "../StoreTag";
import { CategoryTag } from "../CategoryTag";
import Image from "next/image";
import { UrlPath } from "../UrlPath"

export const ArtikkelIdPage = async ({ params }) => {

    const articleData = await getArticleById(params);

    //Get the date from the timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-GB');
    };

    //Get the time (hours and minutes) from the timestamp
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <main className="flex-1 font-opensans p-2 px-6 md:px-28 lg:px-64 lg:pt-20 lg:pt-20">
                <Image
                    src={articleData.img}
                    alt="artikkel cover bilde"
                    width={500}
                    height={200}>
                </Image>
                <div className="flex flex-row gap-x-3">
                    <p className="uppercase text-xs font-semibold pt-1">Artikkel</p>
                    <StoreTag storename={articleData.store_name} className="mr-1" />
                </div>

                <div className="flex flex-col gap-2 mb-10 mt-5">
                    <h1 className="text-lg lg:text-xl font-semibold">{articleData.title}</h1>
                    <p className="text-lg  lg:text-lg">{articleData.ingress}</p>
                    <p className="text-base lg:text-lg">{articleData.bodyText}</p>
                </div>
                {articleData.tags.map((tag, index) => (
                    <CategoryTag key={index} title={tag} />
                ))}

                <div className="mt-6">
                    <p className="text-xs lg:text-lg text-gray-600">Publisert : {formatDate(articleData.created_at)}</p>
                    <p className="text-xs lg:text-lg text-gray-600">Klokkeslett : {formatTime(articleData.created_at)}</p>
                </div>
            </main>
        </div>
    );

};