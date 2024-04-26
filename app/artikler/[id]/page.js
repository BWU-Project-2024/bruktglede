import { ArtikkelIdPage } from "@/components/pages/ArtikkelIdPage";

export default function ArtikkelIdRoute({ params }) {
    const paramsId = params

    return (
        <>
            <ArtikkelIdPage params={paramsId} />
        </>
    );
}
