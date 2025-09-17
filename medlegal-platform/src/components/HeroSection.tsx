export default function HeroSection() {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
			<div className="relative z-10 max-w-3xl px-6">
				<h1 className="text-4xl md:text-6xl font-bold">Protect Your Practice, Secure Your Future</h1>
				<p className="mt-4 text-gray-600 text-lg">Legal Protection for Medical Professionals</p>
				<div className="mt-8 flex items-center justify-center gap-3">
					<button className="px-5 py-3 rounded bg-black text-white">Start 3-Day Trial - ₹2000</button>
					<button className="px-5 py-3 rounded border">View Latest Judgments</button>
				</div>
			</div>
		</section>
	);
}