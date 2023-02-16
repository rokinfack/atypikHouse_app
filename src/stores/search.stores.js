import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useSearchStore = defineStore("search", {
  state: () => ({
    resources: [],
    isLoading: false
  }),

  getters: {
    getSearchHabitats(state) {
      return state.resources;
    },
    getIsLoading(state) {
      return state.isLoading;
    }
  },

  actions: {
    async getHabitatBySearch(url) {
      this.isLoading = true;
      try {
        let resources = await api.get(url);
        this.resources = resources["data"]["hydra:member"];
        console.log(this.resources);
        this.isLoading = false;
        return resources["data"]["hydra:member"];
      } catch (e) {
        this.isLoading = false;
        return [];
      }
    },
    async loveHabitat(habitat, user) {
      try {
        let lovedHabitat = await api.post("likes", {
          habitat: `/api/habitats/${habitat.id}`,
          user: `/api/users/${user.id}`
        });
        const habitatIndex = this.resources.indexOf(habitat);
        const newLike = lovedHabitat.data["@id"];
        const newHabitat = habitat;
        newHabitat.liked = true;
        newHabitat.like = newLike;

        this.resources[habitatIndex] = newHabitat;
      } catch (e) {
        return null;
      }
    },
    async deleteLoveHabitat(habitat, user) {
      try {
        const deleteLink = habitat.like.replace("/api/", "");
        await api.delete(deleteLink);
        const habitatIndex = this.resources.indexOf(habitat);
        const newHabitat = habitat;
        newHabitat.liked = false;
        newHabitat.like = null;

        this.resources[habitatIndex] = newHabitat;
      } catch (e) {
        return null;
      }
    }
  }
});
