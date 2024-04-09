"use client"
import { useState } from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FiChevronLeft, FiChevronRight, FiHome, FiEdit, FiCalendar, FiStar, FiMapPin, FiUser } from "react-icons/fi";

export const CMSNavbar = ({ signOut }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const LeftRightArowStyles = { fontSize: "1.2em" }
    const NavIcons = { fontSize: "1.1em" }

    const menuItems = [
        { href: "/CMS/butikkinfo", icon: <FiHome style={NavIcons} />, text: "Butikk informasjon" },
        { href: "/CMS/artikler", icon: <FiEdit style={NavIcons} />, text: "Artikler" },
        { href: "/CMS/arrangementer", icon: <FiCalendar style={NavIcons} />, text: "Arrangementer" },
        { href: "/CMS/ukenshoydepunkt", icon: <FiStar style={NavIcons} />, text: "Ukens høydepunkter" },
        { href: "/CMS/innleveringsstasjoner", icon: <FiMapPin style={NavIcons} />, text: "Innleveringsstasjoner" },
        { href: "/CMS/profil", icon: <FiUser style={NavIcons} />, text: "Profil" }
    ];

    const handleNav = () => {
        setMenuOpen((menuOpen) => !menuOpen);
    };

    return (
        <>
            {/* navbar desktop */}
            <nav className="hidden sm:flex flex-col items-start min-h-vh w-72 border-r border-[#DBDBDB]">
                <p className="text-xl py-3 px-6 border-b border-[#DBDBDB] w-full">Type</p>
                <ul className="mt-3 px-6 text-text flex flex-col gap-6 w-full">
                    {menuItems.map((item, index) => (
                        <li key={index} role="menuitem">
                            <Link onClick={handleNav} href={item.href} className="flex items-center gap-6">
                                {item.icon}
                                <p className={`${pathname.startsWith(item.href) ? "font-medium text-lg underline underline-offset-8 decoration-1 decoration-[#DBDBDB]" : "text-lg"}`}>{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <form action={signOut} className="mx-auto mt-auto mb-10">
                    <button className="w-full bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200">
                        Logg ut
                    </button>
                </form>
            </nav>

            {/* mobile menu closed */}
            <div className="sm:hidden w-full flex items-center py-6 justify-between px-6">
                <button onClick={handleNav}
                    className="w-full bg-forestgreen-default text-ivory-default rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center justify-center gap-3">
                    <FiChevronLeft style={LeftRightArowStyles} /> Åpne oversiktsmeny
                </button>
            </div>
            {/* mobile menu open */}
            <div
                className={
                    menuOpen
                        ? "z-10 fixed right-0 top-20 mt-1 w-full h-screen sm:hidden bg-background ease-in px-6 py-4 duration-300"
                        : "z-10 fixed right-[100%] w-full h-screen top-20 mt-1 ease-in px-6 py-4 duration-300"
                }
            >
                <nav className="flex flex-col w-full items-start text-text">
                    <button onClick={handleNav}
                        className="mt-2 w-full bg-forestgreen-default text-ivory-default rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center justify-center gap-3">
                        Lukk oversiktsmeny <FiChevronRight style={LeftRightArowStyles} />
                    </button>
                    <ul className="mt-8 pr-4 flex flex-col gap-7 w-full">
                        {menuItems.map((item, index) => (
                            <li key={index} role="menuitem">
                                <Link onClick={handleNav} href={item.href} className="flex items-center gap-6">
                                    {item.icon}
                                    <p className={`${pathname === item.href ? "font-medium text-lg" : "text-lg"}`}>{item.text}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <form action={signOut} className="mt-[17vh]">
                    <button className="w-full bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200">
                        Logg ut
                    </button>
                </form>
            </div>
        </>
    )
}