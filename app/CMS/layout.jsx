import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabaseServer';
import { readUserSession } from '@/lib/supabase/actionsAuth';

export default async function Layout({ children }) {

    const { data: { session } } = await readUserSession();

    if (!session) {
        return redirect('/login');
    }

    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/');
    };

    return (
        <>
            {/* desktop layout */}
            <section className="hidden sm:flex sm:flex-row">
                <CMSNavbar signOut={signOut} />
                {children}
            </section>
            {/* mobile desktop */}
            <section className="sm:hidden flex flex-col w-full">
                {children}
            </section>
        </>
    );
}