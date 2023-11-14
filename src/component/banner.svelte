<script lang="ts">
  import ButtonBorderWhite from "./buttons/buttonBorderWhite.svelte";

    export let img: string;
    export let content: string;

</script>

<section id="banner" style="background-image: url('{img}');">
    <div class="banner__container">
        <div class="banner__content text-center">
            {content}
        </div>
        <ButtonBorderWhite src="/contact" name="En savoir plus"/>
    </div>
</section>

<style lang="scss">
    #banner {
        height: 25vh;
        padding: 0;
        background-position: center;
        background-repeat: no-repeat;
    }
    .banner__container {
        background-color: rgba(0, 0, 0, 0.288);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .banner__content {
        color: white;
    }
</style>