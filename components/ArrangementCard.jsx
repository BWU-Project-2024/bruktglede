import { StoreTag } from "./StoreTag";
import Image from "next/image";
import test from "../app/assets/img/test.jpg";

export const ArrangementCard = ({ type, title, description, store }) => {
    return (
        <main className="relative h-auto w-3/4 md:w-4/12 rounded-xl shadow-md py-5 px-4 mb-14 md:mx-2 ml-2">
            <div className="mb-3 relative">
                <Image src={test} alt="Test Image" width={500} height={300} />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center"
                    style={{
                        width: "130px",
                        height: "130px",
                        borderRadius: "50%",
                    }}
                >
                    <span className="text-7xl/9 font-bold font-jomhuria">
                        24
                    </span>
                    <span className="text-3xl max-h-8">JUN</span>
                </div>
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
