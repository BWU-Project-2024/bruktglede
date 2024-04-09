"use client"
import { FiEdit3, FiEdit } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export const CMSTabs = ({ path, type, data }) => {
    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const iconStyles = { color: "#656565" }

    return (
        <ul className="flex flex-col w-full gap-2">
            {/* static link */}
            <Link
                href={`/CMS/${path}/${type}`}
                className="border-b border-[#DBDBDB] px-6 py-2 bg-success-lighter">
                <li onClick={() => handleTabClick(type)} className={selectedTab === type ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}>
                    {type} <FiEdit style={iconStyles} />
                </li>
            </Link>

            {/* dynamic links */}
            {data && data.length > 0 && data.map(post => (
                <Link
                    key={post.id}
                    href={`/CMS/${path}/${post.id}`}
                    className="border-b border-[#DBDBDB] px-6 pb-2">
                    <li onClick={() => handleTabClick(post.title)}
                        className={selectedTab === post.title ? 'font-medium flex justify-between items-center' : 'flex justify-between items-center'}
                    >
                        {post.title} <FiEdit3 style={iconStyles} />
                    </li>
                </Link>
            ))}
        </ul>
    )
}