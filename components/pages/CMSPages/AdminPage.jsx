import { NewUserForm } from "@/components/CMSComponents/Forms/NewUserForm";
import { AllSuperUsers } from "@/components/CMSComponents/AllSuperUsers";
import { RequestCard } from "@/components/CMSComponents/RequestCard";

export const AdminPage = () => {
    const signOut = async () => {
        "use server";
        const supabase = createClient();

        await supabase.auth.signOut();
        return redirect('/');
    };
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:px-[10rem] mt-16 min-h-screen">
                <div className="w-[95%] md:w-[45%] mb-16 md:mb-0">
                    <div className="mb-16">
                        <h1 className="text-xl">Opprett ny butikk</h1>
                        <p className="my-4">I skjemaet under kan du opprette ny butikk basert på forespørslene. Den nye brukeren vil få en epost med innloggingslink for å opprette egent passord.</p>
                        <NewUserForm />
                    </div>
                    <div>
                        <h1 className="text-xl mb-4">Alle butikker</h1>
                        <AllSuperUsers />
                    </div>
                </div>
                <div className="w-[95%] md:w-[45%]">
                    <h1 className="text-xl mb-4">Alle forespørsler</h1>
                    <div className="h-[840px] overflow-scroll gap-3 flex flex-wrap pb-3">
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                    </div>
                </div>
            </div>
            <form action={signOut} className="w-full flex justify-center mt-14 mb-20">
                <button className=" w-30 bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200">
                    Logg ut
                </button>
            </form>
        </>
    )

}