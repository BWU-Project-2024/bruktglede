"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreTag } from "../Tags/StoreTag";
import { FiChevronRight } from "react-icons/fi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export const ArticleCard = ({ articleData, articlePostTypeName }) => {
    const [articlesData, setArticlesData] = useState([]);
    const [articlesType, setArticlesType] = useState()

    const iconStyle = { marginTop: "2px" }

    useEffect(() => {
        setArticlesData(articleData || []);
        setArticlesType(articlePostTypeName)
    }, [articlesData, articlesType]);

    return (
        <>
            <Splide
                options={{
                    perPage: 3,
                    padding: { left: '3rem', right: '3rem' },
                    width: '100%',
                    pagination: true,
                    gap: "1rem",
                    height: "28rem",

                    breakpoints: {
                        1000: {
                            perPage: 2,
                            gap: '1rem',
                            padding: { left: '3rem', right: '3rem' },
                        },
                        480: {
                            perPage: 1,
                            gap: '1rem',
                            padding: { left: '0rem', right: '0rem' },
                        },
                    },
                }}
            >
                {articlesData.length === 0 ? (
                    <p>Ingen artikler tilgjengelige for øyeblikket.</p>
                ) : (
                    articlesData.map((article, index) => (
                        <SplideSlide key={index} className="flex justify-center">
                            <div className="shadow-md h-fit rounded-xl mb-5 mx-14 md:mx-2">
                                <div className="h-auto w-100 relative flex flex-col justify-center">
                                    <Image
                                        src={article.img}
                                        alt="Artikkel cover bilde"
                                        height={200}
                                        width={500}
                                        className="object-cover w-[500px] h-[200px] overflow-hidden rounded-t-lg"
                                    >
                                    </Image>
                                    <div className="p-5">
                                        <div className="flex items-center justify-center">
                                            <p className="text-sm md:text-md flex-grow font-semibold text-textLight uppercase">
                                                {articlesType}
                                            </p>
                                            <StoreTag storename={article.store_name} />
                                        </div>
                                        <h4 className="text-lg font-medium pt-4 pb-1">
                                            {article.title}
                                        </h4>
                                        <p className="mb-4 line-clamp-2 ">{article.bodyText}</p>
                                        <Link href={`/artikler/${article.id}`} className="underline flex items-center font-semibold text-forestgreen-darker text-lg  hover:text-forestgreen-lighter transition duration-300">
                                            Les mer
                                            <FiChevronRight style={iconStyle} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))
                )}
            </Splide >
        </>
    );
};
