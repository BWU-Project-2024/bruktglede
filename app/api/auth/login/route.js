import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

//* POST login route
export async function POST(req, res) {
    try {
        const { email, password } = await req.json();
        const user = await prisma.user.findUnique({ 
            where: {
                email: email,
            }
        });
        if (!user) {
            return NextResponse.error("Invalid email", 401 );
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return NextResponse.error("Invalid password", 401);
        }
        return NextResponse.json({ message: "Login successful", user });
    } catch (error) {
        console.log("Error logging in:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}