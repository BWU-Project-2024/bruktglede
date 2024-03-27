import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

//* GET all users
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.log("Error fetching users:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

//! Legg til å sjekke om epost eller brukernavn finnes frå før. 
//* POST new user route
export async function POST(req, res) {
    try {
        const { username, email, password, roleId } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await prisma.user.create({ 
            data: {
                username: username, 
                email: email,
                password: hashedPassword,
                roleId: roleId,
            },
        });
        return NextResponse.json(result);
    } catch (error) {
        console.log("Error fetching users:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
