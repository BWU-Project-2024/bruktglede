import { FiMapPin, FiClock, FiMail, FiPhone } from "react-icons/fi";
import { CategoryTag } from "./CategoryTag";

export const StoreInfoBar = ({ time, address, phone, mail, categories }) => {
    const iconStyle = { fontSize: "1.1em" };

    return (
        <div className="w-full py-4 bg-forestgreen-default mb-5 lg:pb-16 md:pb-16">
            <div className="p-5 flex flex-col lg:flex-row md:flex-row justify-center lg:gap-56 md:gap-56">
                <div>
                    <div className="flex flex-col gap-2 pl-2">
                        <div className="flex items-center gap-8 text-ivory-default">
                            <FiClock style={iconStyle} />
                            <p>{time}</p>
                        </div>
                        <div className="flex items-center gap-8 text-ivory-default">
                            <FiMapPin style={iconStyle} />
                            <p>{address}</p>
                        </div>
                        <div className="flex items-center gap-8 text-ivory-default">
                            <FiPhone style={iconStyle} />
                            <p>{phone}</p>
                        </div>
                        <div className="flex items-center gap-8 text-ivory-default">
                            <FiMail style={iconStyle} />
                            <p>{mail}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 lg:pt-0 md:pt-0">
                    <span className="uppercase text-ivory-default pl-2">
                        Overordnet kategorier
                    </span>
                    <div className="flex flex-wrap pt-3">
                        {categories &&
                            categories.map((tagName, index) => (
                                <CategoryTag key={index} title={tagName} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
