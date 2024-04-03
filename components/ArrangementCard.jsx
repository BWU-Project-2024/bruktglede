import { StoreTag } from "./StoreTag";
import Link from "next/link";
import Image from "next/image";
import { FiHome, FiMapPin, FiClock } from "react-icons/fi";

export const ArrangementCard = ({ image, date, month, type, title, store, address, time }) => {
    const iconStyle = { fontSize: "1.1em" }

    return (
        <div className="shadow-md rounded-xl w-[80%] md:w-[20%]">
            <div className="h-auto w-100 relative flex justify-center items-center">
                <Image
                    src={image}
                    alt="Arrangement cover bilde"
                    width={500}
                    height={200}
                    className="rounded-tr-lg rounded-tl-lg"
                >
                </Image>
                <div className="absolute w-[110px] aspect-square rounded-full bg-white flex justify-center items-center flex-col">
                    <span className="text-6xl/6 font-bold font-jomhuria pt-2.5">
                        {date}
                    </span>
                    <span className="text-2xl max-h-8">
                        {month}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex flex-row items-center justify-center">
                    <p className="text-sm md:text-md flex-grow font-semibold uppercase">
                        {type}
                    </p>
                    <StoreTag>{store}</StoreTag>
                </div>
                <h4 className="text-lg font-medium py-4 underline">
                    <Link href="/">{title}</Link>
                </h4>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FiHome style={iconStyle} />
                        <p>{store}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMapPin style={iconStyle} />
                        <p>{address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiClock style={iconStyle} />
                        <p>{time}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};
