import { getStores } from "@/lib/supabase/actionsPublic";
import Link from "next/link";
import Image from "next/image";


export const AllStoresCard = async () => {
    const storeInfo = await getStores();
    console.log(storeInfo);
    return (
        <div className="flex justify-center">
            <div className="w-fit ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16" >
                    {storeInfo.map((stores, index) => (
                        <Link key={index} href={`/butikker/${stores.id}`} className="w-full">
                            <div className="flex w-full flex-col justify-center items-center transition">
                                <Image
                                    src={stores.img}
                                    alt="artikkel cover bilde"
                                    width={400}
                                    height={400}
                                    className="object-cover w-80 h-80 md:w-64 md:h-64 overflow-hidden opacity-50 transition transition-300 hover:opacity-100"
                                />
                                <div className="absolute w-[150px] aspect-square rounded-full bg-white flex justify-center items-center flex-col">
                                    <div className="text-center">
                                        <h2 className="text-5xl max-w-[130px] font-jomhuria break-words leading-7 text-forestgreen-default pt-2.5 block">
                                            {stores.name}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
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
