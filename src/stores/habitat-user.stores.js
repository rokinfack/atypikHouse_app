import { defineStore } from "pinia";
import { useAuthStores } from "stores/auth.stores";
import { api } from "boot/axios";

export const useHabitatUserStores = defineStore("habitat-user", {
  state: () => ({
    habitats: null
  }),

  getters: {
    getHabitats(state) {
      return state.habitats;
    }
  },

  actions: {
    async getUserHabitats() {
      try {
        const user = useAuthStores();
        const userId = user.getUser.id;
        const userHabitats = await api.get(`/users/${userId}/habitats`);
        this.habitats = userHabitats.data;
        console.log(userHabitats);
        return userHabitats.data;
      } catch (e) {
        return null;
      }
    },
  }
});
