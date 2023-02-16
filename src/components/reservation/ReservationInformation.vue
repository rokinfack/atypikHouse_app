<template>
  <div class="reservation-header">
    <div class="header">
      <h1>Information de réservation</h1>
    </div>
    <div class="description">
      <p>Veuillez verifier les différentes informations de votre reservation</p>
    </div>
  </div>
  <div class="reservation-content">
    <div class="reservation-habitat">
      <div class="habitat-info-container">
        <div class="habitat-image">
          <img :src="getImage(getHabitat.coverImage)" alt="" class="image">
        </div>
        <div class="habitat-info-content">
          <div class="habitat-description">
            <div class="name">
              <h2>{{ getHabitat.name }}</h2>
            </div>
            <div class="adress">
              <p>{{ getHabitat.location }}</p>
            </div>
          </div>
          <div class="habitat-reservation">
            <p><span class="price">{{ totalDays * parseInt(getHabitat.price) }} €</span> pour <span>{{ totalDays
              }} nuits</span></p>
          </div>
        </div>
      </div>
    </div>
    <span class="reservation-hr">
        </span>
    <form class="reservation-form" @submit.prevent="submit">
      <div class="reservation-form-content">
        <div class="form-groups">
          <q-no-ssr>
            <date-picker v-model="reservationForm.dateReservation.start" value="12/12/2015" mode="date" is-required
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
          </q-no-ssr>
        </div>
        <div class="form-groups">
          <q-no-ssr>
            <date-picker v-model="reservationForm.dateReservation.end" mode="date" is24hr>
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
          </q-no-ssr>
        </div>
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
    </form>
  </div>
  <div class="next-button-container">
    <button class="btn-submit" @click="submit" :disabled="isLoading">
      <svg class="inline mr-3 w-4 h-4 text-yellow-400 animate-spin"
           v-bind:class="{'hidden':!isLoading}" viewBox="0 0 100 101" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor" />
      </svg>
      Continuer
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useHabitatReservation } from "stores/habitat-reservation.stores";
import { mapState } from "pinia";
import { Cookies } from "quasar";
import { useAuthStores } from "stores/auth.stores";
import moment from "moment/moment";
import { useVuelidate } from "@vuelidate/core";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import { required } from "@vuelidate/validators";

export default defineComponent({
  name: "ReservationInformation",
  components: { DatePicker },
  emits: ["navigate"],
  setup(_, { emit }) {
    const habitatReservation = useHabitatReservation();
    const userStore = useAuthStores();

    let startDate = Cookies.get("startDate");
    let endDate = Cookies.get("endDate");

    const start = new Date(startDate);

    startDate = moment(startDate);
    endDate = moment(endDate);

    const navigation = () => {
      emit("navigate", true);
    };


    const difDate = Math.abs(startDate.diff(endDate, "days")) + 1;
    const totalDaysSetup = difDate;

    return {
      habitatReservation, difDate, v$: useVuelidate(), startDate, endDate, navigation, totalDaysSetup, userStore, emit
    };
  },
  data() {
    return {
      reservationForm: {
        dateReservation: {
          start: null,
          end: null
        },
        person: 0
      },
      totalDays: null,
      totalPrice: null,
      start: null,
      end: null,
      isLoading: false,
      imageBaseUrl: import.meta.env.VITE_IMAGE_URL
    };
  },
  mounted() {
    this.reservationForm.dateReservation.start = new Date(this.habitatReservation.startDate);
    this.reservationForm.dateReservation.end = new Date(this.habitatReservation.endDate);
    this.reservationForm.person = this.habitatReservation.person;
    this.totalDays = this.totalDaysSetup;
    this.start = this.startDate;
    this.end = this.endDate;
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      const data = {
        releaseDay: this.reservationForm.dateReservation.end,
        entryDay: this.reservationForm.dateReservation.start,
        habitat: this.habitatReservation.getHabitat["@id"],
        personPresent: parseInt(this.reservationForm.person),
        user: `/api/users/${this.getUser.id}`,
        totalPrice: parseInt(this.totalPrice),
        totalDay: parseInt(this.totalDays),
        status: "PENDING"
      };
      console.log(data);
      this.isLoading = true;
      let reservation = await this.habitatReservation.createReservation(data);
      this.isLoading = false;

      if (reservation) {
        this.navigation();
      }

    },
    getImage(cover) {
      let url = this.imageBaseUrl + cover?.fileUrl;
      return url;
    }
  },
  computed: {
    ...mapState(useHabitatReservation, ["getHabitat", "getIsLoading", "getStartDate"]),
    ...mapState(useAuthStores, ["getUser", "getToken"])
  }, validations() {
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
            const startDate = moment(value.dateReservation.start);
            const endDate = moment(value.dateReservation.end);

            let duration = startDate.diff(endDate, "days");
            duration = Math.abs(duration) + 1;

            this.totalDays = duration;

            const price = parseInt(this.getHabitat.price);

            // ceci est a revoir
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
