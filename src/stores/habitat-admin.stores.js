import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify } from "quasar";

export const useHabitatAdminStores = defineStore("habitat-admin", {
  state: () => ({
    counter: 0
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    }
  },

  actions: {
    async postHabitat(data) {
      try {
        const habitat = await api.post(`habitats`, data);
        const messagesAlerts = {
          color: "green", message: "Opération réussie",
          icon: "success", position: "top-right"
        };
        Notify.create(messagesAlerts);
        console.log(habitat.data);
        this.router.push("/admin/client/habitat")
      } catch (e) {
        console.log(e);
      }
    }
  }
});
