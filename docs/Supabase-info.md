# Supabase

# Authentification

Supabase handles the authentification, hasing of password, cookies and session for us in an easy way. When you create a new user it is created in the "auth" table. It will also autogenerate an "account" in the public schema, so we are able to connect a store and role to the user.

# Protected routes

To protect routes/pages from user that are not authentificated, you need to import the supabase action that checks if a user is logged in: 

`import { readUserSession } from '@/lib/supabase/actions';`

The user is store in the session. Inside your page function, insert this to get the session:

`const { data: { session } } = await readUserSession();`

And lastly, if there is no session (meaning the user is not logged in), insert this right after:

`if (!session) { return redirect('/login'); }`

The user will then be redirected to the login page. Remember to import `import { redirect } from 'next/navigation';`. **It automatically imports as 'next/router' but that is old. Use 'next/navigation'**. 


# CRUD operations

You create an "action.js" in each app router page folder. In the action.js file you can write CRUD functions for that specific page. For example in the "butikker" app folder, there is an action.js file, that handles all the CRUD operations for the "butikker" page.

The CRUD operations are written in simple SQL, for Supabase.

[Fetch data Supabase article](https://supabase.com/docs/reference/javascript/upsert)

Look in the "app/butikker/action.js" to see example on GET. 