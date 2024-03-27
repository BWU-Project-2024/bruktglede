import { useSession } from 'next-auth/react';

function User() {
    const { data: session } = useSession();
    console.log('Client Session', session);
    return <pre>{JSON.stringify(session)}</pre>;
}

export default User;
