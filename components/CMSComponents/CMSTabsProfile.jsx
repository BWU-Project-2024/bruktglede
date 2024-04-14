"use client"
import { FiInfo, FiEdit } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
1
export const CMSTabsProfile = () => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const iconStyles = { color: "#656565" }

    return (
        <ul className="flex flex-col w-full gap-2">
            <Link
                href={`/CMS/profil/minBruker`}
                className="border-b border-t sm:border-t-0 border-[#DBDBDB] px-6 py-2">
                <li onClick={() => handleTabClick("minbruker")} className={selectedTab === "minbruker" ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    Min bruker <FiInfo style={iconStyles} />
                </li>
            </Link>
            <Link
                href={`/CMS/profil/endrePassord`}
                className="border-b border-[#DBDBDB] px-6 pb-2">
                <li onClick={() => handleTabClick("endrepassord")} className={selectedTab === "endrepassord" ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    Endre passord <FiEdit style={iconStyles} />
                </li>
            </Link>
        </ul>
    )
}