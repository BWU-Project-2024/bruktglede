import { Jomhuria, Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const jomhuria = Jomhuria({ subsets: ["latin"], variable: "--font-jomhuria", weight: ["400"] });

export const metadata = {
    title: "Bruktglede",
    description: "Utviklet av Lisa Mari Myrene, Alexandra Eloise Vanje & Anosh Chaudhry som bacheloropgave i Webutvikling NTNU Gjøvik.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${opensans.variable} ${jomhuria.variable}`}>{children}
            
          
             </body>

            
        </html>
    );
}
