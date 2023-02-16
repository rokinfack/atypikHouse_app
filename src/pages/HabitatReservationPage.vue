<template>
  <div class="reservation-page">
    <div class="reservation-container">
      <div class="reservation-stepper">
        <Stepper v-bind:count="3" v-bind:current-index="stepIndex" />
      </div>
      <div v-if="getIsLoading" class="flex h-[55vh] items-center justify-center">
        <q-spinner-facebook
          :size="310"
          color="primary"
        />
      </div>
      <div v-else>
        <div v-if="getToken">
          <div v-if="habitatReservation.habitat">
            <transition-group name="reservation">
              <div v-if="stepIndex === 1">
                <reservation-information @navigate="nextPage($event)"></reservation-information>
              </div>
              <div v-if="stepIndex === 2">
                <reservation-payment @navigate="nextPage($event)"></reservation-payment>
              </div>
              <div v-if="stepIndex === 3">
                <div class="reservation-header">
                  <div class="header">
                    <h1>Super! Votre réservation est faite </h1>
                  </div>
                </div>
                <div class="reservation-content-success">
                  <div class="success-svg">
                    <img src="../assets/images/reservation-success.svg">
                  </div>
                  <div class="description">
                    <p>Nous vous ferons un retour par mail
                      une fois la transaction validée.
                    </p>
                  </div>
                </div>
                <div class="next-button-container">
                  <button class="btn-submit" v-on:click="goNext">
                    Continuer</button>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
        <div v-else>
          <reservation-authentication @navigate="nextPage($event)"></reservation-authentication>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useHabitatReservation } from "stores/habitat-reservation.stores";
import moment from "moment";
import { mapState } from "pinia";
import Stepper from "components/Stepper.vue";
import { useAuthStores } from "stores/auth.stores";
import ReservationAuthentication from "components/reservation/ReservationAuthentication.vue";
import ReservationInformation from "components/reservation/ReservationInformation.vue";
import ReservationPayment from "components/reservation/ReservationPayment.vue";


export default defineComponent({
  name: "HabitatReservationPage",
  components: {
    ReservationPayment,
    ReservationInformation,
    ReservationAuthentication,
    Stepper
  },
  setup() {
    const router = useRouter();
    const habitatReservation = useHabitatReservation();
    const authStores = useAuthStores();
    return { router, habitatReservation, authStores };
  },
  data() {
    return {
      stepIndex: 1
    };
  },
  mounted() {
    if (this.getToken) {
      this.stepIndex = 1;
    }
    this.habitatReservation.getHabitatNetwork(this.$route.params.id);
  },
  computed: {
    ...mapState(useHabitatReservation, ["getHabitat", "getIsLoading"]),
    ...mapState(useAuthStores, ["getToken"])
  },
  methods: {
    nextPage(event) {
      console.log("next page");
      this.stepIndex = this.stepIndex + 1;
    },
    goNext(){
      this.$router.push("/admin/settings");
    }
  }
});
</script>

<style scoped>
.reservation-enter-active,
.reservation-leave-active {
  transition: all 0.5s ease;
}
.reservation-enter-from,
.reservation-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
