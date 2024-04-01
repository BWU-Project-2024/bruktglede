import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

export const checkIfAdmin = async () => {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    const profile = await prisma.user.findUnique({
        where: { id: data.session.user.id },
      });
    
      if (profile?.role !== 1) {
        redirect("/login");
      }
}