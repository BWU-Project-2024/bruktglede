import { getStores } from "@/lib/supabase/actionsPublic";
import Link from "next/link";
import Image from "next/image";

export const AllStoresCard = async () => {
    const storeInfo = await getStores();
    return (
        <div className="flex justify-center mt-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                {storeInfo.map((stores, index) => (
                    <Link key={index} href={`/butikker/${stores.id}`} className="w-full">
                        <div className="flex w-full flex-col justify-center items-center transition">
                            <Image
                                src={stores.img}
                                alt="artikkel cover bilde"
                                width={400}
                                height={400}
                                className="object-cover w-80 h-80 md:w-64 md:h-64 overflow-hidden opacity-80"
                            />
                            <div className="absolute w-[150px] aspect-square rounded-full bg-white flex transition transition-300 justify-center items-center flex-col hover:bg-ivory-default hover:text-forestgreen-darker">
                                <h2 className="text-5xl text-center w-[140px] break-words font-jomhuria leading-7 text-forestgreen-default">
                                    {stores.name}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
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
