"use client"
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
1
export const CMSTabsStoreInfo = ({ table1, table2 }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <ul className="flex flex-col w-full gap-2">
            <Link
                href={`/CMS/butikkinfo/${table1}`}
                className="border-b border-[#DBDBDB] px-6 py-2 bg-success-lighter">
                <li onClick={() => handleTabClick(table1)} className={selectedTab === table1 ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    {table1} <FiEdit3 />
                </li>
            </Link>
            <Link
                href={`/CMS/butikkinfo/${table2}`}
                className="border-b border-[#DBDBDB] px-6 py-2 bg-success-lighter">
                <li onClick={() => handleTabClick(table2)} className={selectedTab === table2 ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    {table2} <FiEdit3 />
                </li>
            </Link>
        </ul>
    )
}