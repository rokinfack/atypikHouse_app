import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useHabitatDetailsStores = defineStore("habitat-details", {
  state: () => ({
    habitat: null,
    isLoading: true
  }),

  getters: {
    getHabitat(state) {
      return state.habitat;
    },
    getIsLoading(state) {
      return state.isLoading;
    }
  },

  actions: {
    async getHabitatNetwork(id) {
      try {
        let habitat = await api.get(`habitats/${id}`);
        this.habitat = habitat["data"];
        console.log(this.habitat);
        this.isLoading = false;
        return habitat;
      } catch (e) {
        // this.isLoading = false;
        return null;
      }
    }
  }
});
