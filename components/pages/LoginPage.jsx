import { createClient } from '@/lib/supabase/supabaseServer';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function LoginPage({ searchParams }) {

    const supabase = createClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

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
        <div>
            <Link href="/">Home</Link>

            <div>
                <form action={signIn}>
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
        </div>
    );
}
