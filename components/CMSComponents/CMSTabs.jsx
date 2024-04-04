"use client"

import { FiUser } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";


export const CMSTabs = ({ path, type, data }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <ul className="flex flex-col w-full gap-2">
            <Link href={`/CMS/${path}/ny${type}`} className="">
                <li className={selectedTab === 'new' ? 'font-bold' : ''}>{type}</li>
            </Link>
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