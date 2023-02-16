<template>
  <div class="client-carousel-content">
    <carousel :items-to-show="1.95" :wrapAround="true" :transition="500">
      <slide v-for="slide in carousel" :key="slide">
        <div class=" carousel__item carousel-item ">
          <div class="star">
            <div class="flex items-center justify-center py-9">
              <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <div class="description flex items-center justify-center m-6 ">
            <p class="text-gray-900 text-xl font-semibold">{{ slide.content}}</p>
          </div>
          <div class="user-avatar flex flex-col items-center justify-center">
            <div class="avatar-icon flex justify-center items-center bg-gray-200 rounded-full text-center w-14 h-14 ">
              <i class="fa-solid fa-user text-xl text-gray-900"></i>
            </div>
            <p class="user-name mt-2 mb-4 text-base font-semibold text-gray-900 capitalize">{{ slide.author }}</p>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <!--      <pagination />-->
      </template>
    </carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "ClientCarousel",
  components: {
    Carousel,
    Slide,
    // Pagination,
    Navigation
  }, data() {
    return {
      carousel: [
        {
          content: "Nous avons passé quatre jours dépaysant dans ce très bel appartement, \n" +
            "la vue est juste magnifique, paisible, on ne s’en lasse pas. Un vrai havre \n" +
            "de paix pour se reposer en famille.",
          author: "Alix"
        },
        {
          content: "Cabane proposé par RaKel est tout simplement magnifique. La \n" +
            "vue est à couper le souffle et vous y trouverez tout ce dont vous avez \n" +
            "besoin. \n" +
            "RaKel est attentionné et s’arrange pour rendre le séjour agréable",
          author: "Nestor"
        },
        {
          content: "Nous avons beaucoup apprécié notre séjour en hiver. \n" +
            "Appartement avec un e décoration neuve et contemporaine . \n" +
            "Top emplacement. Location à recommander les yeux fermés. \n" +
            "merci à Rakel et Patrick très sympas.",
          author: "Titouin"
        }, {
          content: "A seulement une heure de Paris et de l’autoroute avec le cadre \n" +
            "paisible et chaleureux pour réunir toute la famille et partager un moment \n" +
            "hors du temps ! Merci !»",
          author: "Samuel"
        }, {
          content: "« Gîte spacieux, bien agencé, bien équipé et les salles de bain \n" +
            "nombreuses. Parfait pour un week-end d’anniversaire en famille ! »",
          author: "Mani"
        }
      ]
    };
  }
});
</script>

<style>

.carousel__prev,
.carousel__next {
  @apply bg-gray-100 rounded-full text-center w-10 h-10 text-gray-900;
}

.carousel__prev {
  @apply -ml-16;
}

.carousel__next {
  @apply -mr-16;
}
</style>
