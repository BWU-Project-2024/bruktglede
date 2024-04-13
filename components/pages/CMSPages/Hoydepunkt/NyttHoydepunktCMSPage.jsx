"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { HoydepunktForm } from "@/components/CMSComponents/Forms/HoydepunktForm";

export const NyttHoydepunktCMSPage = async () => {
    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Ukens høydepunkter /</p>
                <p className="text-lg font-bold">Nytt ukens høydepunkt</p>
            </div>
            <HoydepunktForm />
        </main>
    )
}