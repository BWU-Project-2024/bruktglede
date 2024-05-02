"use client"
import React from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'

export const UrlPath = () => {
    const paths = usePathname();
    const pathSegments = paths.split('/').filter(path => path);
    const separator = <span className="px-1">/</span>;

    return (
        <nav aria-label="Breadcrumbar" className="text-sm w-full bg-ivory-lighter py-2 px-7 lg:px-10">
            <ol className="flex">
                <li>
                    <Link href="/" className="text-text hover:underline">
                        Hjem
                    </Link>
                </li>
                <span className="px-1">/</span>
                {
                    pathSegments.map((link, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const itemLink = link[0].toUpperCase() + link.slice(1);
                        return (
                            <React.Fragment key={index}>
                                <li className="text-text hover:underline">
                                    <Link href={href}>{itemLink}</Link>
                                </li>
                                {index !== pathSegments.length - 1 && separator}
                            </React.Fragment>
                        );
                    })
                }
            </ol>
        </nav >
    )
}