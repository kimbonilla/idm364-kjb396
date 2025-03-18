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
<div class="product-page">
    <h1 class="center-text">{product.name}</h1>
    <img src="/images/orchid.png" alt="{name}" />
    <p>{product.price}</p>
    <div class="piece-count">
        <img src="/images/lego-piece.png" alt="Lego Piece" />
        <p>{product.pieceCount}</p>
    </div>
    <p>{product.description}</p>
    <button class="add-to-cart"><img src="/images/shopping-bag.png" alt="Shopping Bag"/><h6>Add to Bag</h6></button>
    <a href="/shop">← Continue Shopping</a>
</div>