import { readUserSession } from '@/lib/supabase/actions';
import { createClient } from '@/lib/supabase/supabaseServer';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const LoginPage = async ({ searchParams }) => {

    const { data: { session } } = await readUserSession();

    if (session) {
        return redirect('/');
    };

    console.log(session);

    if (session) {
        return redirect('/');
    }

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
            return redirect('/login?message=Could not authenticate user');
        }

        return redirect('/');
    };

    return (
        <main className="flex flex-col items-center min-h-full">
            <h1 className="font-jomhuria pt-10 pb-4">Bruktglede</h1>
            <p className="text-center">Logg inn på din profil for å opprette og redigere innhold til din butikk.</p>
            <div className='mt-16 w-full'>
                <form action={signIn} className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <button>Sign In</button>

                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}

export default LoginPage;
