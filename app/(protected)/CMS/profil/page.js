import { ProfilCMSPage } from "@/components/pages/CMSPages/ProfilCMSPage";
import { auth } from "@/auth";

export default async function ProfilCMSRoute() {
    const session = await auth();
    return (
        <>
            {/* <ProfilCMSPage /> */}
            {JSON.stringify(session)}
        </>
    );
}
