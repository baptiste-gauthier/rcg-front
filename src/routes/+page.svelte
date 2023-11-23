<script lang="ts">
    import ButtonBorderBlack from "../component/buttons/buttonBorderBlack.svelte";
    import Card from "../component/card.svelte";
    import Video from "../component/video.svelte";
    import source from '../lib/assets/pexels-cottonbro-5310854 (720p).mp4';
    import img1 from '../lib/assets/pexels-artem-podrez-6253176.jpg';
    import img3 from '../lib/assets/pexels-koolshooters-8520628.jpg';
    import img2 from '../lib/assets/pexels-murat-işik-18347694.jpg';
    import teamImg from '../lib/assets/logan-weaver-lgnwvr-CS9ptdGhE0M-unsplash(1).jpg'
    import ButtonBorderWhite from "../component/buttons/buttonBorderWhite.svelte";
    import Step from "../component/step.svelte";
    import Testimonial from "../component/testimonial.svelte";
    import imgTesti from "../lib/assets/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg";
</script>

<Video title="rcg.fr" catchPhrase="Le meilleur de la personnalisation de vétements sportifs" src={source} />

<section class="section__intro">
    <h2 class="text-center">Des tenues de sports accessibles a tous</h2>
    <p class="text-center">Candy cake sweet dessert brownie caramels marshmallow sweet shortbread. Sesame snaps tootsie roll 
        liquorice oat cake croissant chupa chups. Sweet roll marzipan bear claw chupa chups wafer cake tootsie 
        roll cheesecake. Powder carrot cake tootsie roll pastry cupcake jujubes.</p>

    <ButtonBorderBlack src='/products' name="découvrir" />
</section>

<!-- TODO faire une boucle depuis le back -->
<section class="section__card">
    <Card title='Kimono' img={img1} />
    <Card title='Tee-shirt' img={img2}/>
    <Card title='Short' img={img3}/>
</section>

<section class="section__team">
    <h2>Un savoir faire a votre disposition</h2>
    <div class="team__container">
        <div class="team__image">
            <img src="{teamImg}" alt="équipe rcg">
        </div>
        <div class="team__texte">
            <h3>Une équipe pleine de talents</h3>
            <p>Candy cake sweet dessert brownie caramels marshmallow sweet shortbread. 
                Sesame snaps tootsie roll liquorice oat cake croissant chupa chups. 
                Sweet roll <strong>marzipan</strong> bear claw chupa chups wafer cake tootsie roll cheesecake. Powder carrot cake tootsie roll pastry <strong>cupcake</strong> jujubes.</p>
                <p>Shortbread cookie carrot cake sugar plum lemon drops lollipop lemon drops <strong>marshmallow</strong> tootsie roll. Apple pie wafer icing lemon drops 
                    pastry marzipan macaroon halvah.</p>
                    <ButtonBorderWhite src='/qui-sommes-nous' name="découvrez notre équipe" />
        </div>

    </div>
</section>

<section class="section__step">
    <Step number="01" title="Devis" content="Remplissez votre formulaire de commande et obtenez rapidement votre devis personnalisé." />
    <Step number="02" title="Maquette et approbation" content="Une fois que vous avez approuvé le devis, notre équipe commence à travailler sur votre maquette de conception." />
    <Step number="03" title="Conception et Livraison" content="Lorsque vous êtes satisfait de la maquette, nous commençons la fabrication selon vos spécifications et l'envoyons directement à votre domicile." />
</section>

<!-- TODO -> rendre dynamique -->
<section class="section__testimonials">
    <h2 class="text-center">Ils nous font <span class="stroke">confiance</span></h2>
    <Testimonial img={imgTesti} testimonial="Fruitcake dessert soufflé marzipan tootsie roll jelly beans liquorice ice cream chupa chups. Gummies apple pie danish liquorice chocolate"
     firstName="John" lastName="Doe" job="Web Developper" />
</section>

<style lang="scss">
    .section__intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap : 1.5rem;
    }

    .section__card {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    .section__team {
        padding-top: var(--padding-vertical);
        background-color: var(--light-black);
        color: white;
    }
    .team__container > div {
        width: 50%;
    }
    .team__container {
        padding-top: var(--padding-vertical);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
    .team__image {
        height : 800px;
    }
    .team__texte {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    h3 {
        text-transform: uppercase;
        font-size: 2rem;
    }
    .section__step {
        display: flex;
        padding-top: var(--padding-vertical);
        gap: 4rem;
    }
    .section__testimonials {
        position: relative;
    }
</style>



