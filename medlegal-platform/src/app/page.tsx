import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import StatisticsBar from "@/components/StatisticsBar";
import JudgmentTimeline from "@/components/JudgmentTimeline";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Page() {
	return (
		<main>
			<NavigationBar />
			<HeroSection />
			<StatisticsBar />
			<JudgmentTimeline />
			<TestimonialsCarousel />
		</main>
	);
}