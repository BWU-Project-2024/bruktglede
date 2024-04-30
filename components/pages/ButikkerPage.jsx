import { Header } from "../Header"
import { UrlPath } from "../UrlPath"
import { AllStoresCard } from "../AllStoresCard";
import { BliEndelAvPlattformenForm } from "../BliEndelAvPlattformenForm";

export async function ButikkerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" />
            <UrlPath />
            <main className="mt-5">
                <AllStoresCard />
                <div className="my-20 flex flex-col items-center justify-center">
                    <BliEndelAvPlattformenForm />
                </div>
            </main>
        </div>
    )
}