<template>
  <div class="habitat-details-page">
    <div class="habitats-details-container">
      <div class="breadcrumb">
        <nav class="b-container" aria-label="Breadcrumb">
          <ol class="ol">
            <li class="b-link-container">
              <router-link to="/" class="b-link">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </router-link>
            </li>
            <li>
              <div class="b-link-container">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <router-link to="/category" class="b-link">Category</router-link>
              </div>
            </li>
            <li aria-current="page">
              <div class="b-link-container">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="b-link">Habitat</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="flex h-[80vh] items-center justify-center" v-if="getIsLoading">
        <q-spinner-facebook
          :size="310"
          color="primary"
        />
      </div>
      <div v-else>
        <div class="description-container">
          <div class="name">
            <h1>{{ getHabitat.name }}</h1>
          </div>
          <div class="description-options">
            <div class="start-container">
              <div class="star">
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
              <span class="star-description">(225) Evaluations</span>
            </div>
            <div class="share-container">
              <div class="register-content">
                <i class="fa-solid fa-radiation w-4 h-4"></i>
                <h6>Enregistrer</h6>
              </div>
              <div class="share-content">
                <i class="fa-solid fa-share"></i>
                <h6>Partager</h6></div>
            </div>
          </div>
        </div>
        <div class="image-container">
          <div class="basis-2/3 h-[60vh] bg-dark rounded-xl">
            <img :src="getImage(getHabitat?.coverImage)" class="w-full h-full object-cover rounded-xl" alt="">
          </div>
          <div class="basis-1/3 h-[60vh] flex space-y-2" v-if="getHabitat?.imageHabitats.length >= 0">
            <div class="rounded-xl w-full h-[29vh] bg-dark relative">
              <img :src="getImage(getHabitat.imageHabitats[0])" class="w-full h-full object-cover rounded-xl" alt="">
            </div>
            <div class="rounded-xl w-full h-[30vh] bg-primary relative">
              <img :src="getImage(getHabitat.imageHabitats[1])" class="w-full h-full object-cover rounded-xl" alt="">
              <div class="more-overlay">
                <div>
<!--                  <h2 class="more-text">+{{ getHabitat.imageHabitats.length }} more</h2>-->
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/3 h-[60vh] flex space-y-2" v-else>
            <div class="rounded-xl w-full h-[29vh] bg-dark relative">
              <img src="../assets/images/no-habitat.jpg" class="w-full h-full object-cover rounded-xl" alt="">
            </div>
            <div class="rounded-xl w-full h-[30vh] bg-primary relative">
              <img src="../assets/images/no-habitat.jpg" class="w-full h-full object-cover rounded-xl" alt="">
              <div class="more-overlay">
                <div>
                  <h2 class="more-text no-image">No more image</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="habitat-description-container">
          <div class="habitat-description-content">
            <div class="description-header">
              <div class="title">
                A propos de ce logement
              </div>
              <div class="author">
                A propos de l'hote
              </div>
            </div>
            <div class="description-content">
              <p>{{ getHabitat.description }}
              </p>
            </div>
            <div class="habitat-type">
              <ul class="list-none text-gray-800">
                <li><span class="type">Type de logement </span> : <span
                  class="value">{{ getHabitat?.category?.name }}</span></li>
                <li><span>Nombre de lits</span> : <span>{{ getHabitat.couchage }}</span></li>
                <li><span>Capacité</span> : <span>{{ getHabitat.capacity }}</span></li>
                <li><span>Nombre maximal de personnes</span> : <span>{{ getHabitat?.maxPeople }}</span></li>
                <!--                <li><span>Type de logement</span> : <span>Villa</span></li>-->
              </ul>
            </div>
            <div class="habitat-equipment">
              <div class="equipment-header">
                <h4>Equipement disponibles</h4>
              </div>
              <div class="equipment-content" v-if="getHabitat?.habitatEquipment">
                <div class="item" v-for="equipment in getHabitat?.habitatEquipment" v-bind:key="equipment">
                  <div class="icon"><i class="fa-solid fa-home text-xl"></i></div>
                  <div class="text">{{ equipment?.equipment?.name }}</div>
                </div>
                <div class="item" v-for="properties in getHabitat.habitatProperties" v-bind:key="properties">
                  <div class="icon"><i class="fa-solid fa-radiation text-xl"></i></div>
                  <div class="text">{{ properties?.property?.name }}</div>
                </div>
              </div>
            </div>
            <div class="calendar-container">
              <div class="header">
                <h3>Les disponibilités de votre habitats</h3>
              </div>
              <div class="content">
                <Calendar :columns="2" :attributes="attrs" @update:from-page="updateToPage"
                />
                <!--              is-expanded-->
              </div>
            </div>
          </div>
          <div class="habitat-reservation-container">
            <form @submit.prevent="onSubmit">
              <div class="reservation-card">
                <div class="content">
                  <div class="price">
                    <span>{{ getHabitat.price }} €/ nuit</span>
                  </div>
                  <div class="arrivals-forms-container">
                    <date-picker v-model="reservationForm.dateReservation.start" mode="date" :min-date="new Date()"
                                 is24hr>
                      <template v-slot="{ inputValue, inputEvents }">
                        <div class="input-label"
                             :class="{'error':v$?.reservationForm?.dateReservation?.start.$errors.length > 0}">
                          <label for="depart" class="label">Arrivé</label>
                          <div class="input-prefix label">
                            <div class="prefix">
                              <i class="fa-solid fa-calendar"></i>
                            </div>
                            <input type="text" class="input-control form-control"
                                   @blur="v$?.reservationForm?.dateReservation?.start?.$touch"
                                   :value="inputValue"
                                   v-on="inputEvents"
                                   placeholder="Arrivé">
                          </div>
                        </div>
                      </template>
                    </date-picker>
                    <date-picker v-model="reservationForm.dateReservation.end" mode="date" :min-date="new Date()"
                                 is24hr>
                      <template v-slot="{ inputValue, inputEvents }">
                        <div class="input-label"
                             :class="{'error':v$?.reservationForm?.dateReservation?.end.$errors.length > 0}">
                          <label for="depart" class="label">Départ</label>
                          <div class="input-prefix label">
                            <div class="prefix">
                              <i class="fa-solid fa-calendar"></i>
                            </div>
                            <input type="text" class="input-control from-control"
                                   @blur="v$?.reservationForm?.dateReservation?.end?.$touch"
                                   :value="inputValue"
                                   v-on="inputEvents"
                                   placeholder="Départ">
                          </div>
                        </div>
                      </template>
                    </date-picker>
                  </div>
                  <div class="form-error">
                    <p v-if="v$?.reservationForm?.dateReservation?.start?.$error">
                      {{ v$?.reservationForm?.dateReservation?.start?.$errors[0].$message }}</p>
                    <p v-if="v$?.reservationForm?.dateReservation?.end?.$error">
                      {{ v$?.reservationForm?.dateReservation?.end?.$errors[0].$message }}</p>
                  </div>
                  <div class="arrivals-users-forms">
                    <div class="form-groups" :class="{'error':v$?.reservationForm?.person?.$errors.length > 0}">
                      <label for="voyageurs" class="label">Voyageurs</label>
                      <select name="arrivals-users" class="form-control" id="voyageur" v-model="reservationForm.person"
                      >
                        <option value="" disabled selected>Select votre nombre de voyageur</option>
                        <option v-for="people in parseInt(getHabitat.maxPeople)"
                                v-bind:key="people"
                                v-bind:value="people"
                        > {{ people }}
                        </option>
                      </select>
                      <p v-if="v$?.reservationForm?.person?.$error" class="form-error">
                        {{ v$?.reservationForm?.person?.$errors[0].$message }}
                      </p>
                    </div>
                  </div>
                  <div class="cost-container">
                    <div class="night-cost">
                      <span class="text">Cout par nuit</span>
                      <span class="price">{{ getHabitat.price }} €</span>
                    </div>
                    <div class="total-cost">
                      <div class="text">
                        Cout total
                      </div>
                      <span class="price">
                    {{ totalPrice }} €
                  </span>
                    </div>
                  </div>
                  <div class="button-reservation">
                    <button class="btn btn-primary block w-full rounded my-4">Réserver</button>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div class="habitat-location">
          <div class="header">
            <h3>Où se trouve votre logement athipique</h3>
          </div>
          <div class="content">
            <div class="map" v-if="getHabitat.latitude && getHabitat.longitude">
              <GoogleMap v-bind:api-key="mapApiKey" style="width: 100%; height: 100%"
                         :center="{lat:parseFloat(getHabitat.latitude),lng:parseFloat(getHabitat.longitude)}"
                         :zoom="15">
                <MakerMap
                  :options="{ position: {lat:parseFloat(getHabitat.latitude),lng:parseFloat(getHabitat.longitude)} }" />
              </GoogleMap>
            </div>
          </div>
        </div>
        <div class="habitat-comment">
          <div class="header">
            <h3>Les avis sur ce logements</h3>
          </div>
          <div class="content" v-if="getHabitat.comments.length > 0">
            <div class="comment-container">
              <div class="comment" v-for="comment in getHabitat.comments.slice(0,5)" v-bind:key="comment">
                <div class="header">
                  <img :src="getProfileImage(comment.user)" class="image" alt="">
                  <div class="info">
                    <span class="name">{{ comment.user?.firstName }} {{ comment.user?.lastName }}</span>
                    <span class="occupation">Client</span>
                  </div>
                </div>
                <div class="content">
                  {{ comment.content }}
                </div>
              </div>
            </div>
          </div>
          <div class="content" v-else>
            <div class="w-full flex items-center justify-center h-44">
              <h2 class="text-xl text-blue-900 font-semibold">Aucun commentaire pour le moment</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="habitat-user">
        <div class="habitat-user-content">
          <div class="header" v-if="getHabitat?.owner">
            <img :src="getProfileImage(getHabitat?.owner)" class="image" alt="">
            <div class="info">
              <span class="name">{{ getHabitat?.owner.firstName }}</span>
              <span class="occupation">Propriétaire</span>
            </div>
            <button class="button-contact">Contacter l'hote</button>
          </div>
          <div class="content">
            <p>
              {{ getHabitat?.owner?.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "v-calendar/dist/style.css";
import { Calendar, DatePicker } from "v-calendar";
import { useHabitatDetailsStores } from "stores/habitat-details.stores";
import { mapState } from "pinia";
import { useSearchStore } from "stores/search.stores";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import moment from "moment";
import { GoogleMap, Marker } from "vue3-google-map";
import { useRoute, useRouter } from "vue-router";
import { useHabitatReservation } from "stores/habitat-reservation.stores";
import { Quasar } from "quasar";

export default defineComponent({
  name: "HabitatPage",
  components: {
    Calendar,
    DatePicker,
    GoogleMap,
    MakerMap: Marker
  },
  data() {
    return {
      imageBaseUrl: import.meta.env.VITE_IMAGE_URL,
      mapApiKey: import.meta.env.VITE_API_MAP_KEY,
      totalPrice: 0,
      reservationForm: {
        dateReservation: {
          start: null,
          end: null
        },
        person: null
      },
      attrs: [
        {
          highlight: {
            start: { fillMode: "outline" },
            base: { fillMode: "light" },
            end: { fillMode: "outline" }
          },
          dates: {
            start: this.reservationForm?.dateReservation?.start ?? new Date(),
            end: this.reservationForm?.dateReservation?.end ?? new Date()
          }
        }
      ]
    };
  },
  setup() {
    const habitatDetailsStores = useHabitatDetailsStores();
    const router = useRouter();
    const habitatReservation = useHabitatReservation();

    return { habitatDetailsStores, v$: useVuelidate(), router, habitatReservation };
  },
  computed: {
    ...mapState(useHabitatDetailsStores, ["getHabitat", "getIsLoading"])
  },
  mounted() {
    this.habitatDetailsStores.getHabitatNetwork(this.$route.params.id);
  },
  methods: {
    getImage(cover) {
      let url = this.imageBaseUrl + cover?.fileUrl;
      return url;
    },
    updateToPage(page) {
      console.log(page);
    },
    async onSubmit(event) {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.habitatReservation.habitat = this.habitatDetailsStores.getHabitat;
      this.habitatReservation.isLoading = false;
      this.$q.cookies.set("habitatId", this.habitatDetailsStores.getHabitat.id);
      this.$q.cookies.set("startDate", moment(this.reservationForm.dateReservation.start).format("MM/DD/YYYY"));
      this.$q.cookies.set("endDate", moment(this.reservationForm.dateReservation.end).format("MM/DD/YYYY"));
      this.$q.cookies.set("person", this.reservationForm.person);
      this.habitatReservation.endDate = this.reservationForm.dateReservation.end;
      this.habitatReservation.startDate = this.reservationForm.dateReservation.start;
      this.habitatReservation.person = this.reservationForm.person;


      await this.router.push({
        path: `/habitat-reservation/${this.habitatDetailsStores.getHabitat.id}`
      });
    },
    getProfileImage(user) {
      if (user.profileImage) {
        return this.imageBaseUrl + user.profileImage.fileUrl;
      }
      return `https://ui-avatars.com/api/?background=random&name=${user?.firstName.split("+")}+${user?.lastName.concat("+")}`;
    }
  },
  validations() {
    return {
      reservationForm: {
        dateReservation: {
          start: { required },
          end: { required }
        },
        person: { required }
      }

    };
  },
  watch: {
    reservationForm: {
      immediate: true,
      handler: async function(value) {
        if (this.getHabitat) {
          if (value.dateReservation.start != null && value.dateReservation.end != null) {
            const start = moment(value.dateReservation.start);
            const end = moment(value.dateReservation.end);

            let duration = start.diff(end, "days");
            duration = Math.abs(duration) + 1;

            const price = parseInt(this.getHabitat.price);

            this.totalPrice = price * duration;
          }
        }
      },
      deep: true
    }
  }
});
</script>

<style scoped>

</style>
