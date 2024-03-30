import { createClient } from '@/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';

// Logout
export async function Logout(session, signOut) {
    const supabase = createClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const signOut = async () => {
        'use server';

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect('/login');
    };

}
