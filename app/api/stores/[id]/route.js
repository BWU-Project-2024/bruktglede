// import { json } from "express";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

//! Not working
// Get one store based on id
export async function GET({ params }) {
    try {
        const id = params.id;
        const store = await prisma.store.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return NextResponse.json(store);
    } catch (error) {
        console.log("Error fetching stores:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

// Update one store based on id
export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);

        const id = parseInt(params.id);
        const { name, img, description } = data;

        const updatedStore = await prisma.store.update({
            where: { id },
            data: {
                name,
                img,
                description,
            },
        });
        return NextResponse, json(updatedStore);
    } catch (error) {
        console.log("Error updating stores:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

// Delete one store based on id
export async function DELETE({ params }) {
    try {
        // const id = parseInt(params.id);
        const deleteStore = await prisma.store.delete({
            where: id,
        });
        return NextResponse.json(deleteStore);
    } catch (error) {
        console.log("Error deleting stores:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}
