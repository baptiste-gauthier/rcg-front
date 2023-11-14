<script lang="ts">
import { onMount } from "svelte";
 

import Navbar from "./navbar.svelte";
import Lenis from '@studio-freight/lenis';
import Footer from "./footer.svelte";

let lenisInstance: Lenis;

onMount(() => {
    lenisInstance = new Lenis();

    lenisInstance.on('scroll', (e: any) => {
    console.log(e)
    })

    function raf(time: any) {
        lenisInstance.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})


</script>

<Navbar />

<slot />

<Footer lenisInstance = {lenisInstance}/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Poppins', sans-serif;
    }

    :global(:root) {
        --black : #000000;
        --light-black : #2C2C2C;
        --padding-horizontal : 14vw;
        --padding-vertical : 4rem;
    }

    :global(ul) {
        list-style: none;
    }

    :global(a) {
        text-decoration: none;
    }

    :global(section) {
        padding: 0 var(--padding-horizontal) var(--padding-vertical) var(--padding-horizontal);
    }

    :global(h2) {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 3rem;
    }

    :global(.text-center) {
        text-align: center;
    }

    :global(.stroke) {
        color: white;
        font-family: 'Bebas Neue', sans-serif;
        background: white;
        text-shadow: 2px 2px 0 var(--black), 2px -2px 0 var(--black), -2px 2px 0 var(--black), -2px -2px 0 var(--black), 2px 0px 0 var(--black), 0px 2px 0 var(--black), -2px 0px 0 var(--black), 0px -2px 0 var(--black);
    }

    /* lenis  */

    :global(.lenis) {
    height: auto;
    }

    :global(.lenis.lenis-smooth ){
    scroll-behavior: auto;
    }

    :global(.lenis.lenis-smooth [data-lenis-prevent]) {
    overscroll-behavior: contain;
    }

    :global(.lenis.lenis-stopped) {
    overflow: hidden;
    }

    :global(.lenis.lenis-scrolling iframe) {
    pointer-events: none;
    }

    :global(.italic) {
        font-style: italic;
    }

    :global(.bold) {
        font-weight: 700;
    }


</style>