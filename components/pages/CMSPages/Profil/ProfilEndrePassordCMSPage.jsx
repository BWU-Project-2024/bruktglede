import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { EndrePassordForm } from "@/components/CMSComponents/Forms/EndrePassordForm";

export const ProfilEndrePassordCMSPage = async () => {
    return (
        <main className="flex flex-col min-h-[90vh] w-full sm:w-[60%] gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Profil /</p>
                <h1 className="text-lg font-bold">Endre passord</h1>
            </div>
            <p className="mb-6">Ønsker du å endre passordet? Det kan gjøres ved å skrive inn et nytt ønskende passord i skjemaet under.</p>
            <EndrePassordForm />
        </main>
    )
} 