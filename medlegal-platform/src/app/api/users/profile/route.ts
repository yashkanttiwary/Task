import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	// Placeholder: get current user from session in future
	return NextResponse.json({ data: null });
}

export async function POST(request: Request) {
	const body = await request.json();
	const user = await prisma.user.upsert({
		where: { email: body.email ?? "" },
		update: body,
		create: body,
	});
	return NextResponse.json({ data: user });
}

