"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BruktgledeLogo from "@/public/bruktglede-logo.svg"
import { usePathname } from 'next/navigation'
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { readUserSession } from "@/lib/supabase/actionsAuth";
import { NavbarItem } from "./NavbarItem"
import { NavbarLoggedInItem } from "./NavbarLoggedInItem";
import { NavItemMobile } from "./NavItemMobile";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [session, setSession] = useState(null)
    const [userRole, setUserRole] = useState(null)
    const pathname = usePathname();

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const data = await readUserSession();
                if (data) {
                    setSession(data.sessions.access_token);
                    setUserRole(data.roleData[0].role);
                }

                console.log(data.roleData[0].role);
            } catch (error) {
                console.error('Error fetching user session:', error);
            }
        };

        fetchSession();
    }, [session]);

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
                    <NavbarItem href="/" pathname={pathname} top="14" left="4">Hjem</NavbarItem>

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

                    <NavbarItem href="/arrangementer" pathname={pathname} >Arrangementer</NavbarItem>
                    <NavbarItem href="/innleveringsstasjoner" pathname={pathname} >Innleveringsstasjoner</NavbarItem>
                    <NavbarItem href="/ukenshoydepunkt" pathname={pathname} >Ukens høydepunkt</NavbarItem>
                    <NavbarItem href="/artikler" pathname={pathname}>Artikler</NavbarItem>
                    <NavbarItem href="/omoss" pathname={pathname}>Om oss</NavbarItem>
                    {/* Check if user is logged in and what role */}
                    {session && userRole === "superuser" && (
                        <NavbarLoggedInItem href="/CMS/butikkinfo" pathname={pathname}>Min butikk</NavbarLoggedInItem>
                    )}
                    {session && userRole === "admin" && (
                        <NavbarLoggedInItem href="/CMS/admin" pathname={pathname}>Admin</NavbarLoggedInItem>
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
                    <ul className="z-30 mt-10 pr-4 text-xl flex flex-col gap-7">
                        <NavItemMobile href="/" handleNav={handleNav} pathname={pathname}>Hjem</NavItemMobile>
                        <NavItemMobile href="/butikker" handleNav={handleNav} pathname={pathname}>Butikker</NavItemMobile>
                        <NavItemMobile href="/arrangementer" handleNav={handleNav} pathname={pathname}>Arrangementer</NavItemMobile>
                        <NavItemMobile href="/innleveringsstasjoner" handleNav={handleNav} pathname={pathname}>Innleveringsstasjoner</NavItemMobile>
                        <NavItemMobile href="/ukenshoydepunkt" handleNav={handleNav} pathname={pathname}>Ukens høydepunkt</NavItemMobile>
                        <NavItemMobile href="/artikler" handleNav={handleNav} pathname={pathname}>Artikler</NavItemMobile>
                        <NavItemMobile href="/omoss" handleNav={handleNav} pathname={pathname}>Om oss</NavItemMobile>
                        <NavItemMobile href="/blifrivillig" handleNav={handleNav} pathname={pathname}>Bli frivillig</NavItemMobile>

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
                        <NavItemMobile href="/sok" handleNav={handleNav} pathname={pathname}><FiSearch style={searchIconStyle} /></NavItemMobile>
                    </ul>
                </nav>
            </div>

        </div>
    );
}