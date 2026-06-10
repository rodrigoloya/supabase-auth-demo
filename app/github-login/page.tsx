import GithubLoginDemo from "./GithubLoginDemo";
import { createServerSupabaseServerClient } from "@/api/supabase/server-client";


export default async function GithubLoginPage() {
    const supabase = await createServerSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    console.log({ user })
    
    return (
       <GithubLoginDemo user={user} />  
    );
}
