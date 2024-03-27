
// async function getData() {
//     const res = await fetch('http://localhost:3000/api/stores', {
//         method: 'GET',
//         // cache: 'force-cache',
//         // next: { revalidate: 360 }
//     })
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//     // console.log(res.json());
//     return res.json()
// }

export async function ButikkerPage() {
    // const data = await getData();
    return (
        <main>
            <h1>
                Butikker page
            </h1>
            {/* <ul>
                {data.map(store => (
                    <li key={store.id}>{store.name}</li>
                ))}
            </ul> */}
        </main>
    )
}