<script lang="ts">

    import Banner from "../../component/banner.svelte";
    import Step from "../../component/step.svelte";
    import img1 from "../../lib/assets/jyotirmoy-gupta-ryOMte-FerE-unsplash 1.png";
    import img2  from "../../lib/assets/nathan-dumlao-YmNIHXdTfPg-unsplash 1.png";
    import img3  from "../../lib/assets/nelson-ndongala-alRAEyW1yFg-unsplash 1.png";
    import imgBanner from "../../lib/assets/mark-adriane-FH6JcaCrYJ0-unsplash 1.png";
    import logoPartner1 from "../../lib/assets/1200px-Swoosh 1.png";
    import logoPartner2 from "../../lib/assets/Adidas_Logo 1.png";
    import logoPartner3 from "../../lib/assets/METAL BOXE 1.png";
    import logoPartner4 from "../../lib/assets/logo-arte-capoeira 1.png";
    import logoPartner5 from "../../lib/assets/Venum_Logo 1.png";
    import logoPartner6 from "../../lib/assets/dragon-bleu-logo 1.png";
    import SliderDiscover from "../../component/sliderDiscover.svelte";
    import { gsap } from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        const section = document.querySelector('.swiper');
        const ball: HTMLElement = document.querySelector('.ball') as HTMLElement;

                
        if (ball !== null && section !== null) {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" });
    let yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

    section.addEventListener("mouseenter", () => {
        // Survol du bloc, activer l'animation
        gsap.to(".ball", { scale: 1, duration: 0.6, ease: "power3" });
    });

    section.addEventListener("mouseleave", () => {
        // Sortie du bloc, désactiver l'animation
        gsap.to(".ball", { scale: 0, duration: 0.6, ease: "power3" });
    });

    window.addEventListener("mousemove", (e) => {
        // Vérifier si la souris est à l'intérieur du bloc avant de mettre à jour les coordonnées
        if (isMouseInsideSection(e, section)) {
            xTo(e.clientX);
            yTo(e.clientY);
        }
    });

    // Fonction pour vérifier si la souris est à l'intérieur du bloc
    function isMouseInsideSection(event: any, element: any) {
        const rect = element.getBoundingClientRect();
        return (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );
    }
}
        
        
    })

</script>

<div class="ball"><svg width="37" height="16" viewBox="0 0 67 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65.8464 19.4231L1.00024 19.4231M1.00024 19.4231L19.0566 1.36678M1.00024 19.4231L19.0566 37.4794" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>DRAG<svg width="37" height="16" viewBox="0 0 67 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00024 19.4231H65.8464M65.8464 19.4231L47.7901 37.4794M65.8464 19.4231L47.7901 1.36677" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></div>

<section id="we_are">
    <h2> Qui sommes nous ?</h2>
    <div class="we_are__container">
        <div class="we_are__step">
            <Step number="01" title="Notre vision"
            content="Chez RCG, nous avons une passion : aider les petits clubs sportifs à créer une identité unique.
             Nous comprenons <strong>l'importance de la fierté de club</strong> et de la cohésion d'équipe, c'est pourquoi nous mettons
              à votre disposition une plateforme dédiée à la <strong>personnalisation de vêtements sportifs</strong> pour votre club."/>
            <div class="we_are__img">
                <img src="{img1}" alt="notre vision">
            </div>
        </div>
        <div class="we_are__step">
            <div class="we_are__img">
                <img src="{img2}" alt="notre vision">
            </div>
            <Step number="02" title="Notre mission"
            content="Notre mission est de donner à chaque petit club sportif la possibilité de briller sur le terrain,
             de se démarquer et de <strong>renforcer son esprit d'équipe</strong> grâce à des équipements personnalisés. Quel que soit 
             votre sport, que ce soit <strong>la capoeira, la boxe, le MMA, le football</strong> ou tout autre, nous sommes là pour vous 
             aider à créer des tenues qui reflètent l'essence de votre club."/>
        </div>
        <div class="we_are__step">
            <Step number="03" title="Notre engagement envers la qualité"
            content="La qualité est au cœur de notre entreprise. Nous collaborons étroitement avec des fabricants de 
            confiance pour vous garantir des produits de haute qualité qui résistent à l'usure du sport. Votre satisfaction
             est notre priorité absolue, et nous nous engageons à vous fournir des équipements qui répondent à vos exigences."/>
            <div class="we_are__img">
                <img src="{img3}" alt="notre vision">
            </div>
        </div>
    </div>


</section>

<Banner img="{imgBanner}" content="Une question ? Une demande ? 
Notre équipe est là pour vous aider à concrétiser vos idées de personnalisation." />

<section id="partners">
    <p class="text-center">L'équipe de RCG est composée de <strong>passionnés du sport et de créateurs talentueux.</strong>
         Nous comprenons les besoins spécifiques des petits clubs sportifs, et nous sommes
          là pour vous guider dans le processus de personnalisation. Notre objectif est de
           vous aider à créer des tenues qui<strong> renforcent le sentiment d'appartenance à votre club.</strong></p>
</section>

<section id="trust">
    <h2 class="text-center">Ils nous font confiance</h2>
    <div class="gallerie">
        <div class="gallery__bloc gallery__line_one">
            <div><img src="{logoPartner1}" alt="logo partenaires"></div>
            <div><img src="{logoPartner2}" alt="logo partenaires"></div>
            <div><img src="{logoPartner3}" alt="logo partenaires"></div>
        </div>
        <div class="gallery__bloc gallery__line_two">
            <div><img src="{logoPartner4}" alt="logo partenaires"></div>
            <div><img src="{logoPartner5}" alt="logo partenaires"></div>
            <div><img src="{logoPartner6}" alt="logo partenaires"></div>
        </div>
    </div>
</section>

<section id="discover">
    <h2>Découvrez tous nos produits</h2>

    <SliderDiscover />
</section>

<style lang="scss">
    .we_are__step {
        display: flex;
        align-items: center;
        gap: 4rem;
    }
    .we_are__img {
        flex: 1;
        height: 450px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 15px;
        }
    }
    h2 {
        padding: var(--padding-vertical) var(--padding-horizontal);
        text-align: center;
    }
    .we_are__container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    #partners {
        padding-top: var(--padding-vertical);
    }
    .gallerie {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .gallery__line_one, .gallery__line_two {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & > div {
            width: 200px;
        }
    }
    #discover {
        background-color: #2C2C2C;
        color: white;
    }
    .gallery__bloc {
        & > div {
            height: 150px;
            width: 150px;
        }
    }

    :global(.ball) {
        mix-blend-mode: difference;
        width: 350px;
        height: 350px;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        border-radius: 50%;
        pointer-events: none;
        background-color: transparent;
        color: #FFFFFF;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        // padding: 2rem;
        & svg {
            margin: 0 1rem;
        }
    }
</style>