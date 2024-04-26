import { Header } from "../Header"
import { getStoreById } from "@/lib/supabase/actionsPublic"
import { StoreInfoBar } from "../StoreInfoBar";


export const ButikkIdPage = async ({ params }) => {
    const storeData = await getStoreById(params);
    const data = storeData;
    
 
console.log(data)

    return (
        <div className="flex flex-col min-h-screen">
 <p className="text-lg  lg:text-lg">{data.name}</p>
            <main className="flex-1">
<StoreInfoBar params={params} time={data.created_at} />

            </main>
        </div>
    )
}