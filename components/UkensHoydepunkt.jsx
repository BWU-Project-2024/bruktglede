"use client";
import Image from "next/image";
import { StoreTag } from "./StoreTag";

export const UkensHoydepunkt = ({ highlightData }) => {

    console.log(highlightData);


    return (
        <>
            {highlightData.length < 0 ? (
                <p>Ingen høydepunkt er tilgjengelig for øyeblikket.</p>
            ) : (
                highlightData.map((highlight, index) => (
                    <div key={index} className="relative w-full">
                        <div className="absolute left-1/2 -translate-x-1/2 bg-forestgreen-default w-full h-12 opacity-95 z-10">
                            <div className="flex w-full z-20 items-center justify-between mt-2 px-3">
                                <h2 className="text-ivory-lighter text-lg">
                                    {highlight.title}
                                </h2>
                                <div className="mt-0.5">
                                    <StoreTag
                                        storename={highlight.store_name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center z-0">
                            <Image
                                src={highlight.img}
                                alt="Weekly Highlight"
                                width={500}
                                height={300}
                                className="object-cover w-full h-[450px] overflow-hidden"
                            />
                        </div>
                        <div className="mx-auto flex justify-center z-20 bg-ivory-default w-full py-4 px-3 mb-5">
                            <p className="text-black">{highlight.ingress}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
