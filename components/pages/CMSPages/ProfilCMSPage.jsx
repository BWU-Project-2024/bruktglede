import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link";
import { cookies } from "next/headers";

export const ProfilCMSPage = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const { data: { user } } = await supabase.auth.getUser();
    console.log({ user });

    if (!user) {
        return (
            <main><Link href="/login">You are not logged inn....</Link></main>

        )

    }

    return (
        <main>
            <h1>profil pageya</h1>
        </main>
    )
} 