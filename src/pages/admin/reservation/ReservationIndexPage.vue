<template>
  <div class="admin-reservation-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
    </div>
    <div class="admin-reservation-header">
      <div class="header">
        <h2>Veuillez retrouver ici toutes vos réservation</h2>
      </div>
      <div class="header-search">
        <div class="form-groups">
          <label for="search" class="label">Rechercher dans vos favoris</label>
          <div class="input-prefix my-1 w-2/4">
            <div class="prefix">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" class="input-control w-full !py-2 !bg-white" placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <div class="admin-reservation-content">
      <div class="card-reservation">
        <div class="card-image">
          <img src="src/assets/images/zanka.jpg" class="image" alt="">
          <div class="badge-content">
            <div class="badge-icon-content">
              <i class="fa-solid fa-home badge-icon">
              </i>
            </div>
            <div class="badge-info">
              <p class="info">Nouveauté</p>
            </div>
          </div>
        </div>
        <div class="card-content-container">
          <div class="card-description-container">
            <div>
              <div class="info-content">
                <div class="name-container">
                  <span class="location">Bénin- Abomey-calavi-Ganvié</span>
                  <span class="name">Aenean egestas libero</span>
                </div>
                <div class="price-container">
                  <span class="start">Côut TOTAL</span>
                  <span class="price">
                120€
              </span>
                </div>
              </div>
              <div class="reservation-info-container">
                <div class="info-bulle">
                  <div class="info-label">
                    Arrivé
                  </div>
                  <div class="info-content">
                    <i class="fa-solid fa-home info-icon"></i>
                    <span class="info-text"> 04 Septembre 2022</span>
                  </div>
                </div>
                <div class="info-bulle">
                  <div class="info-label">
                    Départ
                  </div>
                  <div class="info-content">
                    <i class="fa-solid fa-home info-icon"></i>
                    <span class="info-text"> 04 Septembre 2022</span>
                  </div>
                </div>
                <div class="info-bulle">
                  <div class="info-label">
                    Nombre de nuits
                  </div>
                  <div class="info-content">
                    <i class="fa-solid fa-home info-icon"></i>
                    <span class="info-text font-bold"> 05 Nuits</span>
                  </div>
                </div>
                <div class="info-bulle">
                  <div class="info-label">
                    Voyageurs
                  </div>
                  <div class="info-content">
                    <i class="fa-solid fa-home info-icon"></i>
                    <span class="info-text font-bold"> 05 personnes</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="reservation-action-container">
              <div class="star-container">
                <div class="stars">
                  <div class="inline-flex items-center">
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span class="ml-1">Evaluer</span>
                </div>
              </div>
              <div class="add-comment">
                <i class="fa-solid fa-comment-alt">
                </i>
                <span>Ajouter Commentaire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";

export default defineComponent({
  name: `ReservationIndexPage`,
  components: { Breadcrumb }
});
</script>

<style scoped>

</style>
