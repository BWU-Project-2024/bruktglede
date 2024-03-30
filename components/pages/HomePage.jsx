import { createClient } from '@/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';

export const HomePage = async () => {
    //Sign out functionalities
    const supabase = createClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const signOut = async () => {
        'use server';

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect('/');
    };


    return (
        session && (
            <div>
                Hey, {session.user.email}!
                <form action={signOut}>
                    <button>
                        Logout
                    </button>
                </form>
            </div>
        )
    )
}