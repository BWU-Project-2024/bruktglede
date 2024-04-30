import { getStoreById, getStoreVisions, getHighlightsByStore, fetchAllStationsSortedByStoreId, getTopFourEventsId } from "@/lib/supabase/actionsPublic";
import { StoreInfoBar } from "../StoreInfoBar";
import { StoreHeader } from "../StoreHeader";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { UrlPath } from "../UrlPath";
import { ArrangementCard } from "../ArrangementCard";
import { StationInfoId } from "../StationInfoId";
import { H2 } from "../H2";

export const ButikkIdPage = async ({ params }) => {

    const [events, storeData, storeVisionData, getHighlight, getStations] = await Promise.all([
        getTopFourEventsId(params),
        getStoreById(params),
        getStoreVisions(params),
        getHighlightsByStore(params),
        fetchAllStationsSortedByStoreId(params)
    ]);

    return (

        <div className="flex flex-col min-h-screen font-opensans">
            <UrlPath />
            <StoreHeader
                storeData={storeData.stores}
                storeVisionData={storeVisionData}
            />
            <main className="flex-1 mb-20">
                <StoreInfoBar
                    storeIdData={storeData}
                />

                <section className="w-full pt-5 lg:pt-10">
                    <H2 heading="Vi arrangerer" />
                    <div className="flex justify-center gap-6 mb-8">
                        <div className="w-[100%] md:w-[80%] lg:w-[70%]">
                            <ArrangementCard
                                eventData={events.eventData}
                                eventPostTypeName={events.eventPostTypeName}
                            />

                        </div>
                    </div>
                </section>

                <section className="pt-5 lg:pt-10">
                    <H2 heading="Ukens høydepunkt" />
                    <div className="px-6 md:px-28 lg:px-64 lg:ml-14">
                        <div className="w-full md:w-[80%] lg:w-[70%]">
                            <UkensHoydepunkt highlightData={getHighlight} />
                        </div>
                    </div>
                </section>

                <section className="pt-5 lg:pt-10">
                    <H2 heading="Våre innleveringsstasjoner" />
                    <div className="px-6 md:px-28 lg:px-64 lg:ml-14">
                        <StationInfoId stationInfo={getStations} />
                    </div>
                </section>
            </main>
        </div>
    );
};
