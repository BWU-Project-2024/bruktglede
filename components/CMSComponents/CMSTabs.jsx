"use client"

import { FiEdit3 } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";

// gjøre om til en slider på mobil slik som i navbaren?
export const CMSTabs = ({ path, type, data }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <ul className="flex flex-col w-full gap-2">
            {/* static link */}
            <Link
                href={`/CMS/${path}/${type}`}
                className="border-b border-[#DBDBDB] px-6 py-2 bg-success-lighter">
                <li onClick={() => handleTabClick(type)} className={selectedTab === type ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    {type} <FiEdit3 />
                </li>
            </Link>

            {/* dynamic links */}
            {data.map(post => (
                <Link
                    key={post.id}
                    href={`/CMS/${path}/${post.title}`}
                    className="border-b border-[#DBDBDB] px-6 pb-2">
                    <li onClick={() => handleTabClick(post.title)}
                        className={selectedTab === post.title ? 'font-medium' : ''}
                    >
                        {post.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}