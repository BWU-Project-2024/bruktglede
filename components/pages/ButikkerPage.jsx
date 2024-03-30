
import { getStores } from "@/app/butikker/actions"
import { Header } from "../Header"
import { Footer } from "../Footer"

export async function ButikkerPage() {
    const { data: stores } = await getStores();
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" />
            <main>
                <h1>Butikker page</h1>
                <ul>
                    {stores?.map((store, index) => (
                        <li key={index}>{store.name}</li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    )
}