import { getEventById } from "@/lib/supabase/actionsPublic"
import { UrlPath } from "../Navbar/UrlPath"
import { StoreTag } from "../Tags/StoreTag";
import { CategoryTag } from "../Tags/CategoryTag";
import Image from "next/image";

export const ArrangementIdPage = async ({ params }) => {
    const eventIdData = await getEventById(params)

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
            <main className="flex-1 font-opensans px-6 md:px-28 lg:px-64 pt-5">
                <Image
                    src={eventIdData.img}
                    alt="Arrangement cover bilde"
                    width={1000}
                    height={200}
                    style={
                        { objectFit: "cover", objectPosition: "center" }
                    }
                    className="h-[200px] md:h-[300px] lg:h-[350px]"
                >
                </Image>
                <div className="flex mt-4 flex-row gap-x-3 mb-8">
                    <p className="uppercase text-sm font-semibold pt-1">Arrangement</p>
                    <StoreTag storename={eventIdData.store_name} className="mr-1" />
                </div>

                <div className="flex flex-col gap-3 mb-12 md:max-w-[80%] lg:max-w-[70%]">
                    <h1 className="text-lg lg:text-xl font-semibold">{eventIdData.title}</h1>
                    <p className="text-lg lg:text-lg mb-2">{eventIdData.ingress}</p>
                    <p className="text-base">{eventIdData.bodyText}</p>
                </div>
                {eventIdData.tags.map((tag, index) => (
                    <CategoryTag key={index} title={tag} />
                ))}

                <div className="mt-6 mb-10">
                    <p className="text-xs lg:text-sm text-gray-600">Publisert : {formatDate(eventIdData.created_at)}</p>
                    <p className="text-xs lg:text-sm text-gray-600">Klokkeslett : {formatTime(eventIdData.created_at)}</p>
                </div>
            </main>
        </div>
    )
}