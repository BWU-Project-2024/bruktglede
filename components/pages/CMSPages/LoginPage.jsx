import { readUserSession } from '@/lib/supabase/actionsAuth';
import { createClient } from '@/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';
import Link from 'next/link';


export const LoginPage = async ({ searchParams }) => {
    const { data: { session } } = await readUserSession();

    // if logged in, redirect to homepage
    if (session) {
        return redirect('/CMS/profil');
    };

    // console.log("Login session", session);

    const signIn = async (formData) => {
        'use server';

        const email = formData.get('email');
        const password = formData.get('password');
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect('/login?message=Feil epost eller passord');
        }

        return redirect('/CMS/profil');
    };

    return (
        <main className="flex flex-col items-center min-h-full">
            <h1 className="font-jomhuria pt-10 pb-4">Bruktglede</h1>
            <p className="text-center">Logg inn på din profil for å opprette og redigere innhold til din butikk.</p>
            <div className="mt-14 w-full md:w-[20rem]">
                <form action={signIn} className="flex flex-col" aria-label="Login form">
                    <label htmlFor="email">Epost</label>
                    <input
                        name="email"
                        placeholder="epost@bruktglede.no"
                        className="py-2 px-2 mb-6 mt-2 border border-inherit rounded"
                        required
                    />
                    <label htmlFor="password">Passord</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••"
                        className="py-2 px-2 mb-3 mt-2 border border-inherit rounded"
                        required
                    />

                    <Link href="/glemtpassord" className="underline italic text-sm text-forestgreen-default mb-10 md:hover:font-medium">Glemt passord?</Link>

                    <button className="w-full md:w-auto bg-forestgreen-default text-background px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200">Login</button>

                    {searchParams?.message && (
                        <p className="mt-4 p-4 text-black bg-blue text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}

export default LoginPage;
