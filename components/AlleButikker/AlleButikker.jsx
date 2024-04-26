import { getStores } from "@/lib/supabase/actionsPublic";
import { AlleButikkerCardLong } from "./AlleButikkerCardLong";

export const AlleButikker = async () => {

    const storeData = await getStores();
    console.log(storeData);
    return (
        <div>
            {storeData && storeData.map((item, index) => (
                <AlleButikkerCardLong key={index} index={index} storeData={item} />
            ))}
        </div>
    );
}