// import LoginForm from "../auth/LoginForm"
import { createClient } from "@/lib/supabase/supabaseServer"
import { redirect } from 'next/navigation';
// import { useRouter } from "next/navigation"
// import { useState, useEffect } from "react"

export const LoginPage = async ({ searchParams }) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const router = useRouter();
    // const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    // connect loginpage to supabase
    const supabase = createClient();

    // useEffect(() => {
    //     async function getUser() {
    //         const { data: { user } } = await supabase.auth.getUser()
    //         setUser(user)
    //         setLoading(false)
    //     }
    //     getUser();
    // }, [])

    const {
        data: { session },
    } = await supabase.auth.getSession();

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

    // const handleSignUp = async () => {
    //     const res = await supabase.auth.signUp({
    //         email,
    //         password,
    //         options: {
    //             emailRedirectTo: `${location.origin}/auth/callback`
    //         }
    //     })
    //     setUser(res.data.user)
    //     router.refresh();
    //     setEmail('');
    //     setPassword('');
    // }

    // const handleSignIn = async () => {
    //     const res = await supabase.auth.signInWithPassword({
    //         email,
    //         password
    //     })
    //     setUser(res.data.user);
    //     router.refresh();
    //     setEmail('');
    //     setPassword('');
    // }

    // const handleLogOut = async () => {
    //     await supabase.auth.signOut();
    //     router.refresh();
    //     setUser(null);
    // }

    // console.log({ loading, user });

    // if (loading) {
    //     return <p>..loading</p>
    // }

    // if (user) {
    //     return (
    //         <>
    //             <h1>Logout</h1>
    //             <button onClick={handleLogOut}>Logout</button>
    //         </>
    //     )
    // }

    return (
        <main>
            <h1 className="">
                Login page
            </h1>
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
                <button>
                    Sign In
                </button>
                {searchParams?.message && (
                    <p>
                        {searchParams.message}
                    </p>
                )}
            </form>
            {/* <LoginForm /> */}
        </main>
    )
}