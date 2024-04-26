
import { getStores } from "@/lib/supabase/actionsPublic";
import Link from "next/link";
import Image from "next/image";

export const AllStoresCard = async () => {
  
const storeInfo = await getStores();
console.log(storeInfo)

    return (
        <div className="font-opensans">
            {storeInfo.map((stores) => (
                <div key={storeInfo.id} className="flex flex-col gap-1">
                   
                    <p className="text-base line-clamp-2">{stores.name}</p>
                    <div className="">
                    <Link href={`/butikker/${stores.id}`} key={stores.id}>
                            <Image
                                src={stores?.img}
                                alt="artikkel cover bilde"
                                width={500}
                                height={500}
                                className="object-cover w-96 h-80"
                            />
                            <span className="text-lg font-medium underline">{stores.name}</span>
                        </Link>
                </div>
                </div>
            ))}
        </div>
    );
};


/* {encodeURIComponent(
    stores.name
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/æ/g, 'ae')   
    .replace(/ø/g, 'o')    
    .replace(/å/g, 'a')    
)}*/

