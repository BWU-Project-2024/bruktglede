import { ArtiklerIdCMSPage } from "@/components/pages/CMSPages/Artikler/ArtiklerIdCMSPage"

export default function ArtiklerIdCMSRoute({ params }) {
    const paramsId = params.id
    return (
        <>
            <ArtiklerIdCMSPage params={paramsId} />
        </>
    );
}
