"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStorePostsDataId, readAllTags } from "@/lib/supabase/actions";
import { ArticleForm } from "@/components/CMSComponents/ArticleForm";

export const ArtiklerIdCMSPage = async ({ params }) => {

    const postData = await readStorePostsDataId(params);
    console.log(postData)

    const tagOptions = await readAllTags();

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Artikler /</p>
                <h1 className="text-lg font-bold">{postData && postData.postIdData[0]?.title}</h1>
            </div>
            <ArticleForm tagOptions={tagOptions} existingArticle={postData ? postData.postIdData[0] : null} existingTags={postData ? postData.postTagsData : null} />
        </main>
    )
}