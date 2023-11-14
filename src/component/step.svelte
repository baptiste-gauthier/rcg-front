<script lang="ts">
    export let number: string;
    export let title: string;
    export let content: string;
</script>

<div class="step">
    <div class="number">{number}</div>
    <div class="title">{title}</div>
    <p class="content">{@html content}</p>
</div>

<style lang="scss">
    .step {
        border-bottom: 1px solid black;
        flex: 1;
    }
    .number, .title {
        font-family: 'Bebas Neue', sans-serif;
    }
    .title {
        font-size: 2rem;
    }
    .number {
        font-size: 3rem;
    }
    .content {
        padding: 3rem 0;
    }
</style>

