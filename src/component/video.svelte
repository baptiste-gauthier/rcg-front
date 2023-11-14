<script lang="ts">
    export let src: string;
    export let title: string;
    export let catchPhrase: string;
</script>


<section>
    <div class="video__container">
        <div class="video__title">
            <h1>{title}</h1>
            <p>{catchPhrase}</p>
        </div>
        <video loop muted autoplay>
            <source src="{src}" type="video/mp4" />
        </video>
    </div>
</section>

<style>

    video {
        /* margin-top: var(--padding-vertical); */
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        filter: brightness(70%);
    }
    section {
        padding-top: var(--padding-vertical);
    }

    .video__container {
        height: 60vh;
        position: relative;
    }

    h1,p {
        color: white;
        text-align: center;

    }

    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 6vw;
    }

    .video__title {
        position : absolute;
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>