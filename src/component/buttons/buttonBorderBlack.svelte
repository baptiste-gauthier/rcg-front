<script lang="ts">
    export let src: string;
    export let name: string;
</script>

<a href="{src}">{name}</a>

<style lang="scss">
    a {
        text-transform: uppercase;
        padding: 0.5rem 4rem;
        border-radius: 2rem;
        border: 2px solid var(--black);
        color: var(--black);
        font-weight: 700;
        text-align: center;
        transition: all .2s ease;

        &:hover {
            background-color: var(--black);
            color: white;
        }
    }
</style>

