<template>
  <div class="main-page">
    <div class="main-header">
      <div class="main-header-container">
        <div class="header-content">
          <h1>Rechercher votre logement <span>atypique</span></h1>
          <SearchBarHeader />
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-hero-container">
        <div class="hero-text">
          <h2 class="hero-head-text">Enfilez vos chaussures de marche et profitez du
            clair de lune</h2>
          <p class="hero-head-description">
            Qu’attendez-vous de votre excursion en pleine nuit ? Voici l’une des questions que
            se posent le plus souvent ceux qui n’y ont jamais participé ; et c’est une bonne
            question, il n’y a rien à dire.
            Il existe un grand nombre de réponses qui peuvent toutes être considérées
            comme valables et dont nous vous avons fait la liste, pour vous pousser à
            démarrer cette activité.
            Pourquoi faire un trek de nuit ?
            Pour développer ses propres horizons. Cette réponse est aussi bonne sur le plan
            littéral que métaphorique, car c’est dans cette raison que réside toute la beauté
            d’une marche au clair de lune sous un ciel dégagé. Nous vous assurons qu’un trek
            de nuit est une expérience que vous n’oublierez pas de si tôt.
          </p>
          <div class="button-container">
            <button class="btn bg-neutral-800 rounded" @click="naviagateToPropos">En savoir plus</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="../assets/images/blog-bannier.png" alt="">
        </div>
      </div>
      <div class="main-feature">
        <div class="main-feature-content">
          <h2 class="main-feature-header">Nos récents logements</h2>
          <p class="main-feature-description">Ici vous trouverez nos differents récemment ajoutés et consultés.</p>
        </div>

        <div class="feature-card-content"
             v-if="getHabitatsNewCreated && getHabitatsNewCreated['hydra:member']?.length >0">
          <div class="feature-card" v-for="habitat in getHabitatsNewCreated['hydra:member']" v-bind:key="habitat"
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
                  <!--                  <q-icon class="fa-regular fa-heart" @click.stop="love(habitat)"-->
                  <!--                          :class="{'disabled ':isLoveLoading}" v-if="!habitat.liked"></q-icon>-->
                  <!--                  <q-icon class="fa-solid fa-heart" @click.stop="love(habitat)"-->
                  <!--                          :class="{'disabled ':isLoveLoading}" v-else></q-icon>-->
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
      </div>
      <div class="main-feature">
        <div class="main-feature-content">
          <h2 class="main-feature-header">Avis des clients</h2>
          <p class="main-feature-description">Retrouvez les differents avis de nos clients après leur sejour dans logements.</p>
        </div>
        <client-carousel></client-carousel>
      </div>

      <div class="main-feature">
        <div class="main-feature-content">
          <h2 class="main-feature-header">Nos récents articles</h2>
          <p class="main-feature-description">Retrouvez les differents articles publiés sur notre plateforme.</p>
        </div>

        <div class="blog-page bg-white">
          <div class="blog-page-article" v-if="getLastActivities && getLastActivities['hydra:member']?.length >0">
            <div class="blog-page-card" v-for="activity in getLastActivities['hydra:member']" v-bind:key="activity">
              <div class="blog-page-article-container">
                <div class="blog-page-image">
                  <img :src="getImage(activity.coverImage)" alt="">
                </div>
                <div class="blog-activity-card-content">
                  <span class="blog-activity-card-time">Publié {{ moment(activity.updatedAt).startOf("day").fromNow()
                    }}</span>
                  <h2 class="blog-activity-card-headtext" v-snip="{ lines: 2 }">{{ activity.title }}</h2>
                  <p class="blog-activity-card-description" v-snip="{ lines: 3 }">{{ activity.description }}</p>
                  <div class="blog-activity-card-button-container">
                    <button @click="goActivity(activity)">Lire la suite</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="more-article">
          <button class="btn bg-transparent rounded border-yellow-500 border text-yellow-400" @click="goActivities">Voir
            plus article
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClientCarousel from "components/ClientCarousel.vue";
import SearchBarHeader from "components/SearchBarHeader.vue";
import { useMainPagesStores } from "stores/main-pages.stores";
import { mapState } from "pinia";
import moment from "moment";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {};
  },
  components: { SearchBarHeader, ClientCarousel },
  mounted() {
  },
  setup() {
    const mainPagesStores = useMainPagesStores();
    mainPagesStores.getHabitatNewCreated();
    mainPagesStores.getActivitiesLast();

    return { mainPagesStores, moment };
  },
  methods: {
    naviagateToPropos() {
      this.$router.push("a-propos");
    },
    goHabitatDetails(habitat) {
      this.$router.push({ path: `habitat-details/${habitat.id}` });
    },
    getImage(cover) {
      let url = import.meta.env.VITE_IMAGE_URL + cover?.fileUrl;
      return url;
    },
    goActivities() {
      this.$router.push("/activities");
    },
    goActivity(activity) {
      this.$router.push(`activity/${activity.id}`);
    }
  },
  computed: {
    ...mapState(useMainPagesStores, ["getHabitatsNewCreated", "getLastActivities"])
  }
});
</script>
