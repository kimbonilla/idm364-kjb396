<script>
    export let data;
    const product = data.product;
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
                    <div class="bag-item">
                        <li>
                            <h4><strong>{item.name}</strong> — {item.quantity} sets</h4>
                            <br />
                            <div class="add-remove">
                                <button on:click={() => removeFromBag(item.id)}><h5>&dash;</h5></button>
                                <button on:click={() => addToBag(item)}><h5>&plus;</h5></button>
                                <button on:click={() => deleteFromBag(item.id)}><h5>Remove</h5></button>
                            </div>
                        </li>
                    </div>
                {/each}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button on:click={clearBag}><h5>Clear Bag</h5></button>
            <button on:click={submitOrder}><h5>Submit Order</h5></button>
        {:else}
            <h5>Your bag is empty.</h5>
        {/if}
    </div>
    </div>