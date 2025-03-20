<script>
    export let data;
    const product = data.product;
    import { addToBag } from '$lib/cartServices.js';
</script>

<!-- Add error state UI -->
<div class="product-page">
    <img class="product-image" src="/images/products/{product.image}" alt="{name}"/>
    <div class="product-content">
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
        <div class="piece-count">
            <img src="/images/lego-piece.png" alt="Lego Piece" />
            <h6>{product.pieceCount}</h6>
        </div>
        <p>{product.description}</p>
        <button class="add-to-cart" on:click={() => addToBag(product)}>
            <img src="/images/shopping-bag.png" alt="Shopping Bag" />
            <h6>Add to Bag</h6>
        </button>
    </div>
    <a class="back" href="/shop"><h5>← Continue Shopping</h5></a>
</div>