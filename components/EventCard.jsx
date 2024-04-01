import Image from "next/image";
import test from "../app/assets/img/test.jpg";
import { StoreTag } from "./StoreTag";

export const EventCard = ({ type, title, description, store }) => {
    return (
        <main className="relative h-auto w-3/4 md:w-4/12 rounded-xl shadow-md py-5 px-4 mb-14 md:mx-2 ml-2">
            <div className="mb-3 relative">
                <Image src={test} alt="Test Image" width={500} height={300} />
            </div>
            <div className="flex flex-row items-center justify-center">
                <p className="pb-3 text-sm md:text-base flex-grow font-semibold">
                    {type}
                </p>
                <StoreTag>{store}</StoreTag>
            </div>
            <h3 className="font-bold text-base pb-3 underline">{title}</h3>
            <p>{description}</p>
        </main>
    );
};
