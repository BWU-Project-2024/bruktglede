import { AllSuperUsersCard } from "./AllSuperUsersCard"
export const AllSuperUsers = () => {
    return (
        <div className="flex flex-col w-full h-[20rem]">
            <div className="flex justify-between w-full py-3 pl-3 rounded-t bg-forestgreen-default text-white font-medium">
                <p className="w-[30%]">Butikk</p>
                <p className="w-[30%]">Brukernavn</p>
                <p className="w-[40%]">Epost</p>
            </div>
            <div className="overflow-scroll">
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
                <AllSuperUsersCard />
            </div>
        </div>
    )
}
