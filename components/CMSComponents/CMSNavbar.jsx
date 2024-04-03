"use client"
import { useState } from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FiChevronLeft, FiChevronRight, FiHome, FiEdit, FiCalendar, FiStar, FiMapPin, FiUser } from "react-icons/fi";

export const CMSNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleNav = () => {
        setMenuOpen((menuOpen) => !menuOpen);
    };

    const LeftRightArowStyles = { fontSize: "1.2em" }
    const NavIcons = { fontSize: "1.1em" }

    return (
        <>
            {/* navbar desktop */}
            <nav className="hidden sm:flex flex-col items-start min-h-vh w-72 border-r border-[#DBDBDB]">
                <p className="text-xl py-3 px-6 border-b border-[#DBDBDB] w-full">Type</p>
                <ul className="mt-8 px-6 text-text flex flex-col gap-8 w-full">
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/butikkinfo" className="flex items-center gap-6">
                            <FiHome style={NavIcons} />
                            <p className={`${pathname === "/CMS/butikkinfo" ? "font-medium text-lg" : "text-lg"}`}>Butikk informasjon</p>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/artikler" className="flex items-center gap-6">
                            <FiEdit style={NavIcons} />
                            <p className={`${pathname === "/CMS/artikler" ? "font-medium text-lg" : "text-lg"}`}>Artikler</p>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/arrangementer" className="flex items-center gap-6">
                            <FiCalendar style={NavIcons} />
                            <p className={`${pathname === "/CMS/arrangementer" ? "font-medium text-lg" : "text-lg"}`}>Arrangementer</p>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/ukenshoydepunkt" className="flex items-center gap-6">
                            <FiStar style={NavIcons} />
                            <p className={`${pathname === "/CMS/ukenshoydepunkt" ? "font-medium text-lg" : "text-lg"}`}>Ukens høydepunkter</p>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/innleveringsstasjoner" className="flex items-center gap-6">
                            <FiMapPin style={NavIcons} />
                            <p className={`${pathname === "/CMS/innleveringsstasjoner" ? "font-medium text-lg" : "text-lg"}`}>Innleveringsstasjoner</p>
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link onClick={handleNav} href="/CMS/profil" className="flex items-center gap-6">
                            <FiUser style={NavIcons} />
                            <p className={`${pathname === "/CMS/profil" ? "font-medium text-lg" : "text-lg"}`}>Profil</p>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* mobile menu closed */}
            <div className="sm:hidden w-full flex items-center px-6 py-6 justify-between">
                <button onClick={handleNav}
                    className="w-full bg-forestgreen-default text-ivory-default rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center justify-center gap-3">
                    <FiChevronLeft style={LeftRightArowStyles} /> Åpne oversiktsmeny
                </button>
            </div>
            {/* mobile menu open */}
            <div
                className={
                    menuOpen
                        ? "z-10 fixed right-0 top-20 mt-1 w-full h-screen lg:hidden bg-background ease-in px-6 py-4 duration-300"
                        : "z-10 fixed right-[100%] w-full h-screen top-20 mt-1 ease-in px-6 py-4 duration-300"
                }
            >
                <nav className="flex flex-col w-full items-start text-text">
                    <button onClick={handleNav}
                        className="mt-2 w-full bg-forestgreen-default text-ivory-default rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center justify-center gap-3">
                        Lukk oversiktsmeny <FiChevronRight style={LeftRightArowStyles} />
                    </button>
                    <ul className="mt-8 pr-4 flex flex-col gap-7 w-full">
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/butikkinfo" className="flex items-center gap-6">
                                <FiHome style={NavIcons} />
                                <p className={`${pathname === "/CMS/butikkinfo" ? "font-medium text-lg" : "text-lg"}`}>Butikk informasjon</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/artikler" className="flex items-center gap-6">
                                <FiEdit style={NavIcons} />
                                <p className={`${pathname === "/CMS/artikler" ? "font-medium text-lg" : "text-lg"}`}>Artikler</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/arrangementer" className="flex items-center gap-6">
                                <FiCalendar style={NavIcons} />
                                <p className={`${pathname === "/CMS/arrangementer" ? "font-medium text-lg" : "text-lg"}`}>Arrangementer</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/ukenshoydepunkt" className="flex items-center gap-6">
                                <FiStar style={NavIcons} />
                                <p className={`${pathname === "/CMS/ukenshoydepunkt" ? "font-medium text-lg" : "text-lg"}`}>Ukens høydepunkter</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/innleveringsstasjoner" className="flex items-center gap-6">
                                <FiMapPin style={NavIcons} />
                                <p className={`${pathname === "/CMS/innleveringsstasjoner" ? "font-medium text-lg" : "text-lg"}`}>Innleveringsstasjoner</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/profil" className="flex items-center gap-6">
                                <FiUser style={NavIcons} />
                                <p className={`${pathname === "/CMS/profil" ? "font-medium text-lg" : "text-lg"}`}>Profil</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}