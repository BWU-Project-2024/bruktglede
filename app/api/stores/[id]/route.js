// import { NextResponse } from "next/server";
// import prisma from "@/lib/prismaClient";
// export const dynamic = "force-dynamic";

// // Get one store based on id
// export async function GET(req, { params }) {
//     try {
//         const id = parseInt(params.id);
//         const store = await prisma.store.findUnique({
//             where: {
//                 id: id,
//             },
//         });
//         return NextResponse.json(store);
//     } catch (error) {
//         console.log("Error fetching store:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }

// // Update one store based on id
// export async function PUT(req, { params }) {
//     try {
//         const data = await req.json();
//         console.log(data);

//         const id = parseInt(params.id);
//         const { name, img, description } = data;

//         const updateStore = await prisma.store.update({
//             where: { id: id },
//             data: {
//                 name,
//                 img,
//                 description,
//             },
//         });
//         return NextResponse.json(updateStore);
//     } catch (error) {
//         console.log("Error updating store:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }

// // Delete one store based on id
// export async function DELETE(req, { params }) {
//     try {
//         const id = parseInt(params.id);
//         const deleteStore = await prisma.store.delete({
//             where: { id: id },
//         });
//         return NextResponse.json(deleteStore);
//     } catch (error) {
//         console.log("Error deleting store:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }
