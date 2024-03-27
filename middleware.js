/** 
Middleware allows you to run code before a request is completed. 
Then, based on the incoming request, you can modify the response by rewriting, 
redirecting, modifying the request or response headers, or responding directly.
**/
import NextAuth from "next-auth";
import { 
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes"

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    // Define routes
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    //* The order of the if statements matters.

    //Check if it is an API Auth route
    if (isApiAuthRoute) {
        return null;
    }

    // Check if it is an Auth route
    if (isAuthRoute) {
        //Check if logged in
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    // If not logged in, and it is not a public route (trying to access auth route)
    if (!isLoggedIn && !isPublicRoute) {
        // Then direct user to login page
        return Response.redirect(new URL("/auth/login", nextUrl));
    }

    return null;
})

// Routes in here would invoke the middleware auth function
export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)", 
        "/",
        "/(api|trpc)(.*)"
    ],
}