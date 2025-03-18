<script>
    export let data;

    // Debugging data
    console.log('Product data:', data);

    // Error handling
    $: product = data?.product || {};
    $: {
        if (!data?.product) {
            console.error('No product data available');
        }
    }

</script>

<!-- Add error state UI -->
<div class="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">

    <h1 class="mt-6 text-4xl font-bold text-gray-900">{product.name}</h1>
    <p class="mt-2 text-xl text-gray-600">${product.price}</p>
    <p class="mt-4 text-gray-700">{product.description}</p>

    <!-- Add to Cart Button -->
    <button
        class="mt-6 rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700">
        Add to Cart
    </button>

    <a href="/products" class="mt-6 block text-blue-600 hover:underline">← Back to Products</a>
</div>