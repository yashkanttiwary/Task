import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const judgments = await prisma.judgment.findMany({
		orderBy: { publishedAt: "desc" },
		select: {
			id: true,
			title: true,
			court: true,
			category: true,
			publishedAt: true,
			summary: true,
			viewCount: true,
		},
	});
	return NextResponse.json({ data: judgments });
}

export async function POST(request: Request) {
	const body = await request.json();
	const created = await prisma.judgment.create({ data: body });
	return NextResponse.json({ data: created }, { status: 201 });
}

