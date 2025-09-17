import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "MedLegal Protection",
	description: "Legal protection platform for medical professionals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}