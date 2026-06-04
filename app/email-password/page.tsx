import  EmailPasswordDemo  from "./EmailPasswordDemo";
import { createServerSupabaseServerClient } from "../../api/supabase/server-client";

export default async function EmailPasswordPage() {
    const supabase = await createServerSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    console.log({ user})
    return <EmailPasswordDemo user={null} />;
}