"use client"
import { useRouter } from "next/navigation"
import { FiChevronLeft } from "react-icons/fi";

export const CMSTilbakeBtn = async () => {
    const router = useRouter()

    return (
        <main className="flex flex-col min-h-[90vh] my-6 gap-8">
            <button
                type="button"
                onClick={() => router.back()}
                className="sm:hidden flex items-center justify-center bg-ivory-darker text-forestgreen-darker hover:bg-forestgreen-default hover:text-ivory-default px-6 rounded py-1 font-medium drop-shadow transition duration-200 gap-2"
            >
                <FiChevronLeft /> Tilbake
            </button>
            <p>Her kommer et form</p>
        </main>
    )
}