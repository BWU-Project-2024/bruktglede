import Link from 'next/link';

export const NavbarItem = ({ href, pathname, children }) => (
    <li role="menuitem" className="relative">
        <Link href={href} className={`${pathname === href ? "font-medium" : "hover:font-medium"}`}>
            {children}
        </Link>
        {pathname === href && (
            <div className="absolute w-2 h-2 bg-forestgreen-default rounded-[1.5px] top-8 rotate-45 left-1/2 transform -translate-x-1/2"></div>
        )}
    </li>
);

