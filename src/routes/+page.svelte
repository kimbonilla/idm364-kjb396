<script>
    const { data } = $props();
    $inspect(data);
    import Card from '$lib/Card.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit" target="_blank">svelte.dev/docs/kit</a> to read the documentation</p>

{#if data.products.length > 0}
        <ul>
            {#each data.products as product}
                <li>{product.name}</li>
            {/each}
        </ul>
    {:else}
        <p>No products found.</p>
    {/if}