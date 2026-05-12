import { createClient } from '@supabase/supabase-js'

// TODO: Replace with real Supabase credentials when ready
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zaofsgdiedfdikwkorai.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphb2ZzZ2RpZWRmZGlrd2tvcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MzM3MjMsImV4cCI6MjA5NDEwOTcyM30.LoKDfLrvuz_XkixtfWtJ0vWT3y7CduQH5Fh4aYmXtZE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
