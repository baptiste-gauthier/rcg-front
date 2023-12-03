<script lang="ts">
    import Product from "./product.svelte";
    import img from '../lib/assets/product/tee-shirt.png';
    import imgTeeShirt from '../lib/assets/product/tee-shirt-2.png';
    import imgRashGuard from '../lib/assets/product/rashguard.png';
    import imgPantalon from '../lib/assets/product/pantalon.png';
    import imgShort from '../lib/assets/product/short.png';
    import imgSweat from '../lib/assets/product/sweat.png';
</script>

<section id="all__product">
    <div class="all__product__container">
        <Product img="{img}" title="Tee-shirt" subTitle="subtitle"></Product>
        <Product img="{imgRashGuard}" title="Rahguard" subTitle="subtitle"></Product>
        <Product img="{imgTeeShirt}" title="Tee-shirt" subTitle="tee shirt ample"></Product>
        <Product img="{imgPantalon}" title="Pantalon" subTitle="Pantalon"></Product>
        <Product img="{imgShort}" title="Title" subTitle="subtitle"></Product>
        <Product img="{imgSweat}" title="Title" subTitle="subtitle"></Product>
    </div>
</section>

<style lang="scss">
    .all__product__container {
        display: grid;
        grid-template-columns: repeat(4,minmax(0,1fr));;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
</style>