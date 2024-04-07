import { Header } from "../Header"
import { StationInfo } from "../StationInfo"

export const StasjonerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Innleveringsstasjoner" description="Her finner du en oversikt over hvor du kan donere klær og produkter. " />
            <main className="flex-1">


<section className="-mt-10">
<StationInfo  />

</section>
            </main>
        </div>
    )
}