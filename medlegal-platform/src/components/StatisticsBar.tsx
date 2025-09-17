export default function StatisticsBar() {
	const stats = [
		{ label: "Protected Doctors", value: "12,430" },
		{ label: "Cases Resolved", value: "3,102" },
		{ label: "Success Rate", value: "96%" },
		{ label: "Years of Service", value: "12+" },
	];
	return (
		<section className="py-6 border-t border-b bg-white">
			<div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
				{stats.map((s) => (
					<div key={s.label}>
						<div className="text-2xl font-semibold">{s.value}</div>
						<div className="text-gray-500 text-sm">{s.label}</div>
					</div>
				))}
			</div>
		</section>
	);
}