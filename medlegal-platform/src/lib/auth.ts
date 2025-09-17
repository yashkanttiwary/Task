import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			name: "OTP",
			credentials: {
				identifier: { label: "Email or Phone", type: "text" },
				code: { label: "OTP Code", type: "text" },
			},
			async authorize(credentials) {
				if (!credentials?.identifier || !credentials?.code) return null;
				// TODO: Verify OTP from storage. Placeholder allows login for dev.
				return { id: credentials.identifier, name: credentials.identifier } as any;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.user = user;
			return token;
		},
		async session({ session, token }) {
			(session as any).user = token.user;
			return session;
		},
	},
	pages: {},
	secret: process.env.NEXTAUTH_SECRET,
};