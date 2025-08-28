import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_APP_PROJECT_URL
const key = import.meta.env.VITE_APP_KEY
export const supabasase = createClient(url,key)