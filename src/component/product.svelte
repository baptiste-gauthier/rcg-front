<script lang="ts">

    export let title: string;
    export let img: string;
    export let subTitle: string;

</script>

<a href="/detail">
    <div class="product">
        <div class="product__img" style="background-image: url('{img}');"></div>
        <p class="product__title">{title}</p>
        <p class="product__subtitle">{subTitle}</p>
    </div>
</a>

<style lang="scss">
    .product__title {
        text-transform: uppercase;
        font-weight: 700;
        margin-top: .5rem;
    }
    .product__subtitle {
        text-decoration: underline;
    }
    .product__img {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 40vh;
        border-radius: 15px;
    }
    a {
        display: block;
        color: var(--black);
    }
</style>