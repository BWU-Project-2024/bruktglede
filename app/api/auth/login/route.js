// import { NextResponse, NextRequest } from "next/server";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export async function POST(req) {
//     const url = new URL(req.url);
//     const cookieStore = cookies();

//     const formData = await req.formData();
//     const email = formData.get('email');
//     const password = formData.get('password');


//     const supabase =  createRouteHandlerClient({
//         cookie: () => cookieStore
//     })

//     await supabase
//         .auth.signInWithPassword({
//             email, password, 
//             options: {
//                 emailRedirectTo: `${url.origin}/auth/callback`
//             }
//     });

//     return NextResponse.redirect(url.origin, {
//         status: 301 
//     })
// } 