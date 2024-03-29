// import { NextResponse } from "next/server";
// import prisma from "@/lib/prismaClient";

// // GET all stations from all stores
// export async function GET() {
//     try {
//         const stations = await prisma.station.findMany();
//         return NextResponse.json(stations);
//     } catch (error) {
//         console.log("Error fetching users:", error);
//         return NextResponse.error("Internal Server Error", 500);
//     }
// }

// // POST new station route
// // export async function POST() {}
