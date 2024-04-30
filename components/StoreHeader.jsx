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
                    <div className="w-[150px] h-[150px] lg:w-[150px]  lg:h-[150px] aspect-square rounded-full flex justify-center leading-7 text-center items-center font-jomhuria text-6xl bg-white">
                        {storeData?.name}
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
                            <div className="flex flex-col items-start w-[40%] mb-8">
                                <h2 className="text-3xl mb-4">{storeVisionData[0].title}</h2>
                                <h3 className="text-xl mb-6">{storeVisionData[0].ingress}</h3>
                                <h4 className="text-lg font-medium mb-1">{storeVisionData[0].subtitle}</h4>
                                <p>{storeVisionData[0].bodyText}</p>
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
