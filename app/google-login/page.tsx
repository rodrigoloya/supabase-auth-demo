import GoogleLoginDemo from "./GoogleLoginDemo";
import { createServerSupabaseServerClient } from "@/api/supabase/server-client";



export default async function GoogleLoginPage() {
    const supabase = await createServerSupabaseServerClient();
        
    const { 
        data: { user } 
    } = await supabase.auth.getUser();

    console.log({ user })


    return (
        <GoogleLoginDemo user={user} />
           
    );
}