"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readAllTags } from "@/lib/supabase/actionsPublic";
import { ArticleForm } from "@/components/CMSComponents/ArticleForm";

export const NyArtikkelCMSPage = async () => {

    const tagOptions = await readAllTags();


    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Artikler /</p>
                <h1 className="text-lg font-bold">Ny artikkel</h1>
            </div>
            <ArticleForm tagOptions={tagOptions} />

        </main>
    )
}