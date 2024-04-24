"use client"
import { AllSuperUsersCard } from "./AllSuperUsersCard"
import { readAllSuperUsers } from "@/lib/supabase/actionsAuth";
import { useState, useEffect } from 'react';

export const AllSuperUsers = () => {
    const [allSuperUsersData, setAllSuperUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readAllSuperUsers();
                setAllSuperUsersData(data);
            } catch (error) {
                console.error('Error fetching super users:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full h-[20rem]">
            <div className="flex justify-between w-full py-3 pl-3 rounded-t bg-forestgreen-default text-white font-medium">
                <p className="w-[30%] ml-[25px]">Butikk</p>
                <p className="w-[30%]">Brukernavn</p>
                <p className="w-[40%]">Epost</p>
            </div>
            <div className="overflow-scroll bg-[#F8F8F7]">
                {allSuperUsersData?.map((superUser, index) => (
                    <AllSuperUsersCard
                        key={index}
                        name={superUser.storeData.name}
                        username={superUser.accountData.username}
                        email={superUser.accountData.email}
                        accountId={superUser.accountData.id}
                    />
                ))}
            </div>
        </div>
    )
}
