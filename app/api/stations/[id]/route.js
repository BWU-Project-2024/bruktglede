import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

//! Don't work
// GET all stations from one store
export async function GET(res, { params }) {
    try {
        const storeId = parseInt(params.storeId);
        const stations = await prisma.station.findMany({
            where: {
                storeId: storeId,
            },
        });
        return NextResponse.json(stations);
    } catch (error) {
        console.log("Error fetching users:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
