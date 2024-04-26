import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";
import { CMSTabsProfile } from "@/components/CMSComponents/CMSTabsProfile";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabaseServer';

export default async function ArtiklerCMSRoute() {

    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/login');
    };
    return (
        <div className="sm:hidden flex flex-col min-h-[90vh] w-full">
            <CMSNavbar signOut={signOut} />
            <CMSType />
           <CMSTabsProfile />
        </div>
    );
}