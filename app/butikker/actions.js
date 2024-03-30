"use server"
import { createClient } from "@/lib/supabase/supabaseServer";

// GET all stores 
export const getStores = async () => {
    const supabase = createClient()

    return await supabase.from("Store").select("*");

}