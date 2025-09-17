/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: { typedRoutes: true },
	images: { domains: [] },
	headers: async () => [
		{
			source: "/(.*)",
			headers: [
				{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
			]
		}
	]
};

export default nextConfig;