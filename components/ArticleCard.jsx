import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

import test from "../app/assets/img/test.jpg";
import { StoreTag } from "./StoreTag";

export const ArticleCard = ({ type, title, description, store }) => {
    return (
        <div>
            <main className="pb-5">
                <div className="pb-30 shadow-md rounded-xl">
                    <Image src={test} alt="Test Image" />
                    <div className="p-5">
                        <div className="flex flex-row items-center justify-center">
                            <p className="pb-3 text-sm md:text-base flex-grow font-semibold uppercase ">
                                {type}
                            </p>
                            <StoreTag>{store}</StoreTag>
                        </div>
                        <h3 className="font-bold text-base pb-3 underline">
                            <Link href="/">
                                <a>{title}</a>
                            </Link>
                        </h3>
                        <p>{description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
