import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
	const payload = await request.text();
	const signature = (request.headers.get("x-razorpay-signature") ?? "").toString();
	const secret = process.env.RAZORPAY_KEY_SECRET ?? "";
	const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
	const valid = signature === expected;
	if (!valid) return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
	// TODO: handle event types
	return NextResponse.json({ ok: true });
}

