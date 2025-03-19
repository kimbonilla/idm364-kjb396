<script>
    import { bag } from '$lib/cartServices.js';
    let count = 0;
    $: bag.subscribe(items => {
        count = items.reduce((sum, item) => sum + item.quantity, 0);
    });
</script>

<header>
    <section class="top-nav">
        <div>
            <a href="../"><h2>Lego</h2></a>
        </div>
        <input id="menu-toggle" type="checkbox">
        <label class="menu-button-container" for="menu-toggle">
        <span class="menu-button"></span>
        </label>
        <ul class="menu">
            <li><a href="../shop">Shop</a></li>
            <li><a href="../bag">Bag &lpar;<span class="bag-count">{count}</span>&rpar;</a></li>
        </ul>
    </section>
</header>