import { ArrangementIdPage } from "@/components/pages/ArrangementIdPage";

export default function ArrangementIdRoute({ params }) {
    const paramsId = params
    return (
        <>
            <ArrangementIdPage params={paramsId}/>
        </>
    );
}
