"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getStoreVisions } from "@/lib/supabase/actionsPublic";

export const StoreHeader = () => {
    const [storesVision, setStoresVision] = useState([]);
    const [isVisionVisible, setIsVisionVisible] = useState(false);

    useEffect(() => {
        const fetchStoreVisions = async () => {
            const visions = await getStoreVisions();
            if (visions) {
                setStoresVision(visions);
            } else {
                console.log("No visions available");
            }
        };

        fetchStoreVisions();
    }, []);

    return (
        <>
            {storesVision.length === 0 ? (
                <p>No vision available at the moment.</p>
            ) : (
                storesVision.map((store, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={store.img}
                            alt="Store"
                            layout="responsive"
                            width={1920}
                            height={1080}
                        />
                        <div
                            className={`relative inset-x-0 text-center px-7 py-10 bg-ivory-default ${isVisionVisible ? "bg-opacity-90" : "bg-opacity-70"} transition-opacity duration-300`}
                        >
                            <div className="absolute lg:-top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[110px] lg:w-[150px] h-[110px] lg:h-[150px] aspect-square rounded-full flex justify-center items-center font-jomhuria text-5xl">
                                {store.store_name}
                            </div>
                            <p className="lg:max-w-2xl mx-auto pt-16">
                                {store.subtitle}
                            </p>
                            {isVisionVisible && (
                                <p className="text-center mt-5">
                                    {store.bodyText}
                                </p>
                            )}
                            <div className="flex justify-center pt-5 pb-3">
                                <button
                                    onClick={() =>
                                        setIsVisionVisible(!isVisionVisible)
                                    }
                                    className="w-48 bg-ivory-lighter text-forestgreen-default rounded py-1 font-medium drop-shadow hover:bg-forestgreen-default hover:text-ivory-default transition duration-200 text-center"
                                >
                                    {isVisionVisible
                                        ? "Hide Vision"
                                        : "Show Vision"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
