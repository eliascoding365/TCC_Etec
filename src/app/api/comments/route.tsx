import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: NextRequest) {
    try {
        const { post_id, user_id, content } = await request.json();
        const newComment = await prisma.comment.create({
            data: { content, postId: post_id, authorId: user_id },
            include: { author: true }
        });
        return NextResponse.json(newComment, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('postId');
        if (!postId) {
            return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
        }

        const comments = await prisma.comment.findMany({
            where: { postId: parseInt(postId) },
            include: { author: true }
        });

        return NextResponse.json(comments, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
