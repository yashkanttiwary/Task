type Judgment = {
	id: string;
	title: string;
	court: string;
	date: string;
	category: "Medical" | "Criminal" | "Civil" | "Cooperative";
	summary: string;
};

const sample: Judgment[] = [
	{
		id: "1",
		title: "XYZ Hospital vs ABC",
		court: "Supreme Court of India",
		date: "2024-08-12",
		category: "Medical",
		summary: "This is a sample summary of a judgment. It will be truncated for visitors to 150 characters to encourage login for full access." ,
	},
	{
		id: "2",
		title: "State vs Dr. QRS",
		court: "Bombay High Court",
		date: "2024-07-01",
		category: "Criminal",
		summary: "Another sample summary. Details include the allegations, defense arguments, and final verdict...",
	},
];

export default function JudgmentTimeline() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-4">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold">Recent Judgments</h2>
					<div className="flex gap-2 text-sm">
						<button className="px-3 py-1 rounded border">All</button>
						<button className="px-3 py-1 rounded border">Medical</button>
						<button className="px-3 py-1 rounded border">Criminal</button>
						<button className="px-3 py-1 rounded border">Civil</button>
						<button className="px-3 py-1 rounded border">Cooperative</button>
					</div>
				</div>
				<ul className="space-y-4">
					{sample.map((j) => (
						<li key={j.id} className="p-4 border rounded bg-white">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">{j.title}</h3>
									<p className="text-sm text-gray-500">{j.court} · {new Date(j.date).toLocaleDateString()}</p>
								</div>
								<span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 border">{j.category}</span>
							</div>
							<p className="mt-2 text-gray-700">{j.summary.slice(0, 150)}{j.summary.length > 150 ? "…" : ""}</p>
							<div className="mt-2 text-sm text-indigo-600">Read more (login)</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}