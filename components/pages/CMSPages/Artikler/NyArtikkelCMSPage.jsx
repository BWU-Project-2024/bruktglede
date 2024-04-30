"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { ArticleForm } from "@/components/CMSComponents/Forms/ArticleForm";

export const NyArtikkelCMSPage = async () => {

    const tagOptions = await readAllTags();


    return (
        <main className="flex flex-col min-h-[90vh] w-full md:w-[70%] gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2 px-6">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Artikler /</p>
                <p className="text-lg font-bold">Ny artikkel</p>
            </div>
            <ArticleForm tagOptions={tagOptions} />
        </main>
    )
}