import { FiXCircle } from "react-icons/fi";
import { deleteAuthUser } from "@/lib/supabase/actionsAuth";

export const AllSuperUsersCard = ({ name, username, email, accountId }) => {
    const delIconStyle = { marginRight: "10px", color: "#E89A9A" }
    // const allSuperUsers = await readAllSuperUsers();

    const handleDeleteUser = async () => {
        try {
            await deleteAuthUser(accountId);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="w-full flex justify-between items-center text-wrap py-2 pl-3 bg-[#F8F8F7]">
            <button onClick={handleDeleteUser}><FiXCircle style={delIconStyle} /></button>
            <p className="w-[30%] font-medium text-sm">{name}</p>
            <p className="w-[30%] text-sm">{username}</p>
            <p className="w-[40%] text-sm">{email}</p>
        </div>
    )
}
