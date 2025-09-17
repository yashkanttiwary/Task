import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
	const body = await request.json();
	const instance = new Razorpay({
		key_id: process.env.RAZORPAY_KEY_ID!,
		key_secret: process.env.RAZORPAY_KEY_SECRET!,
	});
	const order = await instance.orders.create({
		amount: body.amount,
		currency: body.currency ?? "INR",
		receipt: body.receipt ?? `order_${Date.now()}`,
	});
	return NextResponse.json({ data: order });
}

