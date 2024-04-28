"use client"
import Image from "next/image";
import { SearchBar } from "./SearchBar";
import LandingImage from "@/public/LandingImage.svg"
import { useRouter } from 'next/navigation';

export const LandingHeader = () => {
    const router = useRouter();

    const handleSearch = async () => {
        router.push("/sok")
    };

    return (
        <header className="bg-ivory-default h-fit pb-2 overflow-hidden">
            <h1 className="font-opensans text-forestgreen-default text-3xl lg:text-5xl pt-6 lg:pt-30 p-2 px-6 lg:px-40 lg:pt-20">Velkommen til <span className="font-jomhuria text-7xl lg:text-8xl">Bruktglede</span></h1>
            <div className="lg:hidden md:hidden px-6">
                <Image
                    src={LandingImage}
                    alt="Header illustration"
                    className="text-center"
                    width={500}
                    height={500}
                >
                </Image>
            </div>

            <div className="flex flex-col max-w-md md:max-w-none md:flex-row md:items-center md:justify-between lg:px-40">
                <div className="flex flex-col justify-center md:w-1/2">
                    <p className="font-opensans py-6 px-6 text-base overflow-hidden md:text-lg lg:px-0 lg:mb-4">Har du lyst til å se utvalget Gjøvik har å by på når det kommer til gjenbruk? Begynn å utforsk mulighetene!</p>
                    <h2 className="px-6 font-opensans text-base font-semibold lg:px-0 pb-4">Start eventyret med et enkelt søk</h2>
                    <div className="ml-6 lg:ml-0 w-[80%] md:w-[90%]">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                </div>
                <div className="hidden md:block lg:block">
                    <Image
                        src={LandingImage}
                        alt="Header illustration"
                        className="pb-12"
                        width={550}
                        height={550}
                    >
                    </Image>
                </div>
            </div>
        </header >
    );
};