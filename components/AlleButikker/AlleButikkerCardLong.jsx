import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiChevronRight } from "react-icons/fi";

export const AlleButikkerCardLong = ({ index, storeData }) => {
    const iconStyle = { marginTop: "2px" }
    const isEvenCard = index % 2 === 0;

    return (
        <div className="flex w-full md:px-20 lg:px-40">
            {isEvenCard ? (
                <div className="w-[50%] md:w-[600px]">
                    <Image
                        src={storeData.img}
                        height={200}
                        width={600}
                        alt="Butikk bilde"
                        className="object-cover"
                    />
                </div>
            ) : null}
            <div className="flex flex-col justify-center items-center px-5 md:px-0 gap-2 md:gap-8 w-[50%] md:w-[600px]">
                <h3 className="text-base md:text-xl font-medium">{storeData.name}</h3>
                <div className="flex flex-col gap-0 md:gap-4">
                    <div className="flex gap-2 md:items-center">
                        <FiMapPin style={iconStyle} />
                        <p className="text-sm md:text-lg">{storeData.address}</p>
                    </div>
                    <div className="flex gap-2 md:items-center">
                        <FiPhone style={iconStyle} />
                        <p className="text-sm md:text-lg">{storeData.phone}</p>
                    </div>
                </div>
                <Link href={`/butikker/${storeData.id}`} className="ml-6 flex items-center gap-1 text-sm md:text-lg underline text-forestgreen-default hover:text-forestgreen-lighter font-medium">
                    Til butikksiden <FiChevronRight />
                </Link>
            </div>
            {!isEvenCard ? (
                <div className="w-[50%] md:w-[600px]">
                    <Image
                        src={storeData.img}
                        height={200}
                        width={600}
                        alt="Butikk bilde"
                        className="object-cover"
                    />
                </div>
            ) : null}
        </div>
    );
}