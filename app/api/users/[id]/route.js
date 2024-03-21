import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

//! Doesnt work
// GET one user based on id
export async function GET({ params }) {
    try {
        const id = params.id;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error fetching stores:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
