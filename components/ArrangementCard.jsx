"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiMapPin, FiClock } from "react-icons/fi";
import { StoreTag } from "./StoreTag";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export const ArrangementCard = ({ eventData, eventPostTypeName }) => {
    const [eventsData, setEventsData] = useState([]);
    const [eventsType, setEventsType] = useState();
    const [dayOfMonth, setDayOfMonth] = useState("");
    const [monthName, setMonthName] = useState("");

    useEffect(() => {
        setEventsData(eventData || []);
        setEventsType(eventPostTypeName);

        // get date
        const dateString = eventData[0].date;
        const date = new Date(dateString);
        const dayOfMonth = date.getDate();
        setDayOfMonth(dayOfMonth);

        // get month
        const monthNames = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAI",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OKT",
            "NOV",
            "DES",
        ];
        const monthIndex = date.getMonth();
        const monthName = monthNames[monthIndex];
        setMonthName(monthName);
    }, [eventsData, eventsType]);


    return (
        <Splide
            options={{
                perPage: 3,
                padding: { left: '3rem', right: '3rem' },
                width: '100%',
                pagination: true,
                gap: "1rem",
                height: "29rem",

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
            {eventsData.length === 0 ? (
                <p>Ingen arrangement tilgjengelige for øyeblikket.</p>
            ) : (
                eventsData.map((event, index) => (
                    <SplideSlide key={index} className="flex justify-center">
                        <div className="shadow-md h-fit rounded-xl mb-5 mx-14 md:mx-2">
                            <div className="h-auto w-100 relative flex justify-center items-center">
                                <Image
                                    src={event.img}
                                    alt="Arrangement cover image"
                                    height={200}
                                    width={500}
                                    className="object-cover w-[500px] h-[200px] overflow-hidden rounded-tr-lg rounded-tl-lg"
                                />
                                <div className="absolute w-[110px] aspect-square rounded-full bg-white flex justify-center items-center flex-col">
                                    <span className="text-5xl/6 font-bold font-jomhuria pt-2.5">
                                        {dayOfMonth}
                                    </span>
                                    <span className="text-xl max-h-8 font-normal">
                                        {monthName}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex flex-row items-center justify-center">
                                    <p className="text-sm md:text-md text-textLight flex-grow font-semibold uppercase">
                                        {eventsType}
                                    </p>
                                    <StoreTag
                                        storename={event.store_name}
                                    />
                                </div>
                                <h4 className="text-lg text-forestgreen-darker hover:text-forestgreen-lighter transition duration-300 font-medium py-4 underline">
                                    <Link
                                        href={`/arrangementer/${event.id}`}
                                    >
                                        {event.title}
                                    </Link>
                                </h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <FiHome
                                            style={{ fontSize: "1.1em" }}
                                        />
                                        <p>{event.store_name}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiMapPin
                                            style={{ fontSize: "1.1em" }}
                                        />
                                        <p>{event.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock
                                            style={{ fontSize: "1.1em" }}
                                        />
                                        <p>
                                            {event.startTime} -{" "}
                                            {event.endTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))
            )}
        </Splide>
    );
};
