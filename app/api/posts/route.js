import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// GET all posts from all stores
export async function GET() {
    try {
        const posts = await prisma.post.findMany({});
        return NextResponse.json(posts);
    } catch (error) {
        console.log("Error fetching posts:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

// POST new post
// export async function POST() {}
