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
      <div v-if="getReservationsState && getReservationsState['hydra:member'].length >0">
        <div class="card-reservation" v-for="reservation in getReservationsState['hydra:member']"
             v-bind:key="reservation">
          <div class="card-image">
            <img :src="getImage(reservation.habitat.coverImage)" class="image" alt="">
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
                    <span class="location">{{ reservation.habitat.location }}</span>
                    <span class="name">{{ reservation.habitat.name }}</span>
                  </div>
                  <div class="price-container">
                    <span class="start">Côut TOTAL</span>
                    <span class="price">
                {{ reservation.totalPrice }}€
              </span>
                  </div>
                </div>
                <div class="reservation-info-container">
                  <div class="info-bulle">
                    <div class="info-label">
                      Arrivé
                    </div>
                    <div class="info-content">
                      <i class="fa-solid fa-calendar-day info-icon"></i>
                      <span class="info-text"> {{ moment(reservation.entryDay).format("ll") }}</span>
                    </div>
                  </div>
                  <div class="info-bulle">
                    <div class="info-label">
                      Départ
                    </div>
                    <div class="info-content">
                      <i class="fa-solid fa-home info-icon"></i>
                      <span class="info-text"> {{ moment(reservation.releaseDay).format("ll") }}</span>
                    </div>
                  </div>
                  <div class="info-bulle">
                    <div class="info-label">
                      Nombre de nuits
                    </div>
                    <div class="info-content">
                      <i class="fa-solid fa-home info-icon"></i>
                      <span class="info-text font-bold"> {{ reservation.totalDay }} Nuits</span>
                    </div>
                  </div>
                  <div class="info-bulle">
                    <div class="info-label">
                      Voyageurs
                    </div>
                    <div class="info-content">
                      <i class="fa-solid fa-home info-icon"></i>
                      <span class="info-text font-bold"> {{ reservation.personPresent }} personnes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reservation-action-container">
                <div class="star-container">
                  <div class="stars">
                    <div class="inline-flex items-center">
                      <q-rating
                        v-model="ratingModel"
                        :model-value="3"
                        size="1rem"
                        :max="5"
                        color="yellow-9"
                      />
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
      <div v-else class="flex h-56 items-center justify-center">
        <h3 class="text-xl font-semibold text-blue-800">Aucune données pour le moment</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useReservationClientStores } from "stores/reservation-client.stores";
import { mapState } from "pinia";
import Breadcrumb from "components/Breadcrumb.vue";
import moment from "moment";

export default defineComponent({
  name: "ReservationClientPage",
  components: { Breadcrumb },
  data() {
    return {
      ratingModel: null
    };
  },
  setup() {
    const useReservationsClient = useReservationClientStores();

    useReservationsClient.getReservations();

    return { useReservationsClient, moment };
  },
  computed: {
    ...mapState(useReservationClientStores, ["getReservationsState"])
  },
  methods: {
    getImage(cover) {
      let url = import.meta.env.VITE_IMAGE_URL + cover?.fileUrl;
      return url;
    }
  }
});
</script>

<style scoped>

</style>
