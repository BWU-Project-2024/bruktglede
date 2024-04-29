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
        <>
            <Splide
                options={{
                    padding: "2rem",
                    autoWidth: true,
                    pagination: true,
                    gap: "2rem",
                    breakpoints: {
                        750: {
                            width: "100%",
                            autoWidth: false,
                            padding: "2rem",
                            gap: "1rem",
                        },
                    },
                }}
            >
                {eventsData.length === 0 ? (
                    <p>Ingen arrangement tilgjengelige for øyeblikket.</p>
                ) : (
                    eventsData.map((event, index) => (
                        <SplideSlide key={index} className="lg:w-64">
                            <div className="shadow-md rounded-xl  mb-5">
                                <div className="h-auto w-100 relative flex justify-center items-center">
                                    <Image
                                        src={event.img}
                                        alt="Arrangement cover image"
                                        width={225}
                                        height={125}
                                        className="rounded-tr-lg rounded-tl-lg"
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
                                        <p className="text-sm md:text-md flex-grow font-semibold uppercase">
                                            {eventsType}
                                        </p>
                                        <StoreTag
                                            storename={event.store_name}
                                        />
                                    </div>
                                    <h4 className="text-lg font-medium py-4 underline">
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
        </>
    );
};
