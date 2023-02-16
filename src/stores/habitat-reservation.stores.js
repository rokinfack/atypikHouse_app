import { defineStore } from "pinia";
import { api } from "boot/axios";
import { useReservationPayment } from "stores/reservation-payment.stores";

export const useHabitatReservation = defineStore("habitat-reservation", {
  state: () => ({
    habitat: null,
    isLoading: true,
    startDate: null,
    endDate: null,
    person: null,
    habitatId: null
  }),

  getters: {
    getHabitat(state) {
      return state.habitat;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getStartDate(state) {
      return state.startDate;
    },
    getEndDate(state) {
      return state.endDate;
    },
    getHabitatId(state) {
      return state.habitatId;
    }
  },

  actions: {
    async createReservation(data) {
      try {
        let reservation = await api.post("reservations", data);
        const reservationPayment = useReservationPayment();
        reservationPayment.setReservationId(reservation["data"]["@id"]);
        reservationPayment.reservation = reservation["data"];
        return reservation["data"];
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    async getHabitatNetwork(id) {
      try {
        let habitat = await api.get(`habitats/${id}`);
        this.habitat = habitat["data"];
        this.isLoading = false;
        return habitat;
      } catch (e) {
        // this.isLoading = false;
        return null;
      }
    }
  }
});
