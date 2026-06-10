import TwitterLoginPageDemo from "./TwitterLoginDemo";
import { createServerSupabaseServerClient } from "@/api/supabase/server-client";

export default async function TwitterLoginPage() {
    const supabase = await createServerSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    console.log({ user })

    return (
        <TwitterLoginPageDemo user={user} />
    );
}