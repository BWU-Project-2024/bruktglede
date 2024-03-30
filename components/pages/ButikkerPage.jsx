import { getStores } from "@/app/butikker/actions"

export async function ButikkerPage() {

    const { data: stores } = await getStores();

    return (

        <main>
            <h1>
                Butikker page
            </h1>
            <ul>
                {stores?.map((store, index) => (
                    <li key={index}>{store.name}</li>
                ))}
            </ul>
        </main>
    )
}