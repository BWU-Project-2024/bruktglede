"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BruktgledeLogoDesktop from "@/public/bruktglede-logo-desktop.svg"
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "flowbite-react";
import { usePathname } from 'next/navigation'

export const Navbar = ({ session }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname()


    const handleNav = () => {
        setMenuOpen((menuOpen) => !menuOpen);
    };

    const searchIconStyle = { fontSize: "1.3em" }

    return (
        <div className="w-full bg-ivory-default">

            {/* nav desktop */}
            <nav className="hidden lg:flex w-full flex justify-between items-center bg-purple-dark text-purple-light px-10 py-3" role="navigation" aria-label="Bruktbyen navigasjon">
                <Link href="/" className="flex justify-center items-center gap-3 pointer">
                    <Image
                        priority
                        src={BruktgledeLogoDesktop}
                        alt="bruktglede logo desktop"
                        height={30}
                        width={30}
                    >
                    </Image>
                    <p className="font-jomhuria text-forestgreen-default text-4xl pt-1">Bruktglede</p>
                </Link>

                <ul className="flex flex-row items-center justify-center gap-6">
                    <li role="menuitem">
                        <Link href="/" className={`pr-2 ${pathname === "/" ? "font-medium" : "hover:text-medium"}`}>
                            Hjem
                        </Link>
                        {pathname === "/" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-4 rounded-[1.5px] rotate-45"></div>
                        )}
                    </li>
                    <li className="text-text" role="menuitem">
                        {/* Flowbite-React dropdown comp: https://flowbite-react.com/docs/components/dropdown */}
                        <Dropdown className={`font-thin rounded bg-ivory-lighter border-[#D9E5D3] text-text ${pathname === "/butikker" ? "font-medium" : "hover:font-medium"}`} label="Butikker" placement="bottom" dismissOnClick={true} size="base">
                            <Dropdown.Item className="hover:bg-background rounded font-normal" as={Link} href="/butikker">Alle butikker</Dropdown.Item>
                            <hr className="solid"></hr>
                            <Dropdown.Item className="hover:bg-background rounded font-normal">Fretex</Dropdown.Item>
                            <Dropdown.Item className="hover:bg-background rounded font-normal">Earnings</Dropdown.Item>
                            <Dropdown.Item className="hover:bg-background rounded font-normal">Sign out</Dropdown.Item>
                            <hr className="solid"></hr>
                            <Dropdown.Item className="hover:bg-background rounded font-normal" as={Link} href="/frivillig">Bli frivillig</Dropdown.Item>
                        </Dropdown>
                        {pathname === "/butikker" && (
                            <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-8 rounded-[1.5px] rotate-45 opacity-0 group-hover:opacity-100"></div>
                        )}
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
                            Ukens høydepunkter
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
                    {session && (
                        <li role="menuitem">
                            <Link href="/CMS/profil" className={`${pathname === "/CMS/profil" ? "font-medium" : "hover:font-medium"}`}>
                                Min butikk
                            </Link>
                            {pathname === "/CMS/profil" && (
                                <div className="absolute w-2 h-2 bg-forestgreen-default top-14 ml-8 rounded-[1.5px] rotate-45"></div>
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

            {/* nav mobile */}
            {/* menu bar closed */}
            <div className="lg:hidden w-full flex items-center items-center px-6 pt-6">
                <button onClick={handleNav}>menu</button>
            </div>
            {/* menu bar open */}
            <div
                className={
                    menuOpen
                        ? "z-10 fixed right-0 top-0 w-full h-screen lg:hidden bg-forestgreen-default ease-in px-6 py-4 duration-500"
                        : "z-10 fixed right-[100%] w-full h-screen top-0 ease-in px-6 py-4 duration-500"
                }
            >
                <nav className="flex flex-col w-full items-start bg-forestgreen text-background">
                    <button onClick={handleNav}>
                        close
                    </button>
                    <ul className="mt-16 pr-4 text-lg flex flex-col gap-5">
                        <li role="menuitem">
                            <Link href="/" className="mb-4">
                                Hjem
                            </Link>
                            {pathname === "/" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[115px] left-[80px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/butikker" className="mb-8">
                                Butikker
                            </Link>
                            {pathname === "/butikker" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[163px] left-[105px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/arrangementer" className="mb-8">
                                Arrangementer
                            </Link>
                            {pathname === "/arrangementer" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[211px] left-[160px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/innleveringsstasjoner" className="mb-8">
                                Innleveringsstasjoner
                            </Link>
                            {pathname === "/innleveringsstasjoner" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[259px] left-[210px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/ukenshoydepunkt" className="mb-8">
                                Ukens høydepunkter
                            </Link>
                            {pathname === "/ukenshoydepunkt" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[307px] left-[206px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/artikler" className="mb-8">
                                Artikler
                            </Link>
                            {pathname === "/artikler" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[354px] left-[96px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/omoss" className="mb-8">
                                Om oss
                            </Link>
                            {pathname === "/omoss" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[402px] left-[100px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        <li role="menuitem">
                            <Link href="/blifrivillig" className="mb-8">
                                Bli frivillig
                            </Link>
                            {pathname === "/blifrivillig" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[450px] left-[115px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                        {session && (
                            <li role="menuitem">
                                <Link className="" href="/CMS/profil">
                                    Min butikk
                                </Link>
                                {pathname === "/CMS/profil" && (
                                    <div className="absolute w-2 h-2 bg-ivory-darker top-[498px] left-[122px] rounded-[1.5px] rotate-45"></div>
                                )}

                            </li>
                        )}
                        <li role="menuitem">
                            <Link href="/sok">
                                <FiSearch style={searchIconStyle} />
                            </Link>
                            {pathname === "/sok" && (
                                <div className="absolute w-2 h-2 bg-ivory-darker top-[543px] left-[63px] rounded-[1.5px] rotate-45"></div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}