import { readAccountDataId } from "@/lib/supabase/actionsAuth";

export const MinBrukerInfo = async () => {
    const data = await readAccountDataId();

    const dateTimeString = data.storeIdData[0].created_at;
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString('en-GB');

    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return (
        <section className="flex flex-col gap-7 mt-4 sm:w-[365px]">
            <div>
                <h2 className="text-base font-medium mb-1">Butikknavn</h2>
                <hr className="mb-2" />
                <p>{data.storeIdData[0].name}</p>
            </div>
            <div>
                <h2 className="text-base font-medium mb-1">Brukernavn</h2>
                <hr className="mb-2" />
                <p>{data.accountData[0].username}</p>
            </div>
            <div>
                <h2 className="text-base font-medium mb-1">Epost</h2>
                <hr className="mb-2" />
                <p>{data.authEmail}</p>
            </div>
            <div>
                <h2 className="text-base font-medium mb-1">Opprettet</h2>
                <hr className="mb-2" />
                <p>Den {formattedDate}, klokken {formattedTime}</p>
            </div>
        </section>
    )
}