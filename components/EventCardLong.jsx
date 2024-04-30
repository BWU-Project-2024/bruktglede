"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

export const EventCardLong = ({ eventData }) => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        if (eventData && eventData.length > 0) {
            setEventsData(eventData);
        }
    }, [eventData]);

    return (
        <>
            {eventsData.length === 0 ? (
                <p>No events available at the moment.</p>
            ) : (
                eventsData.map((event, index) => (
                    <div
                        key={index}
                        className="flex flex-row rounded-xl shadow py-2 px-2 w-full md:w-[80%] lg:w-[70%] mb-4"
                    >
                        <div className="bg-ivory-default flex flex-col items-center justify-center h-auto w-[90px] rounded">
                            <span className="font-jomhuria text-5xl/3 mb-2 pt-4">
                                {new Date(event.date).getDate()}
                            </span>
                            <span className="text-xl">
                                {new Date(event.date).toLocaleString('default', { month: 'short' })}
                            </span>
                        </div>
                        <div className="flex flex-col flex-grow ml-5">

                            <Link href={`/arrangementer/${event.id}`}
                                className=" font-medium pb-3 underline text-forestgreen-darker text-lg  hover:text-forestgreen-lighter transition duration-300">
                                {event.title}
                            </Link>

                            <div className="flex items-center gap-2">
                                <FiMapPin style={{ fontSize: "1.1em" }} />
                                <p>{event.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock style={{ fontSize: "1.1em" }} />
                                <p>{`${event.startTime} - ${event.endTime}`}</p>
                            </div>
                        </div>
                        <div className="transform bg-peach-default flex-col items-center justify-center ml-auto hidden sm:flex w-[90px] h-[90px] rounded-full">
                            <p className="text-4xl/3 font-jomhuria max-w-[80px] break-words word-breaks pt-2.5 text-center items-center leading-6">
                                {event.store_name}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
