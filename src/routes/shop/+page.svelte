<script>
    import Card from '$lib/Card.svelte';

    export let data;
</script>

<div class="mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-md">
    <div class="main-cta text-left">
        <h2 class="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
        <p class="mt-4 text-lg text-gray-600">
            Shop our exclusive collection today and enjoy amazing discounts.
        </p>
    </div>

    {#if data.products && data.products.length > 0}
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each data.products as product}
                <Card
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    id={product.id}
                />
            {/each}
        </div>
    {:else}
        <p class="mt-4 text-gray-600">No products found.</p>
    {/if}
</div>