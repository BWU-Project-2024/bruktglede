// Code exchange route to exchange auth code for the users's session. 
import { createClient } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

// Callbacks direct the user to a route, and back to the route they wanted to access after login. 
export async function GET(request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}