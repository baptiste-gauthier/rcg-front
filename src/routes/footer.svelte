<script lang="ts">

import type Lenis from "@studio-freight/lenis";

export let lenisInstance: Lenis;

function scrollTop() {
    lenisInstance.scrollTo("top");
}

</script>

<footer>
        <div class="footer__left__content">
            <div class="footer__logo">
                RCG.FR
            </div>
            <div class="footer__lists">
                <ul>
                    <li class="footer__title__list"><a href="/">Nos disciplines</a></li>
                    <li><a href="/">CAPOEIRA</a></li>
                    <li><a href="/">BOXE</a></li>
                    <li><a href="/">mma</a></li>
                    <li><a href="/">FOOTBALL</a></li>
                </ul>
                <ul>
                    <li><a href="/">Mentions légales</a></li>
                    <li><a href="/">qui sommes-nous</a></li>
                    <li><a href="/">conditions générales d’utilisation</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            ©RCG.FR 2023
        </div>
        <div class="footer__right__content">
            <button class="footer__scrollTop" on:click={scrollTop}>
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7879 37.1373L25.7884 13.9999M25.7884 13.9999L36.4307 24.4441M25.7884 13.9999L15.1461 24.4441" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="25.5" cy="25.5" r="25" stroke="black"/>
                </svg>
            </button>
            <div class="footer__rs__container">
                <ul class="footer__rs">
                    <li><a href="/">Instagram</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12.7766L13 1M13 1V12.3056M13 1H1.48" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <li><a href="/">Twitter</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12.7766L13 1M13 1V12.3056M13 1H1.48" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <li><a href="/">Facebook</a><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12.7766L13 1M13 1V12.3056M13 1H1.48" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
        
    
</footer>

<style lang="scss">

    footer {
        padding: var(--padding-vertical) var(--padding-horizontal);
        border-top: 2px solid var(--black);
        display: flex;
        justify-content: space-between;
    }
    .footer__title__list {
        font-weight: 700;
    }
    ul {
        text-transform: uppercase;
    }
    a {
        color : var(--black)
    }
    .footer__lists {
        display: flex;
        gap: 3rem;
    }
    .footer__logo {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 2rem;
        padding-bottom: 3rem;
    }
    .footer__copyright {
        align-self: end;
        font-family: 'Bebas Neue', sans-serif;
    }
    .footer__rs {
        display: flex;
        align-items: center;

        & svg {
            margin: 0 1rem;
        }
    }
    .footer__right__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .footer__scrollTop {
        background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    }

</style>