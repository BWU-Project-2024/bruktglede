import { Header } from "../Header"
import { StoreTag } from "../StoreTag"
import { CategoryTag } from "../CategoryTag"

export const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Tittel her" description="Beskrivende tekst beskrivende tekst eskrivende tekst" />
            <main className="flex-1">
                <StoreTag title="Fretex" />
                <CategoryTag bgColor="" title="Klær" />
            </main>
        </div>
    )
}
