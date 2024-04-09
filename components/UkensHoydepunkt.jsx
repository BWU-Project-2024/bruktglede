import Image from "next/image";
import { StoreTag } from "./StoreTag";

export const UkensHoydepunkt = ({ image, store }) => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-forestgreen-default w-11/12 h-11 opacity-70 flex items-center justify-between px-4">
                <p className="text-ivory-default">Antikk kopp</p>
                <StoreTag>{store}</StoreTag>
            </div>
            <div className="flex justify-center items-center">
                <Image src={image} alt="Ukens høydepunkt" className="w-11/12" />
            </div>
        </div>
    );
};
