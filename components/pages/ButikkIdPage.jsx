import { Header } from "../Header"
import { getStoreById } from "@/lib/supabase/actionsPublic"

export const ButikkIdPage = async ({ params }) => {
const storeData = await getStoreById(params.id);
const data = storeData;

 
console.log(data)

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">

            </main>
        </div>
    )
}