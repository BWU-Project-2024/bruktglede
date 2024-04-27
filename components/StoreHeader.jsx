"use client";
import Image from "next/image";
import { useState } from "react";

export const StoreHeader = ({ storeData, storeVisionData }) => {
    const [isVisionVisible, setIsVisionVisible] = useState(false);

    const OpenCloseVision = () => {
        setIsVisionVisible(!isVisionVisible)
    }

    return (
        <div className="relative">
            <div className="relative w-full h-[450px]">
                <Image
                    src={storeData.img}
                    alt="Store"
                    fill
                    style={
                        { objectFit: "cover", objectPosition: "center" }
                    }
                // layout="fill"
                // objectFit="cover"
                // objectPosition="center"
                // priority
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-[450px] flex flex-col">
                <div className="h-[50%] flex items-center justify-center">
                    <div className="w-[110px] lg:w-[150px] h-[110px] lg:h-[150px] aspect-square rounded-full flex justify-center items-center font-jomhuria text-6xl bg-white">
                        {storeData?.name}
                    </div>
                </div>
                <div className="h-[50%] flex flex-col items-center justify-center bg-opacity-95 bg-ivory-default gap-16">
                    <p className="w-[50%] text-wrap flex justify-center">{storeData.description}</p>
                    <button
                        onClick={OpenCloseVision}
                        className="w-48 rounded py-1 font-medium drop-shadow bg-forestgreen-default text-ivory-default hover:bg-ivory-lighter hover:text-forestgreen-default transition duration-200 text-center"
                    >
                        {isVisionVisible ? "Lukk butikkens visjon" : "Se butikkens visjon"}
                    </button>
                </div>
            </div>
            {isVisionVisible && (
                <div className="text-center">
                    <h2>{storeVisionData[0].title}</h2>
                    <h3>{storeVisionData[0].ingress}</h3>
                    <h4>{storeVisionData[0].subtitle}</h4>
                    <p>{storeVisionData[0].bodyText}</p>
                    <Image
                        src={storeVisionData[0].img}
                    >
                    </Image>
                </div>
            )}
        </div>
    );
};
