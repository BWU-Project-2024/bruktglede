import { auth } from "@/auth"

export const ProfilCMSPage = async () => {
    const session = await auth();
    return (
        <main>
            {session && session.user ? (
                <>
                    <h1>Profil CMS page</h1>
                    <p>{session.user}</p>
                </>
            ) : (
                <p>No access!</p>
            )}
        </main>
    )
} 