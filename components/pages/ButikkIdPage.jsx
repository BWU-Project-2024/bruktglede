import { getStoreById, getStoreVisions } from "@/lib/supabase/actionsPublic"
import { StoreInfoBar } from "../StoreInfoBar";
import { StoreHeader } from "../StoreHeader";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { UrlPath } from "../UrlPath";

export const ButikkIdPage = async ({ params }) => {
    const storeData = await getStoreById(params);
    const storeVisionData = await getStoreVisions(params)

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <UrlPath />
                <StoreHeader
                    storeData={storeData.stores}
                    storeVisionData={storeVisionData}
                />
                <StoreInfoBar
                    storeIdData={storeData}
                />
                <UkensHoydepunkt />
            </main>
        </div>
    )
}