import { supabase } from "../lib/supabaseClient"

export default async function getUsers() {
  const { data, error } = await supabase
    .from('mentee')
    .select('*')

  if (error) throw error
  return data
}