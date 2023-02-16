<template>
  <div class="admin-habitat-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div>
        <button class="btn btn-primary rounded w-52 " @click="addHabitat">New Habitat</button>
      </div>
    </div>
    <div class="admin-habitat-header">
      <div class="header">
        <h2>Veuillez retrouver ici tout vos habitats</h2>
      </div>
      <div class="header-search">
        <div class="form-groups">
          <label for="search" class="label">Rechercher dans vos habitats</label>
          <div class="input-prefix my-1 w-2/4">
            <div class="prefix">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" class="input-control w-full !py-2 !bg-white" placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <div class="admin-habitat-content">
      <div v-if="getHabitats && getHabitats['hydra:member']?.length >0" class="space-y-3">
        <div class="card-habitat" v-for="habitat in getHabitats['hydra:member']" v-bind:key="habitat">
          <div class="card-image">
            <img :src="getImage(habitat.coverImage)" class="image" alt="">
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
              <div class="info-content">
                <div class="name-container">
                  <span class="location">{{ habitat.location }}</span>
                  <span class="name">{{ habitat.name }}</span>
                </div>
                <div class="price-container">
                  <span class="start">à partir de</span>
                  <span class="price">
                {{ habitat.price }}€ /nuit
              </span>
                </div>
              </div>
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
                  <span class="ml-1">(225 Evaluations)</span>
                </div>
              </div>
              <div class="description-content">
                <p>{{ habitat.description }}</p>
              </div>
            </div>
            <div class="card-close-content">
              <span class="hover:bg-neutral-200 rounded-full p-2 " @click="updateHabitat(habitat)"><i
                class="fa fa-edit p-2 text-sm text-gray-600 "></i></span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex w-full h-52 justify-center items-center">
        <h3 class="text-xl text-blue-800">Vous n'avez aucun habitat pour le moment</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import { mapState } from "pinia";
import { useHabitatUserStores } from "stores/habitat-user.stores";

export default defineComponent({
  name: "HabitatClientPage",
  components: {
    Breadcrumb
  }, setup() {
    const reservationUser = useHabitatUserStores();
    reservationUser.getUserHabitats();

    return { reservationUser };
  },
  computed: {
    ...mapState(useHabitatUserStores, ["getHabitats"])
  },
  methods: {
    getImage(cover) {
      let url = import.meta.env.VITE_IMAGE_URL + cover?.fileUrl;
      return url;
    },
    updateHabitat(habitat) {
      console.log(habitat);
    },
    addHabitat() {
      this.$router.push("/admin/client/habitat/new");
    }
  }
});
</script>

<style scoped>

</style>
