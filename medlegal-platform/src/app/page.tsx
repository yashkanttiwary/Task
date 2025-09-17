export default function Page() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-6">
			<h1 className="text-3xl font-bold text-center">Protect Your Practice, Secure Your Future</h1>
			<p className="mt-2 text-gray-600 text-center">Legal Protection for Medical Professionals</p>
			<div className="mt-6 flex gap-3">
				<button className="px-4 py-2 rounded bg-black text-white">Start 3-Day Trial - ₹2000</button>
				<button className="px-4 py-2 rounded border">View Latest Judgments</button>
			</div>
		</main>
	);
}