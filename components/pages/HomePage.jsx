import { Footer } from "../Footer";
import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />

            <Footer />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
