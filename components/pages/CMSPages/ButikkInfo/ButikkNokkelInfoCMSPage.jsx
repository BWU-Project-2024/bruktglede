import { ButikkInfoForm } from "@/components/CMSComponents/Forms/ButikkInfoForm"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn"
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { readAccountDataId } from "@/lib/supabase/actionsAuth";

export const ButikkNokkelInfoCMSPage = async () => {
    const tagOptions = await readAllTags();
    const postData = await readAccountDataId()

    return (
        <main className="flex flex-col min-h-[90vh] w-full sm:max-w-[60%] gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Butikk informasjon /</p>
                <h1 className="text-lg font-bold">Nøkkel informasjon</h1>
            </div>
            <ButikkInfoForm
                tagOptions={tagOptions}
                existingData={postData ? postData.storeIdData[0] : null}
                existingTags={postData ? postData.storeTagsData : null}
            />
        </main>
    )
}