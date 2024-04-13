import { ArrangementerIdCMSPage } from "@/components/pages/CMSPages/Arrangementer/ArrangementerIdCMSPage";

export default function ArrangementerIdCMSRoute({ params }) {
    const paramsId = params.id
    return (
        <>
            <ArrangementerIdCMSPage params={paramsId} />
        </>
    );
}
