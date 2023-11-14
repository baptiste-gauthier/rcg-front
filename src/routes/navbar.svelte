<script>
    import logo from '../lib/assets/LOGO RCG  [Récupéré].svg';
</script>


<nav>
    <div class="logo__container">
        <a href="/"><img src="{logo}" alt="logo rcg"></a>
    </div>

    <div class="navigation__container">
        <ul>
            <li><a href="/nos-produits">nos produits</a></li>
            <li><a href="/qui-sommes-nous">qui sommes-nous</a></li>
            <li><a href="/test">disciplines</a></li>
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

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        justify-self: center;

        a {
            color: var(--black);
        }

        li {
            text-transform: uppercase;
            &:hover {
                &::after {
                    display: block;
                }
            }
        }

        li::after {
            content : '';
            width : 100%; 
            background-color: var(--black);
            height: 2px;
            display: none;

        }

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