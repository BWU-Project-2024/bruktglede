import { getStores } from "@/app/butikker/actions";
import { Header } from "../Header";
import { StoreHeader } from "../StoreHeader";
import test from "@/public/test.jpg";

export async function ButikkerPage() {
    const { data: stores } = await getStores();
    return (
        <div className="flex flex-col min-h-screen">
            <StoreHeader
                image={test}
                store="Fretex"
                description="Butikken er en av de eldste aktørene i byen. Her finner du alt av klær og tilbehør, inkludert andre ting som servise og sysaker. Ta turen innom, så skal vi hjelpe deg."
                vision="Fretex visjon"
                text="Visjonen til Fretex er å skape en bærekraftig og
                inkluderende samfunn der ingen ting går til spille.
                Fretex har en visjon om å redusere avfall og fremme
                miljøbevissthet ved å gi nytt liv til brukte varer.
                Våres mål er ikke bare å tilby rimelige produkter til
                kunder, men også å støtte ulike veldedige formål og
                sosiale initiativer."
            />
            {/*  <Header title="Alle butikker" description="Her finner du en oversikt over alle butikkene på plattformen" /> */}
            <main>
                <h1>Butikker page</h1>
                <ul>
                    {stores?.map((store, index) => (
                        <li key={index}>{store.name}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
