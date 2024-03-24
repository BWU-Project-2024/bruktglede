import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// GET all users
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.log("Error fetching users:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

//! Need to hash password
// POST new user route
export async function POST() {}
