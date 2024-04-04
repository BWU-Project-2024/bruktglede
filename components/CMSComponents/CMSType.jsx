"use client"

import { FiHome, FiEdit, FiCalendar, FiStar, FiMapPin, FiUser } from "react-icons/fi";
import { usePathname } from 'next/navigation'

export const CMSType = () => {
    const NavIcons = { fontSize: "1.2em" }
    const pathname = usePathname();

    const getTitleAndIcon = (pathname) => {
        // Determine the title based on the pathname
        switch (true) {
            case pathname.startsWith("/CMS/butikkinfo"):
                return { title: "Butikk informasjon", icon: <FiHome style={NavIcons} /> };
            case pathname.startsWith("/CMS/artikler"):
                return { title: "Artikler", icon: <FiEdit style={NavIcons} /> };
            case pathname.startsWith("/CMS/arrangementer"):
                return { title: "Arrrangementer", icon: <FiCalendar style={NavIcons} /> };
            case pathname.startsWith("/CMS/ukenshoydepunkt"):
                return { title: "Ukens høydepunkter", icon: <FiStar style={NavIcons} /> };
            case pathname.startsWith("/CMS/innleveringsstasjoner"):
                return { title: "Innleveringsstasjoner", icon: <FiMapPin style={NavIcons} /> };
            case pathname.startsWith("/CMS/profil"):
                return { title: "Profil", icon: <FiUser style={NavIcons} /> };
            default:
                return { title: "Title", icon: null };
        }
    };

    // Get the title and icon based on the pathname
    const { title, icon } = getTitleAndIcon(pathname);

    return (
        <>
            <div className="mb-6 sm:mb-2 flex items-center sm:py-3 sm:px-6 gap-4 sm:border-b sm:border-[#DBDBDB]">
                {icon}
                <p className="mt-2 sm:mt-0 text-lg font-medium sm:text-xl sm:font-normal">
                    {title}
                </p>
            </div>
        </>

    )
}