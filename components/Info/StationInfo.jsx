import { CategoryTag } from "../Tags/CategoryTag";

export const StationInfo = async ({ stationInfo }) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
            {stationInfo && stationInfo.map((stationData, index) => (
                <div key={index}>
                    <h2 className="text-xl lg:text-2xl font-medium font-opensans mb-1 mt-10">
                        {stationData?.store.name}
                    </h2>
                    <hr className="h-px my-3 bg-gray-200 border-0"></hr>
                    {stationData?.stations.map((station) => (
                        <div key={station.id} className="flex flex-col gap-2">
                            <h3 className="font-opensans text-base md:text-lg font-semibold text-color-jet">
                                {station.title}
                            </h3>
                            <p className="text-base md:text-lg underline text-color-jet font-opensans lg:text-lg mb-2">
                                {station.address}
                            </p>
                            <div>
                                <div className="mb-10">
                                    <h4 className="uppercase font-opensans text-sm font-medium md:mb-3 text-forestgreen-default">
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
