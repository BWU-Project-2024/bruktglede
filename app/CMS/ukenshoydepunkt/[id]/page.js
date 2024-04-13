import { HoydepunktIdCMSPage } from "@/components/pages/CMSPages/Hoydepunkt/HoydepunktIdCMSPage";

export default function HoydepunktIdCMSRoute({params}) {
    const paramsId = params.id
    return (
        <>
            <HoydepunktIdCMSPage params={paramsId} />
        </>
    );
}
