//! sett inn fra db
export const RequestCard = () => {
    return (
        <div className="w-[250px] h-auto flex flex-col gap-2 p-2 rounded bg-[#F8F8F7]">
            <div>
                <h2 className="text-sm font-medium ">Navn</h2>
                <p className="text-sm">Lisa Mari Myrene</p>
            </div>
            <div>
                <h2 className="text-sm font-medium">Butikknavn</h2>
                <p className="text-sm" >Fretex Gjøvik</p>
            </div>
            <div>
                <h2 className="text-sm font-medium">Epost</h2>
                <p className="text-sm">epost@epost.no</p>
            </div>
            <div>
                <h2 className="text-sm font-medium">Telefon</h2>
                <p className="text-sm">999 00 999</p>
            </div>
            <div>
                <h2 className="text-sm font-medium">Melding</h2>
                <p className="text-sm">Dette er en laaaang meldgin hiewufhwefjehfklfefhjwøekf</p>
            </div>
        </div>
    )
}