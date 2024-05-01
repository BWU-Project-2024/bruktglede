"use client";
import Image from "next/image";
import { useState } from "react";

export const StoreHeader = ({ storeData, storeVisionData }) => {
    const [isVisionVisible, setIsVisionVisible] = useState(false);

    const OpenCloseVision = () => {
        setIsVisionVisible(!isVisionVisible)
    }

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsVisionVisible(!isVisionVisible)
    }

    return (
        <div className="relative">
            <div className="relative w-full h-[450px]" id="top-section">
                <Image
                    src={storeData.img}
                    alt="Store"
                    fill
                    style={
                        { objectFit: "cover", objectPosition: "center" }
                    }
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-[450px] flex flex-col">
                <div className="h-[50%] flex items-center justify-center">
                    <div className="w-[150px] h-[150px] lg:w-[150px]  lg:h-[150px] aspect-square rounded-full flex justify-center leading-7  items-center font-jomhuria  bg-white">
                        <h2 className="max-w-[130px] break-words leading-7 text-center text-forestgreen-default mt-2 text-6xl"> {storeData?.name} </h2>
                    </div>
                </div>
                <div className="h-[50%] flex flex-col items-center justify-center bg-opacity-95 bg-ivory-default gap-16">
                    <p className="w-[90%] md:w-[50%] text-wrap flex justify-center">{storeData.description}</p>
                    <button
                        onClick={OpenCloseVision}
                        className="w-48 rounded py-1 font-medium drop-shadow bg-forestgreen-default text-ivory-default hover:bg-ivory-lighter hover:text-forestgreen-default transition duration-200 text-center"
                    >
                        {isVisionVisible ? "Lukk butikkens visjon" : "Se butikkens visjon"}
                    </button>
                </div>
            </div>
            {isVisionVisible && (
                <>
                    {storeVisionData.length === 0 ? (
                        <p>Ingen visjon beskrivelse for butikken er tilgjengelig for øyeblikket.</p>
                    ) : (
                        <div className="flex flex-col items-center py-10 w-full font-opensans bg-ivory-lighter">
                            <div className="flex flex-col items-start p-3 md:max-w-smaller mb-8">
                                <h2 className="text-xl font-medium lg:text-2xl mb-4">{storeVisionData[0].title}</h2>
                                <p className="text-lg mb-8">{storeVisionData[0].ingress}</p>
                                <h4 className="text-lg md:text-xl mb-3 md:mb-2 font-medium ">{storeVisionData[0].subtitle}</h4>
                                <p className="text-base">{storeVisionData[0].bodyText}</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <Image
                                    src={storeVisionData[0].img}
                                    alt="Store"
                                    width={600}
                                    height={100}
                                />
                            </div>
                            <button
                                className="w-48 rounded py-1 font-medium drop-shadow bg-forestgreen-default text-ivory-default hover:bg-ivory-lighter hover:text-forestgreen-default transition duration-200 text-center"
                                onClick={scrollToTop}
                            >
                                Tilbake til toppen
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
