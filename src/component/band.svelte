<script lang="ts">
    export let title: string;
    export let img: string;
</script>

<div class="band" style="background-image: url('{img}');">
    <div class="band__container">
        <h1>{title}</h1>
    </div>
</div>

<style lang="scss">
    .band {
        height: 30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .band__container {
        background-color: rgba(0, 0, 0, 0.274);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-family: 'Bebas Neue', sans-serif;
        color: white;
        font-size: 3vw;
    }
</style>