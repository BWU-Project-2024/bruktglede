import { AllSuperUsersCard } from "./AllSuperUsersCard"
import { readAllSuperUsers } from "@/lib/supabase/actionsAuth";
import { deleteStoreUser } from "@/lib/supabase/actionsAuth";

export const AllSuperUsers = async () => {
    const allSuperUsersData = await readAllSuperUsers();
    // const deleteStore = await deleteStoreUser()


    return (
        <div className="flex flex-col w-full h-[20rem]">
            <div className="flex justify-between w-full py-3 pl-3 rounded-t bg-forestgreen-default text-white font-medium">
                <p className="w-[30%] ml-[25px]">Butikk</p>
                <p className="w-[30%]">Brukernavn</p>
                <p className="w-[40%]">Epost</p>
            </div>
            <div className="overflow-scroll bg-[#F8F8F7]">
                <AllSuperUsersCard
                    superUserData={allSuperUsersData}
                // deleteStoreUser={deleteStore}
                />
            </div>
        </div>
    )
}
