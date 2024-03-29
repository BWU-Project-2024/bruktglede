import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request) {
  return await updateSession(request);
}


// import { createBrowserClient } from '@supabase/ssr'
// import { NextResponse } from "next/server";

// // Makes it possible to talk back to cookie
// // Will run before each route is accessed and rendered
// export async function middleware(req) {
//     const res = NextResponse.next();

//     // Create a Supabase client configured to use cookies
//     const supabase = createBrowserClient({ req, res });

//     // Refresh session if expired - required for Server Components
//     await supabase.auth.getUser();

//     return res;
// }
// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }