import { Header } from "../Header";
import { getArticleById } from "@/lib/supabase/actionsPublic";
import { StoreTag } from "../StoreTag";
import { CategoryTag } from "../CategoryTag";
import Image from "next/image";


export const ArtikkelIdPage = async ({ params }) => {

    const articleData = await getArticleById(params);
    const data = articleData;

    const imgUrl = articleData.img.publicUrl;

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
            <main className="flex-1 font-opensans p-2 px-6 md:px-28 lg:px-64 lg:pt-20 lg:pt-20">

                <Image
                    src={imgUrl}
                    alt="artikkel cover bilde"
                    width={500}
                    height={200}>


                </Image>
                <div className="flex flex-row gap-x-3">
                    <p className="uppercase text-xs font-semibold pt-1">Artikkel</p>
                    <StoreTag storename={data.store_name} className="mr-1" />
                </div>

                <div className="flex flex-col gap-2 mb-10 mt-5">
                    <h1 className="text-lg lg:text-xl font-semibold">{data.title}</h1>
                    <p className="text-lg  lg:text-lg">{data.ingress}</p>
                    <p className="text-base lg:text-lg">{data.bodyText}</p>
                </div>
                {articleData.tags.map((tag) => (
                    <CategoryTag key={tag} title={tag} />
                ))}

                <div className="mt-6">
                    <p className="text-xs lg:text-lg text-gray-600">Publisert : {formatDate(data.created_at)}</p>
                    <p className="text-xs lg:text-lg text-gray-600">Klokkeslett : {formatTime(data.created_at)}</p>
                </div>
            </main>
        </div>
    );

};