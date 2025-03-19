<script>
    const { data } = $props();
    $inspect(data);
    import Card from '$lib/Card.svelte';
    // const featuredProducts = products.filter(p => ['orchid', 'rose', 'succulent'].includes(p.id));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit" target="_blank">svelte.dev/docs/kit</a> to read the documentation</p>

<!-- <div class="products-display">
    {#each data.products as product}
        <Card 
            name={product.name}
            pieceCount={product.pieceCount}
            price={product.price}
            description={product.description}
            id={product.id}
        />
    {/each}
</div> -->

{#if data.products.length > 0}
        <ul>
            {#each data.products as product}
                <li>{product.name}</li>
            {/each}
        </ul>
    {:else}
        <p>No products found.</p>
    {/if}