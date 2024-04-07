import { CMSTilbakeBtn } from "@/components/CMSComponents/CMSTilbakeBtn";
import { readStorePostsDataId } from "@/lib/supabase/actions";


export const ArtiklerIdCMSPage = async ({ params }) => {

    const postIdData = await readStorePostsDataId(params);
    const data = postIdData[0]

    // Sign up
    const newArticle = async (formData) => {
        'use server';

        const origin = headers().get('origin');
        const email = formData.get('email');
        const password = formData.get('password');

        const supabase = createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            console.log(error);
            return redirect('/signup?message=Could not authenticate user');
        }

        return redirect(
            '/'
        );
    };
    return (
        <main className="flex flex-col min-h-[90vh] w-full gap-8 my-6 sm:my-2">
            <CMSTilbakeBtn />
            <div className="flex flex-col">
                <p>Artikler /</p>
                <h1 className="text-lg font-bold">{data.title}</h1>
            </div>

            <form action={newArticle} className="flex flex-col" aria-label="CMS form">
                <label className="text-md mb-2" htmlFor="tittel">
                    Tittel
                </label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    name="tittel"
                    placeholder=""
                    required
                />
                <label className="text-md mb-2" htmlFor="brødtekst">
                    Brødtekst
                </label>
                <textarea
                    className="rounded-md min-h-20 px-4 py-2 bg-inherit border border-[#DBDBDB] mb-6"
                    name="brødtekst"
                    placeholder=""
                    rows="2"
                    required
                />
                <label className="text-md mb-2" htmlFor="hovedtekst">
                    Hoved tekst
                </label>
                <textarea
                    className="rounded-md min-h-32 px-4 py-2 bg-inherit border border-[#DBDBDB] mb-6"
                    name="hovedtekst"
                    placeholder=""
                    rows="3"
                    required
                />
                <label className="text-md mb-2" htmlFor="tagger">
                    Tagger
                </label>
                <select name="tagger">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <label className="text-md mb-2" htmlFor="bilde">
                    Header bilde
                </label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    name="bilde"
                    placeholder=""
                    required
                />
            </form>
        </main>
    )
}