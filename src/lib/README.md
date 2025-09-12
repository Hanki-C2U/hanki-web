# Supabase Integration Note

The Supabase client files (`supabaseClient.ts` and `../supabase_creds/supabase.ts`) have been removed from the dev branch. 

## Why?

For the hackathon demonstration, we've replaced all Supabase functionality with local mock data implementations to:

1. Simplify development in the dev branch
2. Remove external dependencies for demo purposes
3. Make the application work without requiring Supabase credentials

## Mock Implementations

- Authentication is simulated using localStorage
- User profiles, mentors, and mentees are stored as mock data
- All database operations are replaced with JavaScript operations on local data

## For Production

If you're looking to implement the actual Supabase integration:

1. Create a `supabaseClient.ts` file in this directory
2. Configure it with your Supabase project URL and anon key
3. Replace the mock implementations with actual Supabase calls

The main branch may contain the full Supabase integration.
