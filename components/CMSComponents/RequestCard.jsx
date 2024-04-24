import { readRequests } from "@/lib/supabase/actionsAuth";

export const RequestCard = async () => {

    const data = await readRequests();

    return (
        <>
            {data?.map((request, index) => (
                <div key={index} className="w-[48%] h-fit flex flex-col gap-2 p-2 rounded bg-[#F8F8F7]">
                    <div>
                        <h2 className="text-sm font-medium ">Navn</h2>
                        <p className="text-sm">{request.name}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium">Butikknavn</h2>
                        <p className="text-sm">{request.storeName}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium">Epost</h2>
                        <p className="text-sm">{request.email}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium">Telefon</h2>
                        <p className="text-sm">{request.phone}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium">Melding</h2>
                        <p className="text-sm">{request.message}</p>
                    </div>
                </div>
            ))}
        </>
    )
}