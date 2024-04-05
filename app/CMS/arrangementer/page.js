import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabs } from "@/components/CMSComponents/CMSTabs";
import { readStoreArticlesData } from "@/lib/supabase/actions";
import { TestPage } from "@/components/pages/CMSPages/Test";

export default async function ArrangementerCMSRoute() {
    // const data = await readStoreArticlesData("Arrangement")
    return (
        <>
            <TestPage />
        </>
    );
}
