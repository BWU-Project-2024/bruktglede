import Link from 'next/link'
 
export default function NotFound() {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen gap-5">
            <h1 className="text-2xl">Denne siden eksisterer ikke!</h1>
            <p>Kunne ikke finne det du lette etter</p>
            <Link href="/" className="underline">Gå til hjemmesiden</Link>
        </main>
    )
}
