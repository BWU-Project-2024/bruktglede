"use client"
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
1
export const CMSTabsStoreInfo = () => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const iconStyles = { color: "#656565" }

    return (
        <ul className="flex flex-col w-full md:w-[319px] gap-2">
            <Link
                href={`/CMS/butikkinfo/nokkelInfo`}
                className="border-b border-t w-full md:w-[319px] sm:border-t-0 border-[#DBDBDB] px-6 py-2">
                <li onClick={() => handleTabClick("nokkelinfo")} className={selectedTab === "nokkelinfo" ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    Nøkkelinformasjon <FiEdit style={iconStyles} />
                </li>
            </Link>
            <Link
                href={`/CMS/butikkinfo/visjon`}
                className="border-b w-full md:w-[319px] border-[#DBDBDB] px-6 pb-2">
                <li onClick={() => handleTabClick("visjon")} className={selectedTab === "visjon" ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    Butikkens visjon <FiEdit style={iconStyles} />
                </li>
            </Link>
        </ul>
    )
}