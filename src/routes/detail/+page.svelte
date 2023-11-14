<script lang="ts">
  import img1 from "../../lib/assets/detail1.png";
  import img2 from "../../lib/assets/detail2.png";
  import img3 from "../../lib/assets/detail3.png";

  import { Swiper } from "swiper";
  import { onMount } from "svelte";
  import { Navigation, Pagination } from "swiper/modules";
  import ButtonBorderWhite from "../../component/buttons/buttonBorderWhite.svelte";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import ButtonBorderBlack from "../../component/buttons/buttonBorderBlack.svelte";

  onMount(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      spaceBetween: 30,
      loop: true,
      cssMode: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      modules: [Navigation, Pagination],
    });

    swiper.on("slideChange", function () {
      console.log("slide changed");
    });
  });
</script>

<section id="detail">
  <div class="detail__container">
    <div class="detail__slider">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="detail__img">
              <img src={img1} alt="produit rcg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="detail__img">
              <img src={img1} alt="produit rcg" />
            </div>
          </div>
        </div>

        <div class="swiper-pagination" />
      </div>

      <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
    </div>
    <div class="detail__informations">
      <h2>TEE-SHIRT manches longues</h2>
      <div class="content__information">
        <p>Hommes / Femmes / Enfants</p>

        <p>
          Affrontez chaque défi avec style et confiance grâce à notre <span
            class="italic bold"
            >Tee-shirt Manches Longues MMA "Ultimate Performance".</span
          >
          Conçu pour les combattants déterminés, ce vêtement de sport polyvalent
          allie confort et performance pour vous permettre d'atteindre de nouveaux
          sommets dans l'octogone.
        </p>

        <div class="container__upload">
          <label class="logo__label">
            <input type="file" />
            Importer votre logo personnel
          </label>
        </div>

        <div class="informations__colors">
          <p>Couleurs disponibles :</p>
          <div class="color__circle circle_white" />
          <div class="color__circle circle_black" />
          <div class="color__circle circle_red" />
        </div>

        <div class="informations__size">
          <p>Tailles disponibles : S / M / L / XL</p>
        </div>

        <div class="informations__description">
          <span class="bold">Matériaux de Haute Qualité :</span> Fabriqué à partir
          d'un mélange de tissus de haute qualité, ce tee-shirt offre une durabilité
          exceptionnelle tout en restant doux et confortable contre votre peau.
        </div>

        <h3>Demande devis</h3>

        <div class="form__quotation">
          <form method="POST">
            <div class="form__name">
              <label for="lastname">Nom*</label>
              <input placeholder="Nom*" name="lastname" type="text" />
            </div>
            <div>
              <label for="firstname">Prénom*</label>
              <input placeholder="Prénom*" name="firstname" type="text" />
            </div>

            <div>
              <label for="phone">Téléphone</label>
              <input placeholder="Téléphone*" name="phone" type="tel" />
            </div>

            <div>
              <label for="email">Email</label>
              <input placeholder="Email*" name="email" type="email" />
            </div>

            <div>
              <label for="city">Ville</label>
              <input placeholder="Ville*" name="city" type="text" />
            </div>

            <div>
              <label for="club">Club</label>
              <input placeholder="Club*" name="club" type="text" />
            </div>

            <div>
              <label for="infos">Information complémentaire</label>
              <textarea
                placeholder="Informations complémentaires"
                name="infos"
              />
            </div>

            <button>Envoyer ma demande de devis</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #detail {
    margin-top: var(--padding-vertical);
  }
  .detail__container {
    width: 100%;
    display: flex;
    gap: 4rem;
    & > div {
      width: 50%;
    }
  }
  .detail__img {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }
  .detail__slider {
    width: 100%;
    height: fit-content;
  }
  .swiper {
    width: 100%;
    height: 700px;
  }
  .content__information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  #logo {
    width: 100%;
    text-transform: uppercase;
    background-color: transparent;
  }
  input[type="file"] {
    display: none;
  }
  .logo__label {
    text-transform: uppercase;
    border: solid 2px black;
    width: 100%;
    text-align: center;
    padding: 1rem;
    display: block;
    font-weight: bold;
    cursor: pointer;
  }
  .informations__colors {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .color__circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .circle_white {
    background-color: white;
  }
  .circle_black {
    background-color: black;
  }
  .circle_white {
    background-color: #ff5656;
  }
  input,
  select,
  textarea {
    background: unset;
    border-bottom: 2px solid black;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    padding: 5px;
    // background-color: rgba(255, 0, 0, 0.267);
    width: 100%;
    font-size: 1rem;

    &::placeholder {
      text-transform: uppercase;
      color: var(--black);
      font-size: 1rem;
    }
  }
  select {
    text-transform: uppercase;
    font-size: 1rem;
    padding: 5px 5px 5px 0;
  }
  textarea {
    padding: 5px 5px 50px 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
  .form__bloc__horizontal {
    display: flex;
    gap: 2rem;
    & > div {
      flex: 1;
    }
  }
  optgroup {
    text-transform: uppercase;
  }
  button {
    text-transform: uppercase;
    padding: 0.5rem 4rem;
    border-radius: 2rem;
    border: 2px solid var(--black);
    color: var(--black);
    font-weight: 700;
    text-align: center;
    transition: all 0.2s ease;
    width: fit-content;
    cursor: pointer;

    &:hover {
      background-color: var(--black);
      color: white;
    }
  }
  a {
    color: var(--black);
  }
  label {
    display: none;
  }
  h3 {
    text-transform: uppercase;
    text-align: center;
    margin: 1rem 0;
  }
  .detail__slider {
    position: sticky;
    top: 180px;
  }
</style>
