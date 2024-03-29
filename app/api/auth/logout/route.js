import { NextResponse, NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    const url = new URL(req.url);
    const cookieStore = cookies();

    const supabase =  createRouteHandlerClient({
        cookie: () => cookieStore
    })

    await supabase.auth.signOut();

    return NextResponse.redirect(url.origin, {
        status: 301 
    })
}