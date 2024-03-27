import NextAuth from "next-auth"
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schema";


// Easy way to access AuthOption providers
export const { 
    handlers: { GET, POST }, 
    auth,
    signIn,
    signOut
} = NextAuth({
	pages: {
    	signIn: "/auth/login",
    	error: "/auth/error",
 	},
  	events: {
    	async linkAccount({ user }) {
      		await db.user.update({
        	where: { id: user.id },
        	data: { emailVerified: new Date() }
      	})
    	}
  	},
  	providers: [
    	Credentials({
        async authorize(credentials) {
          const validatedFields = LoginSchema.safeParse(credentials);
  
          if (validatedFields.success) {
            const { email, password } = validatedFields.data;
            
            const user = await getUserByEmail(email);
            if (!user || !user.password) return null;
  
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password,
            );
  
            if (passwordsMatch) return user;
          }
  
          return null;
        }
      })
    ],
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
})