"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStoreStationsDataId } from "@/lib/supabase/actionsAuth";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { StationForm } from "@/components/CMSComponents/Forms/StationForm";
import { deleteStation } from "@/lib/supabase/actionsCMSForms";
import { redirect } from 'next/navigation';

export const StasjonerIdCMSPage = async ({ params }) => {

    const stationData = await readStoreStationsDataId(params);

    const tagOptions = await readAllTags();

    const handleDelete = async () => {
        "use server"

        await deleteStation(params)
        redirect("/CMS/innleveringsstasjoner")
    }

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Innleveringsstasjoner /</p>
                <h1 className="text-lg font-bold">{stationData && stationData.stationIdData[0]?.title}</h1>
            </div>
            <StationForm
                tagOptions={tagOptions}
                existingStation={stationData ? stationData.stationIdData[0] : null}
                existingTags={stationData ? stationData.stationTagsData : null}
            />
            <form action={handleDelete}>
                <button className="w-full bg-error-default hover:bg-error-darker py-2 rounded font-medium">Slett innleveringsstasjon</button>
            </form>
        </main>
    )
}