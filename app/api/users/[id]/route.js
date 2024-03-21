import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export const dynamic = "force-dynamic";

// Get one store based on id
export async function GET(req, { params }) {
    try {
        const id = parseInt(params.id);
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error fetching user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

//! Need to hash password
// Update one store based on id
export async function PUT(req, { params }) {
    try {
        const data = await req.json();
        console.log(data);

        const id = parseInt(params.id);
        const { password } = data;

        const updateUser = await prisma.store.update({
            where: { id: id },
            data: {
                password,
            },
        });
        return NextResponse.json(updateUser);
    } catch (error) {
        console.log("Error updating user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

// Delete one store based on id
export async function DELETE(req, { params }) {
    try {
        const id = parseInt(params.id);
        const deleteUser = await prisma.store.delete({
            where: { id: id },
        });
        return NextResponse.json(deleteUser);
    } catch (error) {
        console.log("Error deleting user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
