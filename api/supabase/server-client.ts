import  {createServerClient} from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/dist/server/request/cookies";

function getEnvironmentVariables() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase environment variables are not set.");
    }
    return { supabaseUrl, supabaseAnonKey };
}

const supabaseCreds = getEnvironmentVariables();

export async function createServerSupabaseServerClient(): Promise<SupabaseClient> {
    const { supabaseUrl, supabaseAnonKey } = supabaseCreds;

    const cookieStore = await cookies();

    const client = createServerClient( supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach((cookie) => {
                        cookieStore.set(cookie.name, cookie.value, cookie.options);
                });
            } catch (error) {         
                  console.error("Error setting cookies:", error);
                  // The `setAll` method was called from a Server Component.
                  // This can be ignored if you have middleware refreshing
                  // user sessions.
            }
          },
        }       
    });

   return client;
}