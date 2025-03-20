<script>
    export let data;
    const product = data.product;
    import { latestOrder } from '$lib/cartServices.js';
    $: total = $latestOrder.reduce(
    (sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity),
    0
    );
</script>

<div class="bag-page">
    <h1>Order Confirmed!</h1>
    <h5>Thank you for your purchase!</h5>
    <div class="bag-items">
        {#if $latestOrder.length > 0}
            <ul>
                {#each $latestOrder as item}
                    <div class="bag-item">
                        <li>
                            <h4><strong>{item.name}</strong> — Quantity: {item.quantity}, Price: {item.price} each</h4>
                        </li>
                    </div>
                {/each}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
        {:else}
            <p>No items were found in the order.</p>
        {/if}
    </div>
    <a class="back" href="/shop"><h5>← Back to Shop</h5></a>
</div>