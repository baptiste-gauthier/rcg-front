<script lang="ts">
    import type {PageData} from "./$types";
    import img from '../../lib/assets/vladislav-bychkov-CcJpFWrXlb8-unsplash(1).jpg'
  import Band from "../../component/band.svelte";
  import AllProduct from "../../component/allProduct.svelte";

    export let data : PageData;

</script>

<Band img={img} title="MMA"/>

<section id="filter">
    <div class="select__filter">
        <div>
            <label for="category-select">Catégorie </label>

            <select name="category" id="category-select">
                <option value="">Choisir une discipline</option>
                <option value="mma">MMA</option>
                <option value="football">Football</option>
                <option value="boxe">Boxe</option>
            </select>
        </div>
        <div>
            <label for="size-select">Taille</label>

            <select name="select" id="size-select">
                <option value="">Choisir une taille</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
        </div>
        <div>
            <label for="color-select">Couleurs</label>

            <select name="color" id="color-select">
            <option value="">Choisir une couleur</option>
            <option value="black">Noir</option>
            <option value="white">Blanc</option>
            <option value="red">Rouge</option>
            </select>
        </div>
    </div>
</section>

<!-- {#if data.products && data.products.length !== 0}
    {#each data.products as product (product.id)}
        {product.name}
    {/each}
{:else}
    Gérer le cas où data.products est undefined ou vide
    <p>Aucun produit n'est disponible.</p>
{/if} -->

<AllProduct />

<style lang="scss">

    #filter {
        padding-top: var(--padding-vertical);
    }

    .select__filter {
        display: flex;
        align-items: center;
        gap: 2rem;

        & label {
            display: none;
        }
        & select {
            text-transform: uppercase;
            font-size: 1rem;
            padding: 5px 5px 5px 0;
            background: unset;
            border-bottom: 2px solid black;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            outline: none;
            padding: 5px;
            // background-color: rgba(255, 0, 0, 0.267);
            width: 100%;
            font-size: 1rem;
        }
    }

</style>





