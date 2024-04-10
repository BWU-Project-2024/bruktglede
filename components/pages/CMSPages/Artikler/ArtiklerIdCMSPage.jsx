"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStorePostsDataId } from "@/lib/supabase/actionsAuth";
import { deletePost } from "@/lib/supabase/actionsCMSForms";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { ArticleForm } from "@/components/CMSComponents/Forms/ArticleForm";
import { redirect } from 'next/navigation';


export const ArtiklerIdCMSPage = async ({ params }) => {

    const postData = await readStorePostsDataId(params);
    const tagOptions = await readAllTags();

    const handleDelete = async () => {
        "use server"

        await deletePost(params)
        redirect("/CMS/artikler")
    }

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-3 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col my-2">
                <p>Artikler /</p>
                <h1 className="text-lg font-bold">{postData && postData.postIdData[0]?.title}</h1>
            </div>
            <ArticleForm
                tagOptions={tagOptions}
                existingArticle={postData ? postData.postIdData[0] : null}
                existingTags={postData ? postData.postTagsData : null}
            />
            <form action={handleDelete}>
                <button className="w-full bg-error-default hover:bg-error-darker py-2 rounded font-medium">Slett artikkel</button>
            </form>
        </main>
    )
}