import { defineStore } from "pinia";
import { useAuthStores } from "stores/auth.stores";
import { api } from "boot/axios";

export const useReservationClientStores = defineStore("reservation-client", {
  state: () => ({
    reservations: null
  }),

  getters: {
    getReservationsState(state) {
      return state.reservations;
    }
  },

  actions: {
    async getReservations() {
      try {
        const useAuth = useAuthStores();
        const id = useAuth.getUser.id;
        let reservations = await api.get(`users/${id}/reservations?status=COMPLETED`);
        this.reservations = reservations.data;
        console.log(this.reservations);
        return reservations.data;
      } catch (e) {
        return [];
      }
    }
  }
});
