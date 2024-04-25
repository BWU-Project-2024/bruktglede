"use client";
import Image from "next/image";
import { useState } from "react";

export const StoreHeader = ({ image, store, description, vision }) => {
    const [isVisionVisible, setIsVisionVisible] = useState(false);

    const toggleVision = () => {
        setIsVisionVisible(!isVisionVisible);
    };

    return (
        <div className="relative">
            <Image src={image} alt="Image of the store" layout="responsive" />
            <div
                className={`relative inset-x-0 text-center px-7 py-3 bg-ivory-default ${isVisionVisible ? "bg-opacity-90" : "bg-opacity-70"} transition-opacity duration-300 `}
            >
                <div className="absolute lg:-top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[110px] lg:w-[150px] h-[110px] lg:h-[150px] aspect-square rounded-full flex justify-center items-center font-jomhuria text-5xl">
                    {store}
                </div>
                <p className="lg:max-w-2xl mx-auto pt-16">{description}</p>
                {isVisionVisible && (
                    <p className="text-center mt-5">
                        Visjonen til Fretex er å skape en bærekraftig og
                        inkluderende samfunn der ingen ting går til spille.
                        Fretex har en visjon om å redusere avfall og fremme
                        miljøbevissthet ved å gi nytt liv til brukte varer.
                        Våres mål er ikke bare å tilby rimelige produkter til
                        kunder, men også å støtte ulike veldedige formål og
                        sosiale initiativer.
                    </p>
                )}
                <div className="flex justify-center pt-5 pb-3">
                    <button
                        onClick={toggleVision}
                        className="w-48 bg-ivory-lighter text-forestgreen-default rounded py-1 font-medium drop-shadow hover:bg-forestgreen-default hover:text-ivory-default transition duration-200 text-center"
                    >
                        {vision}
                    </button>
                </div>
            </div>
        </div>
    );
};
