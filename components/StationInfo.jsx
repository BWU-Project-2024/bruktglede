"use client";
import React, { useEffect, useState } from "react";
import { CategoryTag } from "./CategoryTag";
import {
    fetchStoreInfo,
    fetchStationsData,
    fetchTagsData,
} from "@/lib/supabase/actions";

export const StationInfo = () => {
    const [storesWithStations, setStoresWithStations] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const storeinfo = await fetchStoreInfo();
                const stationsData = await Promise.all(
                    storeinfo.map(async (store) => {
                        const stationData = await fetchStationsData(store.id);
                        const tagsData = await Promise.all(
                            stationData.map(
                                async (station) =>
                                    await fetchTagsData(station.id)
                            )
                        );
                        const stationsWithTag = stationData.map(
                            (station, index) => ({
                                ...station,
                                tags: tagsData[index] || [], // Using tag names or an empty array if no tags found
                            })
                        );
                        return stationsWithTag;
                    })
                );

                const storesWithStations = storeinfo
                    .map((store, index) => ({
                        ...store,
                        stations: stationsData[index],
                    }))
                    .filter((store) => store.stations.length > 0);

                setStoresWithStations(storesWithStations);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
            {storesWithStations.map((store) => (
                <div key={store.id}>
                    <h2 className="text-xl lg:text-2xl font-semibold font-opensans mb-1 mt-10">
                        {store.name}
                    </h2>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div>
                        {store.stations.map((station) => (
                            <div key={station.id}>
                                <h3 className="font-opensans text-base md:text-lg font-semibold text-color-jet mb-3 -mt-1">
                                    {station.title}
                                </h3>
                                <p className="text-base md:text-lg underline text-color-jet mb-2  font-opensans lg:text-lg">
                                    {station.address}
                                </p>
                                <div>
                                    <div className="mt-3 mb-10">
                                        <h4 className="uppercase font-opensans text-sm font-medium md:mb-2">
                                            Dette tas imot
                                        </h4>
                                        {station.tags.map((tagName) => (
                                            <CategoryTag
                                                key={tagName}
                                                title={tagName}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
