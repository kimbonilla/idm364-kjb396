import { supabase } from '$lib/server/supabase_client';

export async function load({ params }) {
    console.log('Fetching product with ID:', params.id); // Debugging

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single(); // Get the exact product

    if (error) {
        console.error('Error fetching product:', error);
        return { product: null };
    }

    return { product };
}