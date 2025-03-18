import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ysegbctpeznspbgcmato.supabase.co';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY; // Use env variable for security
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
    try {
        // Replace 'your_table_name' with the actual table name
        const { data, error } = await supabase.from('products').select('*');

        if (error) throw error;

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}