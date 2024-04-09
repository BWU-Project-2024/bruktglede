import Link from 'next/link';
import { headers } from 'next/headers';
import { readUserSession } from '@/lib/supabase/actions';
import { createClient } from '@/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';

export const RegistrerPage = async ({ searchParams }) => {

    const { data: { session } } = await readUserSession();

    if (session) {
        return redirect('/CMS/profil');
    }

    // Sign up
    const signUp = async (formData) => {
        'use server';

        const origin = headers().get('origin');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        const supabase = createClient();

        if (password !== confirmPassword) {
            return redirect('/signup?message=Passwords do not match');
        }

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
        <main className='flex flex-col min-h-screen'>

            <Link
                href="/"
                className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
            >
                Home
            </Link>

            <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
                <form
                    className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
                    action={signUp}
                >
                    <label className="text-md" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Confirm Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="confirmPassword"
                        placeholder="••••••••"
                        required
                    />
                    <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
                        Sign up
                    </button>

                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>

                <Link
                    href="/CMS/signup"
                    className="rounded-md no-underline text-foreground text-sm"
                >
                    Already have an account? Sign In
                </Link>
            </div>
        </main>
    );
}

export default RegistrerPage;