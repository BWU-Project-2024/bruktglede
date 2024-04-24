import { GlemtPassordForm } from "@/components/CMSComponents/Forms/GlemtPassordForm"
export const GlemtPassordPage = () => {
    return (
        <div className="flex flex-col min-h-[90vh] w-full items-center">
            <div className="w-[90%] md:w-[30%] mt-20">
                <h1 className="text-xl mb-4">Jeg har glemt passord</h1>
                <p className="mb-8">Her har du mulighet til å endre passord etter du har fått ny bruker eller om du har glemt passord.</p>
                <GlemtPassordForm />
            </div>
        </div>
    )
}