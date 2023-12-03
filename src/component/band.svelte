<script lang="ts">
    export let title: string;
    export let img: string;
</script>

<div class="band" style="background-image: url('{img}');">
    <div class="band__container">
        <h1>{title}</h1>
    </div>
    <div class="band__path_way">
        <p>Accueil >> nos produits >> <span class="active">mma</span></p>
    </div>
</div>

<style lang="scss">
    .band {
        height: 30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
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
    .band__path_way {
        text-transform: uppercase;
        color: white;
        position: absolute;
        bottom: calc(var(--padding-vertical) / 3);
        font-size: .8rem;
        left: var(--padding-horizontal);
    }
    .active {
        text-decoration: underline;
    }
</style>