"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStorePostsDataId } from "@/lib/supabase/actionsAuth";
import { deletePost } from "@/lib/supabase/actionsCMSForms";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { EventForm } from "@/components/CMSComponents/Forms/EventForm";
import { redirect } from 'next/navigation';

export const ArrangementerIdCMSPage = async ({ params }) => {

    const postData = await readStorePostsDataId(params);

    const tagOptions = await readAllTags();

    const handleDelete = async () => {
        "use server"
        const confirms = confirm("Er du sikker på at du vil slette arrangement?");
        if (confirms) {
            await deletePost(params)
            redirect("/CMS/arrangementer")

        }
    }

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Arrangementer /</p>
                <h1 className="text-lg font-bold">{postData && postData.postIdData[0]?.title}</h1>
            </div>
            <EventForm
                tagOptions={tagOptions}
                existingEvent={postData ? postData.postIdData[0] : null}
                existingTags={postData ? postData.postTagsData : null}
            />
            <form action={handleDelete}>
                <button className="w-full bg-error-default hover:bg-error-darker py-2 rounded font-medium">Slett arrangement</button>
            </form>
        </main>
    )
}