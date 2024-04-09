"use client"
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
1
export const CMSTabsProfileInfo = ({ table }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <ul className="flex flex-col w-full gap-2">
            <Link
                href={`/CMS/butikkinfo/${table}`}
                className="border-b border-[#DBDBDB] px-6 py-2 bg-success-lighter">
                <li onClick={() => handleTabClick(table)} className={selectedTab === table ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    {table} <FiEdit3 />
                </li>
            </Link>
        </ul>
    )
}