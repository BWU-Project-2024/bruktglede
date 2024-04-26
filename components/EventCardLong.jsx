"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

export const EventCardLong = ({ eventData }) => {
    const [eventsData, setEventsData] = useState([]);
    const [dayOfMonth, setDayOfMonth] = useState("");
    const [monthName, setMonthName] = useState("");

    useEffect(() => {
        if (eventData && eventData.length > 0) {
            setEventsData(eventData);

            const date = new Date(eventData[0].date);
            setDayOfMonth(date.getDate());

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
            setMonthName(monthNames[date.getMonth()]);
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
                        className="flex flex-row rounded-xl shadow py-3 px-2 w-full md:w-3/5 lg:w-2/5"
                    >
                        <div
                            className="bg-ivory-default flex flex-col items-center justify-center"
                            style={{ width: "90px", height: "90px" }}
                        >
                            <span className="font-jomhuria text-5xl/3 mb-2 pt-4">
                                {dayOfMonth}
                            </span>
                            <span className="text-xl">{monthName}</span>
                        </div>
                        <div className="flex flex-col flex-grow ml-5">
                            <h3 className="font-bold text-base pb-3 underline">
                                <Link href={`/events/${event.id}`}>
                                    {event.title}
                                </Link>
                            </h3>
                            <div className="flex items-center gap-2">
                                <FiMapPin style={{ fontSize: "1.1em" }} />
                                <p>{event.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock style={{ fontSize: "1.1em" }} />
                                <p>{`${event.startTime} - ${event.endTime}`}</p>
                            </div>
                        </div>
                        <div
                            className="transform bg-peach-default flex-col items-center justify-center ml-auto hidden sm:flex"
                            style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                            }}
                        >
                            <span className="text-4xl/3 font-jomhuria pt-2.5">
                                {event.store_name}
                            </span>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};
