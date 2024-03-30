import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Action is the login api route
export default function LoginForm() {
    return (
        <form action="/auth/login" method="post">
            <label htmlFor="email">Email</label>
            <input name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button>Sign In</button>
        </form>
    )
}