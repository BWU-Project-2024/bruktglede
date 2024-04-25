import Link from "next/link";
import { FiMapPin, FiClock } from "react-icons/fi";

export const EventCardLong = ({ date, month, title, address, time, store }) => {
    const iconStyle = { fontSize: "1.1em" };

    return (
        <div className="flex flex-row rounded-xl shadow py-3 px-2 w-full md:w-3/5 lg:w-2/5">
            <div
                className="bg-ivory-default flex flex-col items-center justify-center"
                style={{
                    width: "110px",
                    height: "100px",
                }}
            >
                <span className="font-jomhuria text-6xl/3 mb-2 pt-4">
                    {date}
                </span>
                <span className="text-2xl">{month}</span>
            </div>
            <div className="flex flex-col flex-grow ml-5">
                <h3 className="font-bold text-base pb-3 underline">
                    <Link href="/">{title}</Link>
                </h3>
                <div className="flex items-center gap-2">
                    <FiMapPin style={iconStyle} />
                    <p>{address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiClock style={iconStyle} />
                    <p>{time}</p>
                </div>
            </div>
            <div
                className="transform bg-peach-default flex-col items-center justify-center ml-auto hidden sm:flex "
                style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                }}
            >
                <span className="text-4xl/3 font-jomhuria pt-2.5">{store}</span>
            </div>
        </div>
    );
};
