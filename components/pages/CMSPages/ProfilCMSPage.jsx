import { CMSType } from '@/components/CMSComponents/CMSType';
import { readStoreData } from '@/lib/supabase/actions';

export const ProfilCMSPage = async () => {
    readStoreData();

    return (
        <main className='flex flex-col min-h-[90vh] md:w-80 md:border-r md:border-[#DBDBDB]'>
            <CMSType />
        </main>
    )
} 