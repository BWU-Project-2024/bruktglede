import { createClient } from '@/lib/supabase/supabaseServer';
import { readUserSession } from '@/lib/supabase/actions';
import { redirect } from 'next/navigation';

export const ProfilCMSPage = async () => {
    //Sign out functionalities
    const { data: { session } } = await readUserSession();

    if (!session) {
        return redirect('/CMS/login');
    }

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