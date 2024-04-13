import { StasjonerIdCMSPage } from "@/components/pages/CMSPages/Stasjoner/StasjonerIdCMSPage";

export default function StasjonerIdCMSRoute({ params }) {
    const paramsId = params.id
    return (
        <>
            <StasjonerIdCMSPage params={paramsId}/>
        </>
    );
}
