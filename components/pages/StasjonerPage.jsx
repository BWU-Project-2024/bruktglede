import { Header } from "../Header"
import { StationInfo } from "../StationInfo"
import { UrlPath } from "../UrlPath"

export const StasjonerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <Header title="Innleveringsstasjoner" description="Her finner du en oversikt over hvor du kan donere klær og produkter. " />
            <main className="flex-1 lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20 font-opensans">
                <section className="-mt-5">
                    <StationInfo />
                </section>
            </main>
        </div>
    )
}