<script lang="ts">
    import logo from '../lib/assets/LOGO RCG  [Récupéré].svg';
    import { onMount } from 'svelte';

    onMount(() => {
        let item: HTMLElement = document.querySelector('.navigation__submenu') as HTMLElement;
        let list: HTMLElement = document.querySelector('.navigation__sublist') as HTMLElement; 
        let navigation: HTMLElement = document.querySelector('#navigation') as HTMLElement; 


        item.addEventListener('mouseover' , (e: Event) => {
            let target: HTMLElement = e.target as HTMLElement;
            let  ul: HTMLElement = target.nextElementSibling as HTMLElement;
            ul.style.display = "block"; 
        })

        list.addEventListener('mouseleave' , (e: Event) => {
            let target: HTMLElement = e.target as HTMLElement;
            target.style.display = "none";
        })

        navigation.addEventListener('mouseleave' , (e: Event) => {
            list.style.display = "none";
        })
    });
    

</script>


<nav id="navigation">
    <div class="logo__container">
        <a href="/"><img src="{logo}" alt="logo rcg"></a>
    </div>

    <div class="navigation__container">
        <ul class="navigation__list">
            <li><a href="/nos-produits">nos produits</a></li>
            <li><a href="/qui-sommes-nous">qui sommes-nous</a></li>
            <li class="navigation__submenu">
                <a href="/test">disciplines</a>
                <ul class="navigation__sublist">
                    <li>Football</li>
                    <li>Boxe</li>
                    <li>Capoeira</li>
                    <li>MMA</li>
                </ul>
            </li>
            <li class="btn"><a href="/contact">contact</a></li>
        </ul>
    </div>
</nav>

<style lang="scss">
    
    nav {
        border-bottom: solid 2px var(--black);
        display: flex;
        align-items: center;
        padding: 1.5rem var(--padding-horizontal);
        // margin-bottom: var(--padding-vertical);
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 20;
    }

    .navigation__list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        justify-self: center;

        a {
            color: var(--black);
        }

        & > li {
            text-transform: uppercase;
            &:hover:not(.navigation__submenu) {
                &::after {
                    display: block;
                }
            }
            // &:hover.navigation__submenu {
            //     .navigation__sublist {
            //         display: block;
            //     }
            // }
        }

        li::after {
            content : '';
            width : 100%; 
            background-color: var(--black);
            height: 2px;
            display: none;

        }

    }
    .navigation__sublist {
        transform: translateY(30%);
        position: fixed;
        border: 2px solid black; /* Appliqué à tous les côtés sauf le haut */
        border-top: 0;
        background-color: white;
        display: none;
        & li {
            width: 100%;
            padding: .2rem 1.5rem;
            cursor: pointer;
            // transition: .2s;
            &:hover {
                background-color: black;
                color: white;
            }
        }
    }

    .navigation__submenu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    img {
        width: 100%;
        height: 100%;
    }

    .logo__container {
        width: 100px;
    }
    .navigation__container {
        width: 100%;
        display: flex;
        justify-content: center;
    }


</style>

