"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/supabase/actionsPublic";
import { FiHome, FiMapPin, FiClock } from "react-icons/fi";
import { StoreTag } from "./StoreTag";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export const ArrangementCard = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticlesData = async () => {
            try {
                const articlesData = await getArticles();
                setArticles(articlesData);
            } catch (error) {
                console.error("Error fetching articles data:", error);
            }
        };

        fetchArticlesData();
    }, []);

    return (
        <div className="w-full mx-auto" style={{ width: "calc(100%)" }}>
            <Splide options={{ perPage: 3, gap: "1rem", pagination: true }}>
                {articles.map((article, index) => (
                    <SplideSlide key={index}>
                        <div className="shadow-md rounded-xl mb-5 w-full">
                            <div className="h-auto relative flex justify-center items-center">
                                <Image
                                    src={article.image}
                                    alt="Arrangement cover bilde"
                                    width={500}
                                    height={200}
                                    className="rounded-tr-lg rounded-tl-lg"
                                />
                                <div className="absolute top-0 right-0 w-[110px] h-[110px] rounded-full bg-white flex justify-center items-center flex-col">
                                    <span className="text-6xl/6 font-bold font-jomhuria pt-2.5">
                                        {article.date}
                                    </span>
                                    <span className="text-2xl max-h-8">
                                        {article.month}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-row items-center justify-center">
                                    <p className="text-sm md:text-md flex-grow font-semibold uppercase">
                                        {article.type}
                                    </p>
                                    <StoreTag>{article.store_name}</StoreTag>
                                </div>
                                <h4 className="text-lg font-medium py-4 underline">
                                    <Link href="/">{article.title}</Link>
                                </h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <FiHome style={{ fontSize: "1.1em" }} />
                                        <p>{article.store}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiMapPin
                                            style={{ fontSize: "1.1em" }}
                                        />
                                        <p>{article.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock
                                            style={{ fontSize: "1.1em" }}
                                        />
                                        <p>{article.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};
