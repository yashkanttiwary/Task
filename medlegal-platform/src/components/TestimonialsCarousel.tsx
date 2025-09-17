"use client";
import { useEffect, useState } from "react";

const items = [
	{ id: 1, text: "MedLegal helped me navigate a complex case.", author: "Dr. A, Cardiologist" },
	{ id: 2, text: "Timely legal updates improved our protocols.", author: "Dr. B, Surgeon" },
	{ id: 3, text: "Great support during an unexpected complaint.", author: "Dr. C, Pediatrician" },
];

export default function TestimonialsCarousel() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
		return () => clearInterval(t);
	}, []);
	const current = items[index];
	return (
		<section className="py-10 bg-gray-50 border-t">
			<div className="mx-auto max-w-4xl px-4 text-center">
				<h2 className="text-xl font-semibold">What doctors say</h2>
				<p className="mt-4 text-lg">“{current.text}”</p>
				<p className="mt-2 text-sm text-gray-500">{current.author}</p>
				<div className="mt-4 flex justify-center gap-2">
					{items.map((it, i) => (
						<button key={it.id} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i===index?"bg-black":"bg-gray-300"}`} />
					))}
				</div>
			</div>
		</section>
	);
}