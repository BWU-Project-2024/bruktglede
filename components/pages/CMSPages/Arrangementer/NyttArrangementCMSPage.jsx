"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { EventForm } from "@/components/CMSComponents/Forms/EventForm";

export const NyttArrangementCMSPage = async () => {

    const tagOptions = await readAllTags();


    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Arrangementer /</p>
                <p className="text-lg font-bold">Nytt arrangement</p>
            </div>
            <EventForm tagOptions={tagOptions} />
        </main>
    )
}