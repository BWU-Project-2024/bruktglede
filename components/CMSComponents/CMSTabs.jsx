"use client"
import { FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
1
export const CMSTabs = ({ path, type, data }) => {
    const [selectedTab, setSelectedTab] = useState('');
    const pathname = useRouter();

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
            {data && data.length > 0 && data.map(post => (
                <Link
                    key={post.id}
                    href={`/CMS/${path}/${post.id}`}
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