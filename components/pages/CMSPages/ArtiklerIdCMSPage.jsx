"use server"
import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStorePostsDataId, readAllTags } from "@/lib/supabase/actions";
import { createClient } from "@/lib/supabase/supabaseServer";
import { data } from "autoprefixer";

export const ArtiklerIdCMSPage = async ({ params }) => {

    const postIdData = await readStorePostsDataId(params);
    // const data = postIdData[0]

    const tagOptions = await readAllTags();

    // Submit form functionality
    const newArticle = async (formData) => {
        'use server';

        //* Retrieve the data input from the form (funker)
        const tittel = formData.get('tittel');
        const ingress = formData.get('ingress');
        const brodtekst = formData.get('brodtekst');
        const headerbilde = formData.get('fileInput');
        const selectedTags = Array.from(formData.getAll('tagger'));

        const supabase = createClient();

        //* Find the logged in user's store_id (funker)
        const user = await supabase.auth.getUser()
        const { data: accountData, error: accountError } = await supabase
            .from('Account')
            .select('store_id')
            .eq('id', user.data.user.id)

        if (accountError) {
            throw new Error(data.message);
        }

        //* Find the 'PostType' id that matches the type 'Artikkel' (funker)
        const { data: postTypeData, error: postTypeError } = await supabase
            .from('PostType')
            .select('id')
            .eq('name', "Artikkel");

        if (postTypeError) {
            throw new Error(postTypeError.message);
        }

        //* Insert data into the 'Post' table
        const storeId = accountData[0].store_id;
        const postTypeId = postTypeData[0].id;
        const { data: postData, error: postDataError } = await supabase
            .from("Post")
            .insert({
                title: tittel,
                ingress: ingress,
                bodyText: brodtekst,
                img: headerbilde,
                postType_id: postTypeId,
                store_id: storeId,
            })
            .select('id');

        if (postDataError) {
            throw new Error(postDataError.message);
        }

        //* Insert data into the 'Post_Tags' table for each selected tag (if the are)
        if (selectedTags.length > 0) {
            await Promise.all(selectedTags.map(async (tagId) => {
                await supabase.from('Post_Tags').insert({
                    tag_id: tagId,
                    post_id: postData[0].id
                });
            }));
        }
    };

    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-6 mt-6 mb-16 sm:mb-8 sm:mt-2">
            <CMSTilbakeBtn />
            <div className="flex flex-col mt-2">
                <p>Artikler /</p>
                {postIdData != null ? (
                    <h1 className="text-lg font-bold">{postIdData[0].title}</h1>
                ) : (
                    <h1 className="text-lg font-bold">Ny artikkel</h1>
                )}
            </div>
            {/* Server action form */}
            <form action={newArticle} className="flex flex-col" aria-label="CMS form" encType="multipart/form-data">
                <label className="text-md mb-2" htmlFor="tittel">
                    Tittel
                </label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    id="tittel"
                    name="tittel"
                    placeholder=""

                />
                <label className="text-md mb-2" htmlFor="ingress">
                    Ingress
                </label>
                <textarea
                    className="rounded-md min-h-20 px-4 py-2 bg-inherit border border-[#DBDBDB] mb-6"
                    id="ingress"
                    name="ingress"
                    placeholder=""
                    rows="2"

                />
                <label className="text-md mb-2" htmlFor="brodtekst">
                    Brødtekst
                </label>
                <textarea
                    className="rounded-md min-h-32 px-4 py-2 bg-inherit border border-[#DBDBDB] mb-6"
                    id="brodtekst"
                    name="brodtekst"
                    placeholder=""
                    rows="3"

                />
                <label className="text-md mb-3" htmlFor="tagger">
                    Tagger
                </label>
                <div className="flex flex-wrap gap-3 mb-6 ">
                    {tagOptions.map((tag) => (
                        <div key={tag.id} className="flex justify-center items-center gap-2 bg-[#F5F5F5] rounded py-1 px-2">
                            <input
                                type="checkbox"
                                id={tag.id}
                                name="tagger"
                                value={tag.id}
                                className="rounded-sm border border-[#D9D9D9]"
                            />
                            <label htmlFor={tag.id}>{tag.name}</label>
                        </div>
                    ))}
                </div>
                <label className="text-md mb-3 mt-3" htmlFor="fileInput">
                    Header bilde
                </label>
                <input
                    type="file"
                    name="fileInput"
                    id="fileInput"
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/*"
                    // må finne ut hvordan style file button (tailwind sier å bruke form: forran men funker ikke)
                    className="mb-4 rounded bg-[#F5F5F5] file:bg-[#F5F5F5] file:text-base">
                </input>
                <div>
                    <p className="italic">Ingen filer er valg for opplasting.</p>
                </div>
                {/* <img src={image} alt="Bilde" /> */}
                <button className="w-full bg-success-lighter hover:bg-success-default py-2 rounded mt-12 font-medium">Lagre endringer</button>
            </form>
        </main>
    )
}