import { Header } from "../Header"
import { UrlPath } from "../UrlPath"

export const SokPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Søk" />
            <UrlPath />
            <main className="flex-1">

            </main>
        </div>
    )
}