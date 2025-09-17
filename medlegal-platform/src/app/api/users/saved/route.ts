import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	// Placeholder: should use session user id
	return NextResponse.json({ data: [] });
}

export async function POST(request: Request) {
	const body = await request.json();
	const updated = await prisma.user.update({
		where: { id: body.userId },
		data: { savedJudgments: { connect: { id: body.judgmentId } } },
	});
	return NextResponse.json({ data: updated });
}

