"use client"

import { FiUser } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

// gjøre om til en slider på mobil slik som i navbaren?
export const CMSTabs = ({ path, type, data }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <ul className="flex flex-col w-full gap-2 sm:pl-6 sm:pt-1">
            {/* static link */}
            <Link href={`/CMS/${path}/${type}`} className="">
                <li className={selectedTab === 'new' ? 'font-bold' : ''}>{type}</li>
            </Link>

            {/* dynamic links */}
            {data.map(post => (
                <Link key={post.id} href={`/CMS/${path}/${selectedTab}`}>
                    <li className={selectedTab === post.title ? 'font-bold' : ''}
                        onClick={() => handleTabClick(post.title)}>
                        {post.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}