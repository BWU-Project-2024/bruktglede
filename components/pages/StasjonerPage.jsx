import { Header } from "../Header"
import { StationInfo } from "../StationInfo"
import { UrlPath } from "../UrlPath"

export const StasjonerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Innleveringsstasjoner" description="Her finner du en oversikt over hvor du kan donere klær og produkter. " />
            <UrlPath />
            <main className="flex-1 lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20">
                <section className="-mt-10">
                    <StationInfo />
                </section>
            </main>
        </div>
    )
}