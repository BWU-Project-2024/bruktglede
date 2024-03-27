/** 
Middleware allows you to run code before a request is completed. 
Then, based on the incoming request, you can modify the response by rewriting, 
redirecting, modifying the request or response headers, or responding directly.
**/
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { 
    DEFAULT_LOGIN_REDIRECT,
    authRoutes,
    publicRoutes
} from "@/lib/routes"

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;

	const isAuthenticated = !!req.auth;
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	if (isPublicRoute && isAuthenticated)
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

	if (!isAuthenticated && !isPublicRoute)
		return Response.redirect(new URL(authRoutes, nextUrl));
});

// Routes in here would invoke the middleware auth function
export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)", 
        "/",
        "/(api|trpc)(.*)"
    ],
}