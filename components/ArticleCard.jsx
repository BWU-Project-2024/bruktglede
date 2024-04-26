"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoreTag } from "./StoreTag";
import { FiChevronRight } from "react-icons/fi";

export const ArticleCard = ({ articleData, articlePostTypeName }) => {
    const [articlesData, setArticlesData] = useState([]);
    const [articlesType, setArticlesType] = useState()

    const iconStyle = { marginTop: "2px" }

    useEffect(() => {
        setArticlesData(articleData || []);
        setArticlesType(articlePostTypeName)
    }, [articlesData]);

    return (
        <>
            {articlesData.length === 0 ? (
                <p>Ingen artikler tilgjengelige for øyeblikket.</p>
            ) : (
                articlesData.map((article, index) => (
                    <div
                        key={index}
                        className="shadow-md rounded-xl w-[80%] md:w-[30%] lg:w-[20%] mb-5"
                    >
                        <Image
                            src={article.img}
                            alt="Artikkel cover bilde"
                            height={200}
                            width={500}
                            className="rounded-t-lg"
                        >
                        </Image>
                        <div className="p-5">
                            <div className="flex items-center justify-center">
                                <p className="text-sm md:text-md flex-grow font-semibold uppercase">
                                    {articlesType}
                                </p>
                                <StoreTag storename={article.store_name} />
                            </div>
                            <h4 className="text-lg font-medium pt-4 pb-1">
                                {article.title}
                            </h4>
                            <p className="pb-4">{article.bodyText}</p>
                            <Link href={`/artikler/${article.id}`} className="underline flex items-center font-semibold text-forestgreen-default">
                                Les mer
                                <FiChevronRight style={iconStyle} />
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
