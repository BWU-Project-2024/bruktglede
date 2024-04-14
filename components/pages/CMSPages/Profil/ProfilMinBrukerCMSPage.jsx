import { MinBrukerInfo } from "@/components/CMSComponents/MinBrukerInfo";
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";

export const ProfilMinBrukerCMSPage = async () => {

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Profil /</p>
                <h1 className="text-lg font-bold">Min bruker</h1>
            </div>
            <p className="mb-6">Her finner du en overordnet oversikt over din profil.</p>
            <MinBrukerInfo />
        </main>
    )
} 