import { supabase } from "../lib/supabaseClient";

export default async function getMentee(id: string | undefined) {
  const { data, error } = await supabase
    .from("mentee")
    .select("*")
    .eq("supabaseId", id)
    .single();
  if (error) throw error;

  return data;
}
