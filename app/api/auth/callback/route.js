// Code exchange route to exchange auth code for the users's session. 
import { createClient } from "@/lib/supabase/supabaseServer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Callbacks direct the user to a route, and back to the route they wanted to access after login. 
export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}