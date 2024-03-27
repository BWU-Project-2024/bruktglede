// An array of routes that are accessible to the public
// These routes do not require authentification
export const publicRoutes = [
    "/",
    "/arrangementer",
    "/artikler",
    "/butikker",
    "/innleveringsstasjoner",
    "/omoss",
    "/sok",
    "/ukenshoydepunkt",
]

// An array of routes that are not accessible to the public
// These routes do require authentification
export const authRoutes = [
    "/auth/login"
]

// The prefix for API authentification routes
// Routes that start with this prefix are used for API authentification purposes
export const apiAuthPrefix = "api/auth";

// The default path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/CMS/profil";