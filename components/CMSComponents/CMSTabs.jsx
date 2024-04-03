"use client"

import { FiUser } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import { useState } from "react";

export const CMSTabs = ({ type, allTabs }) => {
    const [selectedTab, setSelectedTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="flex w-full gap-10">
            {/* liste */}
            <div className="">
                <ul>
                    <li onClick={() => handleTabClick('lockedTab')}>Ny {type}</li>
                    {allTabs.map(tab => (
                        <li key={tab} onClick={() => handleTabClick(tab)}>
                            name
                        </li>
                    ))}
                </ul>
            </div>

            {/* innhold til liste item */}
            <div className="">
                {selectedTab === 'lockedTab' && (
                    <div>
                        Content for lockedTab
                    </div>
                )}
                {selectedTab && (
                    <div>
                        Content for {selectedTab}
                    </div>
                )}
            </div>
        </div>

    )
}