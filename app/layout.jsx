import { Jomhuria, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { readUserSession } from "@/lib/supabase/actions";

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const jomhuria = Jomhuria({ subsets: ["latin"], variable: "--font-jomhuria", weight: ["400"] });

export const metadata = {
    title: "Bruktglede",
    description: "Utviklet av Lisa Mari Myrene, Alexandra Eloise Vanje & Anosh Chaudhry som bacheloropgave i Webutvikling NTNU Gjøvik.",
};

export default async function RootLayout({ children }) {
    const { data: { session } } = await readUserSession();
    return (
        <html lang="en">
            <body className={`${opensans.variable} ${jomhuria.variable}`}>
                <Navbar session={session} />
                {children}
                <Footer />
                <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
            </body>
        </html>
    );
}
