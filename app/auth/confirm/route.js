import { createClient } from "@/lib/supabase/supabaseServer";

export async function GET(request) {
    const url = new URL(request.url);
    const token_hash = url.searchParams.get('token_hash');
    const type = url.searchParams.get('type');
    const next = url.searchParams.get('next') || '/';

    const redirectTo = new URL(next, request.nextUrl);

    redirectTo.searchParams.delete('token_hash');
    redirectTo.searchParams.delete('type');

    if (token_hash && type) {
        const supabase = createClient();

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });

        if (!error) {
            redirectTo.searchParams.delete('next');
            return new Response(null, { status: 302, headers: { Location: redirectTo.toString() } });
        }
    }

    // return the user to an error page with some instructions
    redirectTo.pathname = '/error';
    return new Response(null, { status: 302, headers: { Location: redirectTo.toString() } });
}
