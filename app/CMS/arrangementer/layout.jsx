import { redirect } from 'next/navigation';
import { readUserSession } from '@/lib/supabase/actionsAuth';
import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabs } from "@/components/CMSComponents/CMSTabs";
import { readStorePostsData } from "@/lib/supabase/actionsAuth";

export default async function Layout({ children }) {

    const data = await readStorePostsData("Arrangement");

    return (
        <>
            {/* desktop layout */}
            <section className="hidden sm:flex">
                <div className="flex min-h-[90vh] flex-col pl-6 sm:pl-0 w-full sm:w-80 sm:border-r sm:border-[#DBDBDB]">
                    <CMSType />
                    <CMSTabs path="arrangementer" type="Nytt arrangement" data={data} />
                </div>
                <div className='hidden md:flex'>
                    {children}
                </div>
            </section>
            {/* mobil layout */}
            <section className="flex sm:hidden w-full">
                {children}
            </section>
        </>
    );
}