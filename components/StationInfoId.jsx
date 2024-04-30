import { CategoryTag } from "./CategoryTag";

export const StationInfoId = async ({ stationInfo }) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
            {stationInfo && stationInfo.map((stationData, index) => (
                <div key={index} className="flex flex-col gap-3">
                    <h3 className="font-opensans text-base md:text-lg font-semibold text-color-jet">
                        {stationData.title}
                    </h3>
                    <p className="text-base md:text-lg underline text-color-jet font-opensans lg:text-lg">
                        {stationData.address}
                    </p>
                    <div>
                        <div className="mb-10">
                            <h4 className="uppercase font-opensans text-sm font-medium md:mb-3">
                                Dette tas imot
                            </h4>
                            {stationData.tags.map((tag) => (
                                <CategoryTag key={tag} title={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
