"use client"; 

import { useState } from "react";


export const Accordion = ({question, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="mt-1.5">
            <div className="bg-ivory-default py-1 my-1">
                <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full py-2 px-2 md:py-3 md:px-5">
                    <h3 className={`text-base md:text-lg font-opensans text-left ${accordionOpen ? 'font-semibold' : ''}`}>{question}</h3>
                    {accordionOpen ?  <span className="text-2xl">-</span> :  <span className="text-2xl">+</span> }
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden"><p className="pt-5 pl-2 pb-4 text-sm md:text-base lg:text-lg md:px-5">{answer}</p></div>
                </div>
            </div>
        </div>
    );
}