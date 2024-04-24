// import React, { useEffect, useState } from "react";
import { CategoryTag } from "./CategoryTag";
import { fetchAllStationsSortedByStore } from "@/lib/supabase/actionsPublic";


export const StationInfo = async () => {
    const storeInfo = await fetchAllStationsSortedByStore();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
            {storeInfo && storeInfo.map((storeData) => (
                <div key={storeData.store.id}>
                    <h2 className="text-xl lg:text-2xl font-semibold font-opensans mb-1 mt-10">
                        {storeData.store.name}
                    </h2>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    {storeData?.stations.map((station) => (
                        <div key={station.id} className="flex flex-col gap-3">
                            <h3 className="font-opensans text-base md:text-lg font-semibold text-color-jet">
                                {station.title}
                            </h3>
                            <p className="text-base md:text-lg underline text-color-jet font-opensans lg:text-lg">
                                {station.address}
                            </p>
                            <div>
                                <div className="mb-10">
                                    <h4 className="uppercase font-opensans text-sm font-medium md:mb-3">
                                        Dette tas imot
                                    </h4>
                                    {station.tags.map((tag) => (
                                        <CategoryTag key={tag} title={tag} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};
