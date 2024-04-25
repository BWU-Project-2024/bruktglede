
import { getStores } from "@/app/butikker/actions";
import { Header } from "../Header";

import { Header } from "../Header"
import { AllStoresCard } from "../AllStoresCard";

export async function ButikkerPage() {
   
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Alle butikker"
                description="Her finner du en oversikt over alle butikkene på plattformen"
            />
            <main>
                <h1>Butikker page</h1>
                <ul>
                    {stores?.map((store, index) => (
                        <li key={index}>{store.name}</li>
                    ))}
                </ul>
            <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" />

            <main className="flex-1 font-opensans lg:-mt-10 p-2 px-6 md:w-4/5 lg:w-3/4 max-w-readable md:px-20 lg:px-40 lg:pt-20">

           <AllStoresCard />
            
            </main>
        </div>
    );
}
