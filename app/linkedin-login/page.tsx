import { createServerSupabaseServerClient } from "@/api/supabase/server-client";
import LinkedInLoginDemo from "./LinkedInLoginDemo";


export default async function LinkedInLoginPage() {
    const supabase = await createServerSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    console.log({user});

    return (
        <LinkedInLoginDemo user={user} />
    );
}