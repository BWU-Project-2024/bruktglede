import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import { readStoreData } from "@/lib/supabase/actions";
import { createClient } from "@/lib/supabase/supabaseServer";

export const HomePage = async () => {

    const supabase = createClient()

    const { data, error } = await supabase.from('Day').select('*')

    if (error) {
        throw new Error(error)
    }
    console.log('data: ', data)



    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
            <main className="flex-1">
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
