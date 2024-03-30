// import { NextResponse, NextRequest } from "next/server";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";


async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: '/',
      },
    })
  }
  

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
//         .auth.signUp({
//             email, password, 
//             options: {
//                 emailRedirectTo: `${url.origin}/auth/callback`
//             }
//     });

//     return NextResponse.redirect(url.origin, {
//         status: 301 
//     })
// }


// import prisma from "@/lib/prisma";
// import bcrypt from 'bcrypt';

// //* POST login route
// export async function POST(req, res) {
//     try {
//         const { email, password } = await req.json();
//         const user = await prisma.user.findUnique({ 
//             where: {
//                 email: email,
//             }
//         });
//         if (!user) {
//             return NextResponse.error("Invalid email", 401 );
//         }
//         const passwordMatches = await bcrypt.compare(password, user.password);
//         if (!passwordMatches) {
//             return NextResponse.error("Invalid password", 401);
//         }
//         return NextResponse.json({ message: "Login successful", user });
//     } catch (error) {
//         console.log("Error logging in:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }