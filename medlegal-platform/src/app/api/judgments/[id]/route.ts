import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: { id: string } }

export async function GET(_: Request, { params }: Params) {
	const judgment = await prisma.judgment.findUnique({
		where: { id: params.id },
		include: { attachments: true },
	});
	if (!judgment) return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json({ data: judgment });
}

