import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabsStoreInfo } from "@/components/CMSComponents/CMSTabsStoreInfo";
import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabaseServer';

export default async function ArtiklerCMSRoute() {

    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/');
    };
    return (
        <div className="sm:hidden flex flex-col min-h-[90vh] w-full">
            <CMSNavbar signOut={signOut} />
            <CMSType />
            <CMSTabsStoreInfo />
        </div>
    );
}