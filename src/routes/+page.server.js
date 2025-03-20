import { supabase } from '$lib/server/supabase_client';

export async function load() {
    console.log(':arrows_counterclockwise: Fetching products from Supabase...');

    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error(':x: Supabase error:', error);
        throw new Error(`Supabase fetch failed: ${error.message}`);
    }

    console.log(':white_check_mark: Fetched products:', data);

    return { products: data ?? [] };
}