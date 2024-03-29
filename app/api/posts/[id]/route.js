// import { NextResponse } from "next/server";
// import prisma from "@/lib/prismaClient";

// //! Doesnt work
// // GET all posts from all stores filtered by postType
// export async function GET(res, { params }) {
//     try {
//         const postType = params.postType;
//         const posts = await prisma.post.findMany({
//             where: {
//                 postType: postType,
//             },
//         });
//         return NextResponse.json(posts);
//     } catch (error) {
//         console.log("Error fetching posts:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }
