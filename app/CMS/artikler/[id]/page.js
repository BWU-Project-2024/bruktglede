import { ArtiklerIdCMSPage } from "@/components/pages/CMSPages/Artikler/ArtiklerIdCMSPage"

export default function ArtiklerIdCMSRoute({ params }) {
    const paramsId = params.id
    console.log("paramss", paramsId);
    return (
        <>
            <ArtiklerIdCMSPage params={paramsId} />
        </>
    );
}
