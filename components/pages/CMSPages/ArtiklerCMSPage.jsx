"use client"
import { CMSType } from "@/components/CMSComponents/CMSType"
import { CMSTabs } from "@/components/CMSComponents/CMSTabs"
import { useState, useEffect } from "react";

export const ArtiklerCMSPage = () => {
    const [allTabs, setAllTabs] = useState([]);

    useEffect(() => {
        // Fetch all tabs from the server
        const fetchTabs = async () => {
            // Fetch data from the server
            // Update state with fetched data using setAllTabs
        };

        fetchTabs();
    }, []);

    return (
        <main className='flex flex-col min-h-[90vh] md:w-80 md:border-r md:border-[#DBDBDB]'>
            <CMSType />
            <CMSTabs type="artikkel" allTabs={allTabs} setAllTabs={setAllTabs} />
        </main>
    )
}