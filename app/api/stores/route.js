import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
    try {
        const stores = await prisma.store.findMany();
        return NextResponse.json(stores);
    } catch (error) {
        console.log("Error fetching stores:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
