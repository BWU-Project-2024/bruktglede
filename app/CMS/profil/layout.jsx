import { redirect } from 'next/navigation';
import { readUserSession } from '@/lib/supabase/actions';
import { CMSType } from "@/components/CMSComponents/CMSType";

export default async function Layout({ children }) {

    const { data: { user } } = await readUserSession();

    if (!user) {
        return redirect('/login');
    }

    return (
        <>
            {/* desktop layout */}
            <section className="hidden sm:flex">
                <div className="flex min-h-[90vh] flex-col pl-6 sm:pl-0 w-full sm:w-80 sm:border-r sm:border-[#DBDBDB]">
                    <CMSType />
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