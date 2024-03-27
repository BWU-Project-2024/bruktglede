import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { AuthOptions } from "../../auth/[...nextauth]/route";


//* Get one user based on id
export async function GET(req, { params }) {
    // const session = await getServerSession(AuthOptions)
    try {
        const id = parseInt(params.id);
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            // include: {
            //     authenticated: !!session
            // }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error fetching user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

//! Need to hash password
//* Update one store based on id
export async function PUT(req, { params }) {
    try {
        const { username, password } = await req.json();
        const id = parseInt(params.id);

        const updateUser = await prisma.user.update({
            where: { id: id },
            data: {
                username: username,
                password: password,
            },
        });
        return NextResponse.json(updateUser);
    } catch (error) {
        console.log("Error updating user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

//* Delete one user based on id
export async function DELETE(req, { params }) {
    try {
        const id = parseInt(params.id);
        const deleteUser = await prisma.user.delete({
            where: { id: id },
        });
        return NextResponse.json(deleteUser);
    } catch (error) {
        console.log("Error deleting user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
