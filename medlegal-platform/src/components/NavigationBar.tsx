"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationBar() {
	const [solid, setSolid] = useState(false);
	useEffect(() => {
		const onScroll = () => setSolid(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<nav className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid ? "bg-white/90 backdrop-blur border-b" : "bg-transparent"}`}>
			<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
				<Link href="/" className="font-semibold">MedLegal</Link>
				<div className="flex items-center gap-4 text-sm">
					<Link href="/judgments">Judgments</Link>
					<Link href="/pricing">Pricing</Link>
					<Link href="/dashboard" className="px-3 py-1 rounded bg-black text-white">Sign in</Link>
				</div>
			</div>
		</nav>
	);
}