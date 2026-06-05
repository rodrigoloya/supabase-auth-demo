import { SupabaseClient } from "@supabase/supabase-js";
import   { createBrowserClient }   from "@supabase/ssr";

type SupabaseSchema = Record<string, never>;

function getEnvironmentVariables() : { supabaseUrl: string; supabaseAnonKey: string } {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase environment variables are not set.");
    }
    return { supabaseUrl, supabaseAnonKey };
}


export function getSupabaseBrowserClient() : SupabaseClient<SupabaseSchema> {
    const { supabaseUrl, supabaseAnonKey } = getEnvironmentVariables();
    return createBrowserClient( supabaseUrl, supabaseAnonKey);
}
