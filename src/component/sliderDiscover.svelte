<script lang="ts">

    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { onMount } from 'svelte';

    import img1 from '../lib/assets/pexels-god-picture-14470655 1.png';
    import img2 from '../lib/assets/pexels-god-picture-14470655 1.png';
    import img3 from '../lib/assets/pexels-god-picture-14470655 1.png';


onMount(() => {
    const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 3,
    spaceBetween: 30,
    cssMode: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    modules: [Navigation, Pagination],
    });

    swiper.on('slideChange', function () {
        console.log('slide changed');
    });
})
    

</script>

   <!-- Slider main container -->
   <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
            <div class="swiper-slide testimonial__container">
                <div class="discover__img">
                    <img src="{img1}" alt="slider discover">
                </div>
                <div class="discover__text">
                    Notre gamme de <span>Kimono</span>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

  <style lang="scss">
    .swiper {
        // background-color: rgba(255, 0, 0, 0.26);
        height: 650px;
        cursor: grab;
    }
    .discover__text {
        text-transform: uppercase;
        text-align: center;
        & span {
            text-decoration: underline;
        }
    }
    .discover__img {
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }
    }
    :global(.swiper-slide.swiper-slide-next) {
        opacity: 1 !important;
    }
    .swiper-slide {
        opacity: .5;
        transition: opacity .2s ease;
    }
    :global(.swiper-pagination-bullet-active) {
    background-color: white;
    }
  </style>
