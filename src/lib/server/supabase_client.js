import { createClient } from '@supabase/supabase-js';

const supabase_url = '';
const supabase_anon_key = '';

if (!supabase_url || !supabase_anon_key) {
    console.error(':rotating_light: Supabase environment variables are missing!');
    throw new Error('Supabase configuration is missing. Check your environment variables.');
}

console.log(':white_check_mark: Supabase URL:', supabase_url);
// console.log(':white_check_mark: Supabase ANONKEY:', supabase_anon_key);

export const supabase = createClient(supabase_url, supabase_anon_key);