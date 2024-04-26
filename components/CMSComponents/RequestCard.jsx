"use client"
import { deleteRequest } from "@/lib/supabase/actionsAuth";
import { useRouter } from 'next/navigation';

export const RequestCard = ({ requestData }) => {
    const router = useRouter()

    const handleDeleteRequest = async (requestId) => {
        const confirms = confirm("Er du sikker på at du vil slette forespørsel?");
        if (confirms) {
            try {
                await deleteRequest(requestId);
                router.refresh();
            } catch (error) {
                console.error("Error deleting request:", error);
            }
        }
    };

    return (
        <>
            {requestData.length === 0 ? (
                <p className="p-2 flex justify-center">Ingen forespørsler i databasen.</p>
            ) : (
                requestData?.map((request, index) => (
                    <div key={index} className="w-[48%] h-fit flex flex-col p-2 rounded bg-[#F8F8F7]">
                        <div>
                            <h2 className="text-sm font-medium">Navn</h2>
                            <p className="text-sm mb-2">{request.name}</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">Butikknavn</h2>
                            <p className="text-sm mb-2">{request.storeName}</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">Epost</h2>
                            <p className="text-sm mb-2">{request.email}</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">Telefon</h2>
                            <p className="text-sm mb-2">{request.phone}</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">Melding</h2>
                            <p className="text-sm">{request.message}</p>
                        </div>
                        <button onClick={() => handleDeleteRequest(request.id)} className="flex justify-end text-sm text-error-darker hover:text-[#C43D3D]">Slett</button>
                    </div>
                ))
            )}
        </>
    )
}