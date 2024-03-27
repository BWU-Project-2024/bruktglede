import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUser } from "@/data/user";
import { authConfig } from "@/auth.config";

// Easy way to access AuthOption providers
export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				const user = await getUser(
					credentials.email,
					credentials.password 
				);

				return user ?? null;
			},
		}),
	],
});