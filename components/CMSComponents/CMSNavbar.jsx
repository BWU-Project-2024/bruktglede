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

    return (
        <div>
            {/* menu closed */}
            <div className="lg:hidden w-full flex items-center px-6 py-6 justify-between">
                <button onClick={handleNav}
                    className="w-full md:w-auto bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center gap-3">
                    <FiChevronLeft style={LeftRightArowStyles} /> Åpne oversiktsmeny
                </button>
            </div>
            {/* menu open */}
            <div
                className={
                    menuOpen
                        ? "z-10 fixed right-0 top-20 mt-1 w-full h-screen lg:hidden bg-background ease-in px-6 py-4 duration-300"
                        : "z-10 fixed right-[100%] w-full h-screen top-20 mt-1 ease-in px-6 py-4 duration-300"
                }
            >
                <nav className="flex flex-col w-full items-start text-text">
                    <button onClick={handleNav}
                        className="mt-2 w-full md:w-auto bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200 flex items-center gap-3">
                        Lukk oversiktsmeny <FiChevronRight style={LeftRightArowStyles} />
                    </button>
                    <ul className="mt-20 pr-4 text-xl flex flex-col gap-7 w-full">
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/butikkinfo" className="flex items-center gap-6">
                                <FiHome />
                                <p className={`${pathname === "/CMS/butikkinfo" ? "font-medium text-xl" : "text-xl"}`}>Butikk informasjon</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/artikler" className="flex items-center gap-6">
                                <FiEdit />
                                <p className={`${pathname === "/CMS/artikler" ? "font-medium text-xl" : "text-xl"}`}>Artikler</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/arrangementer" className="flex items-center gap-6">
                                <FiCalendar />
                                <p className={`${pathname === "/CMS/arrangementer" ? "font-medium text-xl" : "text-xl"}`}>Arrangementer</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/ukenshoydepunkt" className="flex items-center gap-6">
                                <FiStar />
                                <p className={`${pathname === "/CMS/ukenshoydepunkt" ? "font-medium text-xl" : "text-xl"}`}>Ukens høydepunkter</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/innleveringsstasjoner" className="flex items-center gap-6">
                                <FiMapPin />
                                <p className={`${pathname === "/CMS/innleveringsstasjoner" ? "font-medium text-xl" : "text-xl"}`}>Innleveringsstasjoner</p>
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/CMS/profil" className="flex items-center gap-6">
                                <FiUser />
                                <p className={`${pathname === "/CMS/profil" ? "font-medium text-xl" : "text-xl"}`}>Profil</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}