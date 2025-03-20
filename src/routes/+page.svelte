<script>
    export let data;
    const product = data.product;
    import Card from '$lib/Card.svelte';
    let featuredProducts = data.products.slice(6, 10);
</script>

<div class="homepage">
    <div class="hero">
        <h1>Build Your Imagination, One Brick at a Time</h1>
        <img src="/images/hero.png" alt="Lego Hero" />
    </div>
    <div class="featured-products">
        <h2>Featured Products</h2>
        <div class="products-display">
            {#each featuredProducts as product}
                <Card
                    image={product.image}
                    name={product.name}
                    pieceCount={product.pieceCount}
                    price={product.price}
                    description={product.description}
                    id={product.id}
                />
            {/each}
        </div>
    </div>
</div>