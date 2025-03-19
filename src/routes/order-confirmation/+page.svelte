<script>
    import { latestOrder } from '$lib/cartServices.js';
    $: total = $latestOrder.reduce(
    (sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity),
    0
    );
</script>

<div class="confirmation">
    <h1>Order Confirmed!</h1>
    <p>Thank you for your purchase! Here&apos;s what you ordered:</p>

    {#if $latestOrder.length > 0}
        <ul>
            {#each $latestOrder as item}
                <li>
                    <strong>{item.name}</strong> — Quantity: {item.quantity}, Price: {item.price}
                </li>
            {/each}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
    {:else}
        <p>No items were found in the order.</p>
    {/if}

    <a href="/shop">Back to Shop</a>
</div>