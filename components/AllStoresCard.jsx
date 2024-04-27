import { getStores } from "@/lib/supabase/actionsPublic";
import Link from "next/link";
import Image from "next/image";

export const AllStoresCard = async () => {
    const storeInfo = await getStores();
    console.log(storeInfo);

    return (
        <div className="w-fit">
            {storeInfo.map((stores, index) => (
                  <Link href={`/butikker/${stores.id}`} className="w-fit">
                <div key={index} className="flex w-fit flex-col mb-10 justify-center items-center transition ">
                   
                      
                            <Image
                                src={stores.img}
                                alt="artikkel cover bilde"
                                width={400}
                                height={400}
                                className="object-cover w-80 h-80 overflow-hidden opacity-50 transition transition-300 hover:opacity-100   "
                            />
                       
                        <div className="absolute w-[150px] aspect-square rounded-full  bg-white flex justify-center items-center flex-col ">
                            <span className="text-6xl font-jomhuria text-forestgreen-default pt-2.5">
                                {stores.name}
                            </span>
                        </div>
                  
                </div> </Link>
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
