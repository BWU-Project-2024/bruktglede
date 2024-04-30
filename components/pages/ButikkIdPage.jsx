import { getStoreById, getStoreVisions } from "@/lib/supabase/actionsPublic";
import { StoreInfoBar } from "../StoreInfoBar";
import { StoreHeader } from "../StoreHeader";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { UrlPath } from "../UrlPath";
import { ArticleCard } from "../ArticleCard";
import { ArrangementCard } from "../ArrangementCard";
import {
    getTopFourEvents,
    getTopFourArticles,
} from "@/lib/supabase/actionsPublic";
import { H2 } from "../H2";

export const ButikkIdPage = async ({ params }) => {
    const storeData = await getStoreById(params);
    const storeVisionData = await getStoreVisions(params);
    const [events, articles] = await Promise.all([
        getTopFourEvents(),
        getTopFourArticles(),
    ]);

    return (

        <div className="flex flex-col min-h-screen font-opensans">
            <UrlPath />
            <StoreHeader
                storeData={storeData.stores}
                storeVisionData={storeVisionData}
            />  
             <main className="flex-1">
                <StoreInfoBar
                    storeIdData={storeData}
                />

                <section className="pt-5 lg:pt-10">
                    <H2 heading="Vi arrangerer"/>
                    <ArticleCard
                      articleData={articles.articleData}
                      articlePostTypeName={articles.articlePostType} />
                </section>

                <section className="pt-5 lg:pt-10">
                     <H2 heading="Ukens høydepunkt"/>
                   {/* <UkensHoydepunkt /> */}
                 </section>
            </main>
        </div>
    );
};
