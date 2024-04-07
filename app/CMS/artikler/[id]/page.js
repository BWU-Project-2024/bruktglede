import { ArtiklerIdCMSPage } from "@/components/pages/CMSPages/ArtiklerIdCMSPage"

export default function ArtiklerIdCMSRoute({ params }) {
    const paramsId = params.id
    return (
        <>
            <ArtiklerIdCMSPage params={paramsId} />
        </>
    );
}
