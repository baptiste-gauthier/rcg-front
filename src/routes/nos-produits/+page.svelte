<script lang="ts">
    import type {PageData} from "./$types";
    import img from '../../lib/assets/vladislav-bychkov-CcJpFWrXlb8-unsplash(1).jpg'
  import Band from "../../component/band.svelte";

    export let data : PageData;

</script>

<Band img={img} title="MMA"/>

{#if data.products && data.products.length !== 0}
    {#each data.products as product (product.id)}
        {product.name}
    {/each}
{:else}
    <!-- Gérer le cas où data.products est undefined ou vide -->
    <p>Aucun produit n'est disponible.</p>
{/if}





