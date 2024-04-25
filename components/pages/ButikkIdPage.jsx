
import { Header } from "../Header";
import { StoreHeader } from "../StoreHeader";
import test from "@/public/test.jpg";
import { Header } from "../Header"
import { getStoreById } from "@/lib/supabase/actionsPublic"

export const ButikkIdPage = async ({ params }) => {
const storeData = await getStoreById(params.id);
const data = storeData;


console.log(data)

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
            <main className="flex-1"></main>
        </div>
    );
};
