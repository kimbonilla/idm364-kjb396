<script>
    export let data;
    console.log('Product data:', data);
    $: product = data?.product || {};
    $: {
        if (!data?.product) {
            console.error('No product data available');
        }
    }
    import { addToBag } from '$lib/cartServices.js';
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
    <button class="add-to-cart" on:click={() => addToBag(product)}>
        <img src="/images/shopping-bag.png" alt="Shopping Bag" />
        <h6>Add to Bag</h6>
    </button>
    <a href="/shop">← Continue Shopping</a>
</div>