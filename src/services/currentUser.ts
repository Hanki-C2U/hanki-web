import { supabase } from "../lib/supabaseClient"

export default async function getCurrentMentee() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("No user signed in")

  // Replace 'user_id' with the actual column name in your 'mentee' table
  const { data, error } = await supabase
    .from('mentee')
    .select('*')
    .eq('supabaseId', user.id) // or .eq('auth_id', user.id)

  if (error) throw error
  return data?.[0] // Return the first (and likely only) result
}