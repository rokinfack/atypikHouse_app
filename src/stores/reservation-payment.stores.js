import { defineStore } from "pinia";
import { Cookies } from "quasar";
import { api } from "boot/axios";

export const useReservationPayment = defineStore("reservation-payment", {
  state: () => ({
    reservationId: Cookies.get("reservationId"),
    reservation: null,
    payment: null,
    isLoading: true
  }),

  getters: {
    getReservationId(state) {
      return state.reservationId;
    },
    getReservation(state) {
      return state.reservation;
    },
    getPayment(state) {
      return state.payment;
    },
    getIsLoading(state) {
      return state.isLoading;
    }
  },

  actions: {
    setReservationId(reservationId) {
      Cookies.set("reservationId");
      this.reservationId = reservationId;
    },
    getReservationNetwork() {

    },
    async paymentUpdate(url, data) {
      try {
        let payment = await api.patch(url, data, {
          headers: {
            "Content-Type": "application/merge-patch+json"
          }
        });
        console.log(payment);
        return payment["data"];
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    async getPaymentNetwork() {
      try {
        let payment = await api.get(`reservation/${this.reservation.id}/payment_request`);
        this.payment = payment["data"];
        this.isLoading = false;
        return payment["data"];
      } catch (e) {
        return null;
      }
    },
    clearData() {
      Cookies.remove("reservationId");
      Cookies.remove("startDate");
      Cookies.remove("endDate");
      Cookies.remove("person");
    }
  }
});
