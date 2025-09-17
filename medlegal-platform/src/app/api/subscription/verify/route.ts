import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
	const body = await request.json();
	const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
	const hmac = crypto
		.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
		.update(`${razorpay_order_id}|${razorpay_payment_id}`)
		.digest("hex");
	const isValid = hmac === razorpay_signature;
	return NextResponse.json({ valid: isValid });
}

