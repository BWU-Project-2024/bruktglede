import { FiMapPin, FiMail, FiHome, FiPhone } from "react-icons/fi";
import { CategoryTag } from "./CategoryTag";

export const StoreInfoBar = ({ storeIdData }) => {
    const iconStyle = { fontSize: "1.1em" };

    const sortedOpeningTimes = storeIdData.openingTimesWithDay.sort((a, b) => {
        const dayOrder = { Mandag: 1, Tirsdag: 2, Onsdag: 3, Torsdag: 4, Fredag: 5, Lørdag: 6, Søndag: 7 };
        return dayOrder[a.dayName] - dayOrder[b.dayName];
    });

    return (
        <div className="w-full py-6 px-6 md:px-40 md:flex justify-evenly bg-forestgreen-default text-ivory-default mx-auto">
            {/* <div className="p-5 flex flex-col md:flex-row justify-center md:gap-8 lg:gap-0"> */}

            <div className="flex flex-col gap-1 md:gap-2 mb-10 md:mb-0">
                <h3 className="uppercase text-sm font-semibold mb-4">
                    Nøkkelinformasjon
                </h3>
                <div className="flex items-center gap-4">
                    <FiHome style={iconStyle} />
                    <p>{storeIdData.stores.name}</p>
                </div>
                <div className="flex items-center gap-4">
                    <FiMapPin style={iconStyle} />
                    <p>{storeIdData.stores.address}</p>
                </div>
                <div className="flex items-center gap-4">
                    <FiPhone style={iconStyle} />
                    <p>{storeIdData.stores.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                    <FiMail style={iconStyle} />
                    <p>{storeIdData.stores.contactEmail}</p>
                </div>
            </div>

            <div className="flex flex-col mb-10 md:mb-0">
                <h3 className="uppercase text-sm font-semibold mb-4">
                    Våre åpningstider
                </h3>
                <div className="flex flex-col gap-1">
                    {sortedOpeningTimes.map((openingTime, index) => (
                        <div key={index} className="flex">
                            <p className="w-[75px]">{openingTime.dayName}:</p>
                            <p>{openingTime.open ? `${openingTime.openingHour}-${openingTime.closingHour}` : 'Stengt'}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:w-[25%] mb-2 md:mb-0">
                <h3 className="uppercase text-sm font-semibold mb-4">
                    Overordnet kategorier
                </h3>
                <div className="flex flex-wrap text-forestgreen-darker gap-1">
                    {storeIdData.stores.tags &&
                        storeIdData.stores.tags.map((tagName, index) => (
                            <CategoryTag key={index} title={tagName} bgColor="ivory-darker" />
                        ))}
                </div>
            </div>
        </div>
        // </div>
    );
};