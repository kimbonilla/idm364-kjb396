<script>
    import Card from '$lib/Card.svelte';

    export let data;
</script>

<div class="shop-page">
    <div class="shop-intro-text">
        <h2 class="center-text">Shop All Sets</h2>
    </div>

    {#if data.products && data.products.length > 0}
        <div class="products-display">
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
        <p>No products found.</p>
    {/if}
</div>