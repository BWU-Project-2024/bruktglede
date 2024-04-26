import Link from 'next/link';

export const NavItemMobile = ({ handleNav, href, pathname, children }) => (
    <li role="menuitem" className="flex gap-4 items-center">
        <Link onClick={handleNav} href={href} className={`${pathname === href ? "font-medium" : ""}`}>
            {children}
        </Link>
        {pathname === href && (
            <div className="z-30 w-2 h-2 bg-ivory-darker rounded-[1.5px] rotate-45"></div>
        )}
    </li>
);
