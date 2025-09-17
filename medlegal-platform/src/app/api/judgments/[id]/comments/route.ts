import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: { id: string } }

export async function GET(_: Request, { params }: Params) {
	const comments = await prisma.comment.findMany({
		where: { judgmentId: params.id, parentId: null },
		include: { replies: true, user: true },
		orderBy: { createdAt: "desc" },
	});
	return NextResponse.json({ data: comments });
}

export async function POST(request: Request, { params }: Params) {
	const body = await request.json();
	const created = await prisma.comment.create({
		data: {
			judgmentId: params.id,
			userId: body.userId,
			content: body.content,
			parentId: body.parentId ?? null,
			isExpertOpinion: Boolean(body.isExpertOpinion),
		},
	});
	return NextResponse.json({ data: created }, { status: 201 });
}

