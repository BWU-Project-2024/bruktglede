import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabaseServer';
import { readUserSession } from '@/lib/supabase/actions';

export default async function Layout({ children }) {

    const { data: { user } } = await readUserSession();

    // console.log(user);

    if (!user) {
        return redirect('/login');
    }

    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/');
    };

    return (
        <section className="flex flex-col sm:flex-row">
            <CMSNavbar signOut={signOut} />
            {children}
        </section>
    );
}