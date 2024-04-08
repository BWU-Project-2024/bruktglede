"use client";
import Image from "next/image";
import { useState } from "react";

export const StoreHeader = ({ image, store, description, vision, text }) => {
    const [showVisionText, setShowVisionText] = useState(false);

    const toggleVisionText = () => {
        setShowVisionText(!showVisionText);
    };

    const greenBackgroundHeight = showVisionText ? "h-auto" : "h-1/3";

    return (
        <div className="relative">
            <div className="relative">
                <Image src={image} alt="Image of the store" />
            </div>
            <div
                className={`inset-x-0 bg-ivory-default bg-opacity-90 text-center px-7 py-3 lg:absolute lg:top-auto lg:bottom-0 lg:left-0 lg:right-0 lg:${greenBackgroundHeight} lg:px-40 lg:py-8`}
            >
                <div className="absolute lg:bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[110px] h-[110px] aspect-square rounded-full flex justify-center items-center font-jomhuria text-5xl">
                    {store}
                </div>
                <p className="lg:max-w-2xl mx-auto lg:pt-3 pt-16">
                    {description}
                </p>
                {showVisionText && (
                    <p className="lg:max-w-4xl mx-auto lg:pt-3 pt-16">{text}</p>
                )}
                <div className="flex justify-center pt-5">
                    <div
                        className="w-48 bg-ivory-lighter text-forestgreen-default rounded py-1 font-medium drop-shadow hover:bg-forestgreen-default hover:text-ivory-default transition duration-200 text-center"
                        onClick={toggleVisionText}
                    >
                        {vision}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* export const StoreHeader = ({ image, store, description, vision }) => {
    return (
        <div className="relative">
            <div className="relative">
                <Image src={image} alt="Image of the store" />
            </div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-[110px] h-[110px] aspect-square rounded-full flex justify-center items-center font-jomhuria text-5xl">
                {store}
            </div>
            <div className="absolute inset-x-0 top-24 bg-ivory-default text-center px-7 py-5">
                <p>{description}</p>
                <div className="flex justify-center pt-5">
                    <div className="w-48 bg-ivory-lighter text-forestgreen-default rounded py-1 font-medium drop-shadow hover:bg-forestgreen-default hover:text-ivory-default transition duration-200 text-center">
                        {vision}
                    </div>
                </div>
            </div>
        </div>
    );
}; */
