import { createClient } from '@/lib/supabase/supabaseServer';
import { readUserSession } from '@/lib/supabase/actions';
import { redirect } from 'next/navigation';
import { CMSType } from '@/components/CMSComponents/CMSType';

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
            <main className='flex flex-col min-h-screen md:w-80 md:border-r md:border-[#DBDBDB]'>
                <CMSType />
                Hey, {session.user.email}!
                <form action={signOut}>
                    <button>
                        Logout
                    </button>
                </form>
            </main>
        )
    )
} 