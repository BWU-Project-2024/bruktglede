import Link from "next/link";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import test from "@/public/test.jpg"

export const AlleButikkerCardLong = () => {
    return (
        <div className="flex w-full">
            <Image
                src={test}
                height={200}
                width={500}
                alt="Butikk bilde"
            />
            <div className="flex flex-col justify-center items-center gap-4  w-[500px]">
                <h3 className="text-lg md:text-xl">Fretex</h3>
                <div className="flex gap-2 justify-center items-center">
                    <FiMapPin />
                    <p>Adressevegen 20, 2816 Gjøvik</p>
                </div>
                <Link href="/">Til butikksiden</Link>
            </div>
        </div>
    )
}