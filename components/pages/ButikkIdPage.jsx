import { getStoreById, getStoreVisions } from "@/lib/supabase/actionsPublic"
import { StoreInfoBar } from "../StoreInfoBar";
import { StoreHeader } from "../StoreHeader";

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
                <StoreInfoBar
                    params={params}
                    time={data.created_at}
                    address={data.address}
                    phone={data.phone}
                    mail={data.contactEmail}
                    categories={data.tags} />
            </main>
        </div>
    )
}