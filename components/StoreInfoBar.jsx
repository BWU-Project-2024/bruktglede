import { FiMapPin, FiClock, FiMail, FiPhone } from "react-icons/fi";
import { CategoryTag } from "./CategoryTag";

export const StoreInfoBar = ({ openingTimes, address, phone, mail, categories }) => {
    const iconStyle = { fontSize: "1.1em" };
    return (
        <div className="w-full py-4 bg-forestgreen-default text-ivory-default mb-5 ">
            <div className="container mx-auto">
                <div className="p-5 flex flex-col md:flex-row justify-center  md:gap-8 lg:gap-0">
                    <div className="lg:w-1/4 ">
                        <div className="flex flex-col gap-2 mb-5">
                            <h3 className="uppercase text-base font-semibold pl-2">
                                Nøkkelinformasjon
                            </h3>
                            <div className="flex items-center pl-2 gap-8">
                                <FiMapPin style={iconStyle} />
                                <p>{address}</p>
                            </div>
                            <div className="flex items-center pl-2 gap-8">
                                <FiPhone style={iconStyle} />
                                <p>{phone}</p>
                            </div>
                            <div className="flex items-center pl-2 gap-8">
                                <FiMail style={iconStyle} />
                                <p>{mail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 lg:ml-20">
                        <div className="flex flex-col">
                            <h3 className="uppercase pl-2 text-base font-semibold">
                                Våre åpningstider
                            </h3>
                            <div className="pl-2 pt-2">
                                <p>Mandag: </p>
                                <p>Tirsdag:</p>
                                <p>Onsdag:</p>
                                <p>Torsdag:</p>
                                <p>Fredag:</p>
                                <p>Lørdag:</p>
                                <p>Søndag:</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 pt-5 lg:pt-0 md:pt-0">
                        <h3 className="uppercase pl-2 text-base font-semibold">
                            Overordnet kategorier
                        </h3>
                        <div className="flex pl-2 flex-wrap text-forestgreen-darker pt-2">
                            {categories &&
                                categories.map((tagName, index) => (
                                    <CategoryTag key={index} title={tagName} bgColor="ivory-default" />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};