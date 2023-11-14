<script lang="ts">

    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { onMount } from 'svelte';


    export let img: string;
    export let testimonial: string;
    export let firstName: string;
    export let lastName: string;
    export let job: string;


onMount(() => {
    const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

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
})
    

</script>

    <!-- Slider main container -->
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide testimonial__container">
            <div class="testimonial__img">
                <img src="{img}" alt="testimonial rcg">
            </div>
            <div class="testimonial__text">
                <p class="testimonial__quote text-center">"{testimonial}"</p>
                <div class="testimonial__person">
                    <p class="testimonial__name text-center">{firstName} {lastName}</p>
                    <p class="testimonial__job text-center">{job}</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide testimonial__container">
            <div class="testimonial__img">
                <img src="{img}" alt="testimonial rcg">
            </div>
            <div class="testimonial__text">
                <p class="testimonial__quote text-center">"{testimonial}"</p>
                <div class="testimonial__person">
                    <p class="testimonial__name text-center">{firstName} {lastName}</p>
                    <p class="testimonial__job text-center">{job}</p>
                </div>
            </div>
        </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
    
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>


  <style lang="scss">
    .swiper {
        width: 800px;
        height: 500px;
        margin-top: var(--padding-vertical);
    }
    .testimonial__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        & > div {
            flex: 1;
        }
    }

    .testimonial__img {
        border-radius: 15px;
        height: 100%;
        & img {
            border-radius: 15px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .testimonial__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .testimonial__person p {
        font-family: 'Bebas Neue', sans-serif;
    }
    .testimonial__name {
        font-size: 2rem;
    }
    .swiper-button-prev::after {
        content : url('../lib/assets/svg/arrow-slider-testi.svg');
    }
    .swiper-button-prev {
        left: 25%;
    }
    .swiper-button-next {
        right: 25%;
    }
    .swiper-button-next::after {
        content : url('../lib/assets/svg/arrow-slider-testi.svg');
        rotate: 180deg;
    }
    :global(.swiper-pagination-bullet-active) {
    background-color: var(--black);
  }
  </style>

