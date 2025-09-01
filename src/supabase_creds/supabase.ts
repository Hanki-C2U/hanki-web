import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_APP_PROJECT_URL
const key = import.meta.env.VITE_APP_KEY

export const supabasase = createClient(url, key, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

// Test the connection and log real-time status
console.log('🔌 Supabase client initialized with real-time enabled')
console.log('📡 Supabase URL:', url?.substring(0, 30) + '...')
console.log('🔑 API Key configured:', key ? 'Yes' : 'No')