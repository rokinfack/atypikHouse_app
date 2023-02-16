<template>
  <div class="category-page">
    <div class="main-header">
      <div class="main-header-container">
        <div class="header-content">
          <h1>Rechercher votre logement <span>atypiqe</span></h1>
          <SearchBarHeader />
        </div>
      </div>
    </div>

    <div class="category-content">
      <!--      <div class="category-most">-->
      <!--        <div class="category-most-header">-->
      <!--          <h1>Les plus visité</h1>-->
      <!--        </div>-->

      <!--        <div class="category-most-content">-->
      <!--          <div class="category-most-container">-->
      <!--            <div class="category-card">-->
      <!--              <img src="src/assets/images/auth_background.png" alt="">-->
      <!--              <div class="category-overlay">-->
      <!--                <div class="overlay-container">-->
      <!--                  <p class="description">Description</p>-->
      <!--                  <p class="name">Fabien Allade</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="category-most-container">-->
      <!--            <div class="category-container-split">-->
      <!--              <div class="category-card">-->
      <!--                <img src="src/assets/images/auth_background.png" class="" alt="">-->
      <!--                <div class="category-overlay">-->
      <!--                  <div class="overlay-container">-->
      <!--                    <p class="description">Description</p>-->
      <!--                    <p class="name">Fabien Allade</p>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="category-card">-->
      <!--                <img src="src/assets/images/auth_background.png" class="" alt="">-->
      <!--                <div class="category-overlay">-->
      <!--                  <div class="overlay-container">-->
      <!--                    <p class="description">Description</p>-->
      <!--                    <p class="name">Fabien Allade</p>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="category-most-container">-->
      <!--            <div class="category-container-split">-->
      <!--              <div class="category-card">-->
      <!--                <img src="src/assets/images/auth_background.png" class="" alt="">-->
      <!--                <div class="category-overlay">-->
      <!--                  <div class="overlay-container">-->
      <!--                    <p class="description">Description</p>-->
      <!--                    <p class="name">Fabien Allade</p>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="category-card">-->
      <!--                <img src="src/assets/images/auth_background.png" class="" alt="">-->
      <!--                <div class="category-overlay">-->
      <!--                  <div class="overlay-container">-->
      <!--                    <p class="description">Description</p>-->
      <!--                    <p class="name">Fabien Allade</p>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->

      <!--        </div>-->
      <!--      </div>-->
      <div class="category-content">
        <div class="category-content-header">
          <h1>Nos habitats disponibles</h1>
        </div>
        <div class="w-full h-[250px] flex items-center justify-center" v-if="(getIsLoading)">
          <q-spinner-cube
            :size="150"
            color="primary"
          />
        </div>
        <div v-else>
          <div class="feature-category-content" v-if="getSearchHabitats.length > 0">
            <div class="feature-card" v-for="habitat in getSearchHabitats" v-bind:key="habitat"
                 v-on:click="goHabitatDetails(habitat)">
              <div class="feature-card-image">
                <img v-bind:src="getImage(habitat.coverImage)" alt="">
                <div class="feature-badge-content">
                  <div class="badge-icon-content">
                    <i class="fa-solid fa-home badge-icon">
                    </i>
                  </div>
                  <div class="badge-info">
                    <p class="info">Nouveauté</p>
                  </div>
                </div>
              </div>
              <div class="feature-card-info-content">
                <div class="feature-card-info">
                  <div class="info-card">
                    <div class="info-location">{{ habitat.location }}</div>
                    <div class="info-name">{{ habitat.name }}</div>
                  </div>
                  <div class="info-like">
                    <q-icon class="fa-regular fa-heart" @click.stop="love(habitat)"
                            :class="{'disabled ':isLoveLoading}" v-if="!habitat.liked"></q-icon>
                    <q-icon class="fa-solid fa-heart" @click.stop="love(habitat)"
                            :class="{'disabled ':isLoveLoading}" v-else></q-icon>
                  </div>
                </div>
                <div class="feature-card-bottom-info">
                  <div class="card-note">
                    <div class="stars">
                      <div class="flex items-center">
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
                      <span>(225 Evaluations)</span>
                    </div>
                  </div>
                  <div class="price">
                    <div class="title">A partir de</div>
                    <div class="price-value">{{ habitat.price }} €/nuit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center items-center h-[250px]" v-else>
            <h2 class="text-xl font-bold text-blue-900">Aucun habitats retrouvé</h2>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SearchBarHeader from "components/SearchBarHeader.vue";
import { useSearchStore } from "stores/search.stores";
import { mapState } from "pinia";
import { useCategoryStores } from "stores/category.stores";
import { pickBy } from "lodash";
import { useHabitatDetailsStores } from "stores/habitat-details.stores";
import { useAuthStores } from "stores/auth.stores";


export default {
  name: "CategoryPage",
  setup() {
    const searchStores = useSearchStore();
    const habitatDetailsStores = useHabitatDetailsStores();

    const userStores = useAuthStores();

    return { searchStores, habitatDetailsStores, userStores };
  },
  data() {
    return {
      habitatLink: "habitats",
      imageBaseUrl: import.meta.env.VITE_IMAGE_URL,
      request: {},
      isLoveLoading: false
    };
  },
  components: { SearchBarHeader },
  computed: {
    ...mapState(useSearchStore, ["getSearchHabitats", "getIsLoading"])
  },
  watch: {
    "$route.query"(value) {
      this.search(value);
    }
  },
  mounted() {
    this.search(this.$route.query);
    console.log(this.getSearchHabitats);
  },
  methods: {
    search(data) {
      console.log(data);
      let params = new URLSearchParams(pickBy(data)).toString();
      this.habitatDetailsStores.habitat = null;
      this.habitatDetailsStores.isLoading = true;
      this.searchStores.getHabitatBySearch(`${this.habitatLink}?${params}`);
    },
    getImage(cover) {
      let url = this.imageBaseUrl + cover?.fileUrl;
      return url;
    },
    async love(event) {
      if (this.isLoveLoading) {
        return;
      }
      this.isLoveLoading = true;
      if (!this.userStores.getToken) {
        this.$q.notify("Vous venez vous connectez pour faire cette action");
      } else {

        if (event.liked) {
          await this.searchStores.deleteLoveHabitat(event, this.userStores.getUser);
          this.$q.notify(`Vous avez désaimer ${event.name}`);
        } else {
          await this.searchStores.loveHabitat(event, this.userStores.getUser);
          this.$q.notify(`Vous avez aimé ${event.name}`);
        }

      }
      this.isLoveLoading = false;

    },
    goHabitatDetails(habitat) {
      this.$router.push({ path: `habitat-details/${habitat.id}` });
    }
  }
}
;
</script>

<style scoped>

</style>
