import { CMSType } from "@/components/CMSComponents/CMSType";
import { CMSTabs } from "@/components/CMSComponents/CMSTabs";
import { readStoreArticlesData } from "@/lib/supabase/actions";

export default async function ArtiklerCMSRoute() {
    const data = await readStoreArticlesData("Artikkel");
    return (
        <div className="flex sm:hidden">
        <CMSType />
        <CMSTabs path="artikler" type="Ny artikkel" data={data} />
        </div>
    );
}
