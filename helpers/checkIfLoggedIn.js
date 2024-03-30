import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const checkIfLoggedIn = async () => {
    const supabase = createServerComponentClient({ cookies });
    
    const { data } = await supabase.auth.getSession();
    
    if (data.session?.user) {
        redirect("/login");
    }
}