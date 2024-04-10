// import prisma from "@/lib/prisma";

import { ArtikkelIdPage } from "@/components/pages/ArtikkelIdPage";


export default function ArtikkelIdRoute({ params }) {
    const paramsId = params.id
    console.log("params", paramsId);
    
    return (
        <>
            <ArtikkelIdPage params={paramsId} />
        </>
    );
}


