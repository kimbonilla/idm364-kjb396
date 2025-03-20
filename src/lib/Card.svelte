<script>
    import { addToBag } from '$lib/cartServices.js';
    export let id, name, price, pieceCount, image;
    const product = { id, name, price, pieceCount, image };
</script>

<a class="card-link" href={`/shop/${id}`}>
    <div class="product-card">
        <img src={`/images/products/${image}`} alt="{name}" />
        <div class="product-info">
            <div class="piece-count">
                <img src="/images/lego-piece.png" alt="Lego Piece" />
                <p>{pieceCount}</p>
            </div>
            <h4>{name}</h4>
            <h6>{price}</h6>
        </div>
        <button on:click|preventDefault={() => addToBag(product)} class="add-to-cart">
            <img src="/images/shopping-bag.png" alt="Shopping Bag"/>
            <h6>Add to Bag</h6>
        </button>
    </div>
</a>