import { Jomhuria, Open_Sans } from "next/font/google";
// import { SessionProvider } from "next-auth/react";

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const jomhuria = Jomhuria({ subsets: ["latin"], variable: "--font-jomhuria", weight: ["400"] });

export default function RootLayout({ children, params: { session, ...params } }) {
    return (
        <html lang="en">
            <body className={opensans.className}>
                {children}
            </body>
        </html>
    );
}
