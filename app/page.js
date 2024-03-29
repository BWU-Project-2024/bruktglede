// import prisma from "@/lib/prisma";
import { HomePage } from "@/components/pages/HomePage";
// import supabase from "@/lib/supabase/supabaseClient";

export default function HjemRoute() {
    // const setNewView = async () => {
    //     const { data, error } = await supabase.from("views").insert({
    //         name: 'random name'
    //     })

    //     if (data) console.log(data);
    //     if (error) console.log(error);
    // }
    // setNewView();
    return (
        <>
            <HomePage />
        </>
    );
}
