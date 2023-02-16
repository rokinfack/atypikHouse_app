import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useMainPagesStores = defineStore("main-pages", {
  state: () => ({
    habitatsNewCreated: [],
    activitiesLast: []
  }),

  getters: {
    getHabitatsNewCreated(state) {
      return state.habitatsNewCreated;
    },
    getLastActivities(state) {
      return state.activitiesLast;
    }
  },

  actions: {
    async getHabitatNewCreated() {
      try {
        const newHabitats = await api.get(`habitats?order[createdAt]=desc&itemsPerPage=3`);
        console.log(newHabitats);
        this.habitatsNewCreated = newHabitats.data;
      } catch (e) {

        console.log(e);
      }
    },
    async getActivitiesLast() {
      try {
        const lastActivities = await api.get(`activities?itemsPerPage=3&oder[createdAt]=desc`);
        console.log(lastActivities);
        this.activitiesLast = lastActivities.data;

      } catch (e) {

      }
    }
  }
});
