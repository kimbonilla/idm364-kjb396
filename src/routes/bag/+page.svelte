<script>
    import { bag, addToBag, removeFromBag, deleteFromBag, clearBag, latestOrder } from '$lib/cartServices.js';
    import { onDestroy } from 'svelte';
    let bagItems = [];
    const unsubscribe = bag.subscribe(value => {
    bagItems = value;
    });
    onDestroy(unsubscribe);
    $: total = $bag.reduce(
    (sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity),
    0
    );
    import { goto } from '$app/navigation';
    function submitOrder() {
    latestOrder.set($bag);
    clearBag();
    goto('/order-confirmation');
    }
</script>

<div class="bag-page">
    <h1>Your Bag</h1>
    <div class="bag-items">
        {#if bagItems.length > 0}
            <ul>
                {#each bagItems as item}
                    <li>
                        <strong>{item.name}</strong> — {item.quantity} sets
                        <br />
                        <button on:click={() => removeFromBag(item.id)}>&dash;</button>
                        <button on:click={() => addToBag(item)}>&plus;</button>
                        <button on:click={() => deleteFromBag(item.id)}>Remove</button>
                    </li>
                {/each}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button on:click={clearBag}>Clear Bag</button>
            <button on:click={submitOrder}>Submit Order</button>
        {:else}
            <p>Your bag is empty.</p>
        {/if}
    </div>
    </div>