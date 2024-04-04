import { redirect } from 'next/navigation';
import { readUserSession } from '@/lib/supabase/actions';
import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabs } from "@/components/CMSComponents/CMSTabs";
import { readStoreArticlesData } from "@/lib/supabase/actions";

export default async function Layout({ children }) {

    const { data: { user } } = await readUserSession();

    if (!user) {
        return redirect('/login');
    }

    const data = await readStoreArticlesData("Arrangement");

    return (
        <section className="flex">
            <div className="flex min-h-[90vh] flex-col pl-6 sm:pl-0 w-full sm:w-80 sm:border-r sm:border-[#DBDBDB]">
                <CMSType />
                <CMSTabs path="arrangementer" type="Nytt arrangement" data={data} />
            </div>
            <div>
                {children}
            </div>
        </section>
    );
}