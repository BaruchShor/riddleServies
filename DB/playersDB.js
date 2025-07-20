import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.PUBLIC_PROJECT_URL,
    process.env.PUBLIC_ANON__API_KEY
);

export default supabase;