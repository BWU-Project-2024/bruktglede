import { createClient } from '@/lib/supabase/supabaseServer';

export const signIn = async (formData) => {
    "use server"
    const email = formData.email;
    const password = formData.password;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (!error) {
        redirect('/');
    }
};