"use server"

import { createClient } from "./supabaseServer"

// GET user session (to check if logged in)
export const readUserSession = async () => {
    const supabase = createClient();

    return supabase.auth.getSession()
}
