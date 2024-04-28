import { getStoreById, getStoreVisions } from "@/lib/supabase/actionsPublic"
import { StoreInfoBar } from "../StoreInfoBar";
import { StoreHeader } from "../StoreHeader";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { UrlPath } from "../UrlPath";

export const ButikkIdPage = async ({ params }) => {
    const storeData = await getStoreById(params);
    const storeVisionData = await getStoreVisions(params)
    const data = storeData;

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <StoreHeader
                    storeData={storeData}
                    storeVisionData={storeVisionData}
                />
                <UrlPath />
                <StoreInfoBar
                    params={params}
                    
                    address={data.address}
                    phone={data.phone}
                    mail={data.contactEmail}
                    categories={data.tags} />
                    <UkensHoydepunkt />
            </main>
        </div>
    )
}