
import { Header } from "../Header"
import { AllStoresCard } from "../AllStoresCard";

export async function ButikkerPage() {
   
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" />

            <main className="">


           <AllStoresCard />
        
            </main>
        </div>
    )
}