"use client";
import Image from "next/image";
import { StoreTag } from "./StoreTag";
import React, { useEffect, useState } from "react";

export const UkensHoydepunkt = (highlightData) => {
    // const [highlightsData, setHighlightsData] = useState([]);

    const data = highlightData.highlightData.highlights;
    return (
        <>
            {highlightData.length === 0 ? (
                <p>Ingen høydepunkt er tilgjengelig for øyeblikket.</p>
            ) : (
                data.map((highlight, index) => (
                    <div key={index} className="relative md:w-2/3 lg:w-5/12">
                        <div className="absolute left-1/2 -translate-x-1/2 bg-forestgreen-default w-11/12 h-11 opacity-70 z-10"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-between px-4 pt-2.5 md:pt-1.5 lg:pt-1.5 w-11/12">
                            <p className="text-ivory-default">
                                {highlight.title}
                            </p>
                            <StoreTag storename={highlight.store_name} />
                        </div>
                        <div className="flex justify-center items-center z-0">
                            <Image
                                src={highlight.img}
                                alt="Weekly Highlight"
                                width={500}
                                height={300}
                                className="w-11/12"
                            />
                        </div>
                        <div className="mx-auto flex justify-center z-20 bg-ivory-default w-11/12 py-4 px-2 mb-5">
                            <p className="text-black">{highlight.ingress}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
