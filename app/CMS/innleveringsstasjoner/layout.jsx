import { redirect } from 'next/navigation';
import { readStoreStationsData, readUserSession } from '@/lib/supabase/actions';
import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabs } from "@/components/CMSComponents/CMSTabs";

export default async function Layout({ children }) {

    const { data: { user } } = await readUserSession();

    if (!user) {
        return redirect('/login');
    }

    const data = await readStoreStationsData();

    return (
        <>
            {/* desktop layout */}
            <section className="hidden sm:flex">
                <div className="flex min-h-[90vh] flex-col pl-6 sm:pl-0 w-full sm:w-80 sm:border-r sm:border-[#DBDBDB]">
                    <CMSType />
                    <CMSTabs path="innleveringsstasjoner" type="Ny innleveringsstasjon" data={data} />
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