import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="text-center w-full py-4 bg-forestgreen-default m-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">

                        <span className="self-center text-5xl font-jomhuria whitespace-nowrap text-ivory-default tracking-wide px-6 md:px-20 g:px-40">Bruktglede</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-ivory-default sm:mb-0 px-6 md:px-20">
                        <li>
                            <Link href="/omoss" className="hover:underline me-4 md:me-6">Om oss</Link>
                        </li>

                        <li>
                            <Link href="/login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 opacity-60" />
                <span className="block text-sm text-ivory-default sm:text-center">Nettsiden er utviklet av Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje som del av deres Bacheloroppgave i Webutvikling ved NTNU.</span>
            </div>
        </footer>
    );
};