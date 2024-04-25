import { ButikkIdPage } from "@/components/pages/ButikkIdPage";

export default function ButikkIdRoute({ params }) {
    const paramsId = params
    console.log("params", paramsId);

    return (
        <>
            <ButikkIdPage params={paramsId} />
        </>
    );
}
