<script>
	let { children } = $props();
	import './index.css';
	import Header from '$lib/Header.svelte';
</script>

<Header />
{@render children()}