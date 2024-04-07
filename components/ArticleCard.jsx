import Image from "next/image";
import Link from "next/link";
import { StoreTag } from "./StoreTag";

export const ArticleCard = ({ image, type, title, description, store }) => {
    return (
        <div className="shadow-md rounded-xl w-[70%] md:w-[20%]">
            <Image
                src={image}
                alt="Artikkel cover bilde"
                height={200}
                width={500}
                className="rounded-t-lg"
            >
            </Image>
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
                <p>{description}</p>
            </div>
        </div>
    );
};
