"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiMapPin, FiClock } from "react-icons/fi";
import { StoreTag } from "./StoreTag";
import { getEvents } from "@/lib/supabase/actionsPublic";

export const ArrangementCard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents = await getEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            {events.map((event, index) => (
                <div
                    key={index}
                    className="shadow-md rounded-xl w-[80%] md:w-[20%] mb-5"
                >
                    <div className="h-auto w-100 relative flex justify-center items-center">
                        <Image
                            src={event.img}
                            alt="Arrangement cover image"
                            width={500}
                            height={200}
                            className="rounded-tr-lg rounded-tl-lg"
                        />
                        <div className="absolute w-[110px] aspect-square rounded-full bg-white flex justify-center items-center flex-col">
                            <span className="text-5xl/6 font-bold font-jomhuria pt-2.5">
                                {event.store_name}
                            </span>
                            <span className="text-2xl max-h-8">
                                {event.month}
                            </span>
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-sm md:text-md flex-grow font-semibold uppercase">
                                {event.postTypeName}
                            </p>
                            <StoreTag>{event.store_name}</StoreTag>
                        </div>
                        <h4 className="text-lg font-medium py-4 underline">
                            <Link href={`/events/${event.id}`}>
                                {event.title}
                            </Link>
                        </h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FiHome style={{ fontSize: "1.1em" }} />
                                <p>{event.store_name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiMapPin style={{ fontSize: "1.1em" }} />
                                <p>{event.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiClock style={{ fontSize: "1.1em" }} />
                                <p>
                                    {event.startTime} - {event.endTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
