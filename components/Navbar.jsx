"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BruktgledeLogo from "@/public/bruktglede-logo.svg"
import { usePathname } from 'next/navigation'
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";


export const Navbar = ({ session, role }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleNav = () => {
        setMenuOpen((menuOpen) => !menuOpen);
    };

    const searchIconStyle = { fontSize: "1.3em" }
    const searchIconStyleMobileNavbar = { fontSize: "1.9em" }
    const menuIconStyle = { fontSize: "2.2em" }
    const exitIconStyle = { fontSize: "3em", transform: "rotate(45deg)", marginLeft: "-10px" }

    return (
        <div className="w-full bg-ivory-default">
            {/* Nav Desktop */}
            <nav className="hidden lg:flex w-full justify-between items-center bg-purple-dark text-purple-light px-10 py-3" role="navigation" aria-label="Bruktglede navigasjon">
                <Link href="/" className="flex justify-center items-center gap-3 pointer">
                    <Image
                        priority
                        src={BruktgledeLogo}
                        alt="bruktglede logo desktop"
                        height={30}
                        width={30}
                    >
                    </Image>
                    <p className="font-jomhuria text-forestgreen-default text-4xl pt-1">Bruktglede</p>
                </Link>

                <ul className="flex flex-row items-center justify-center gap-6">
                    <li role="menuitem">
                        <Link href="/" className={`pr-2 ${pathname === "/" ? "font-medium" : "hover:font-medium"}`}>
                            Hjem
                        </Link>
                        {pathname === "/" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-4 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li className="text-text" role="menuitem">
                        <button id="dropdowns" data-dropdown-toggle="dropdown" className="text-black rounded-lg py-2.5 text-center inline-flex items-center hover:font-medium"
                            type="button">
                            Butikker
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            {pathname === "/butikker" && (
                                <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-7 rounded-[1.5px] rotate-45"></div>
                            )}
                        </button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul className="text-base text-gray-700" aria-labelledby="dropdownDefaultButton">
                                <li className="relative">
                                    <Link href="/butikker" className="rounded-t-lg block hover:bg-ivory-lighter">
                                        <p className="mx-4 pt-2">Alle butikker</p>
                                        <hr className="mt-2"></hr>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-ivory-lighter">Fretex</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-ivory-lighter dark:hover:text-white">Ting og Tøy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-ivory-lighter dark:hover:text-white">Ting og Tøy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-ivory-lighter dark:hover:text-white">Ting og Tøy</Link>
                                </li>
                                <li className="relative">
                                    <Link href="/blifrivillig" className="block rounded-b-lg hover:bg-ivory-lighter">
                                        <hr className="mb-2"></hr>
                                        <p className="mx-4 pb-2">Bli frivillig</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </li>
                    <li role="menuitem">
                        <Link href="/arrangementer" className={`${pathname === "/arrangementer" ? "font-medium" : "hover:font-medium"}`}>
                            Arrangementer
                        </Link>
                        {pathname === "/arrangementer" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-14 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li role="menuitem">
                        <Link href="/innleveringsstasjoner" className={`${pathname === "/innleveringsstasjoner" ? "font-medium" : "hover:font-medium"}`}>
                            Innleveringsstasjoner
                        </Link>
                        {pathname === "/innleveringsstasjoner" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-20 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li role="menuitem">
                        <Link href="/ukenshoydepunkt" className={`${pathname === "/ukenshoydepunkt" ? "font-medium" : "hover:font-medium"}`}>
                            Ukens høydepunkt
                        </Link>
                        {pathname === "/ukenshoydepunkt" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-20 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li role="menuitem">
                        <Link href="/artikler" className={`${pathname === "/artikler" ? "font-medium" : "hover:font-medium"}`}>
                            Artikler
                        </Link>
                        {pathname === "/artikler" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-6 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li role="menuitem">
                        <Link href="/omoss" className={`${pathname === "/omoss" ? "font-medium" : "hover:font-medium"}`}>
                            Om oss
                        </Link>
                        {pathname === "/omoss" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-6 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    {/* Check if user is logged in */}
                    {session && role === 'superuser' && (
                        <li role="menuitem">
                            <Link href="/CMS/butikkinfo" className={`${pathname.startsWith("/CMS/") ? "font-medium" : "hover:font-medium"}`}>
                                Min butikk
                            </Link>
                            {pathname.startsWith("/CMS/") && (
                                <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-8 rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                    )}
                    {session && role === 'admin' && (
                        <li role="menuitem">
                            <Link href="/CMS/admin" className={`${pathname.startsWith("/CMS/") ? "font-medium" : "hover:font-medium"}`}>
                                Admin
                            </Link>
                            {pathname.startsWith("/CMS/") && (
                                <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-5 rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                    )}
                    <li role="menuitem">
                        <Link className="" href="/sok">
                            <FiSearch style={searchIconStyle} />
                            {pathname === "/sok" && (
                                <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-2 rounded-[1.5px] rotate-45"></div>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Nav Mobile */}
            {/* Menu bar closed */}
            <div className="lg:hidden w-full flex items-center px-6 py-6 justify-between">
                <button onClick={handleNav}>
                    <FiMenu style={menuIconStyle} />
                </button>
                <div className="flex gap-6">
                    <Link href="/sok">
                        <FiSearch style={searchIconStyleMobileNavbar} />
                    </Link>
                    <Link href="/" className="flex justify-center items-center gap-3 pointer">
                        <Image
                            priority
                            src={BruktgledeLogo}
                            alt="bruktglede logo mobil"
                            height={25}
                            width={25}
                        >
                        </Image>
                    </Link>
                </div>
            </div>
            {/* Menu bar open */}
            <div
                className={
                    menuOpen
                        ? "z-20 fixed right-0 top-0 w-full h-screen lg:hidden bg-forestgreen-default ease-in px-6 py-4 duration-500"
                        : "z-20 fixed right-[100%] w-full h-screen top-0 ease-in px-6 py-4 duration-500"
                }
            >
                <nav className="flex flex-col w-full items-start bg-forestgreen text-background">
                    <button onClick={handleNav}>
                        <FiPlus style={exitIconStyle} />
                    </button>
                    <ul className="mt-10 pr-4 text-xl flex flex-col gap-7">
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/" className={`${pathname === "/" ? "font-medium" : ""}`}>
                                Hjem
                            </Link>
                            {pathname === "/" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[115px] left-[85px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/butikker" className={`${pathname === "/butikker" ? "font-medium" : ""} "text-black"`}>
                                Butikker
                            </Link>
                            {pathname === "/butikker" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[171px] left-[112px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/arrangementer" className={`${pathname === "/arrangementer" ? "font-medium" : ""}`}>
                                Arrangementer
                            </Link>
                            {pathname === "/arrangementer" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[228px] left-[175px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/innleveringsstasjoner" className={`${pathname === "/innleveringsstasjoner" ? "font-medium" : ""}`}>
                                Innleveringsstasjoner
                            </Link>
                            {pathname === "/innleveringsstasjoner" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[283px] left-[230px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/ukenshoydepunkt" className={`${pathname === "/ukenshoydepunkt" ? "font-medium" : ""}`}>
                                Ukens høydepunkt
                            </Link>
                            {pathname === "/ukenshoydepunkt" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[339px] left-[208px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/artikler" className={`${pathname === "/artikler" ? "font-medium" : ""}`}>
                                Artikler
                            </Link>
                            {pathname === "/artikler" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[394px] left-[105px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/omoss" className={`${pathname === "/omoss" ? "font-medium" : ""}`}>
                                Om oss
                            </Link>
                            {pathname === "/omoss" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[451px] left-[108px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/blifrivillig" className={`${pathname === "/blifrivillig" ? "font-medium" : ""}`}>
                                Bli frivillig
                            </Link>
                            {pathname === "/blifrivillig" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[507px] left-[125px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        {/* Check if user is logged in */}
                        {session && (
                            <li role="menuitem">
                                <Link onClick={handleNav} href="/CMS/butikkinfo" className={`${pathname === "/CMS/butikkinfo" ? "font-medium" : ""}`}>
                                    Min butikk
                                </Link>
                                {pathname === "/CMS/butikkinfo" && (
                                    <div className="absolute w-2 h-2 bg-ivory-darker top-[562px] left-[133px] rounded-[1.5px] rotate-45"></div>
                                )}
                            </li>
                        )}
                        <li role="menuitem">
                            <Link onClick={handleNav} href="/sok" className="mt-4">
                                <FiSearch style={searchIconStyle} />
                            </Link>
                            {pathname === "/sok" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[616px] left-[67px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}