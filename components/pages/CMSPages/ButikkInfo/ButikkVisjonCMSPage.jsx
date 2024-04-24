import { ButikkVisjonForm } from "@/components/CMSComponents/Forms/ButikkVisjonForm"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn"
import { readAccountDataId } from "@/lib/supabase/actionsAuth";

export const ButikkVisjonCMSPage = async () => {
    const postData = await readAccountDataId()

    return (
        <main className="flex flex-col min-h-[90vh] w-full sm:max-w-full gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Butikk informasjon /</p>
                <h1 className="text-lg font-bold">Butikkens visjon</h1>
            </div>
            <ButikkVisjonForm
                existingData={postData ? postData.storeVisionData[0] : null}
            />
        </main>
    )
}