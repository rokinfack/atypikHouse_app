import { defineStore } from "pinia";
import { api } from "boot/axios";
import { useAuthStores } from "stores/auth.stores";

export const useHabitatFavorite = defineStore("habitat-favorite", {
  state: () => ({
    likes: null
  }),

  getters: {
    getLikes(state) {
      return state.likes;
    }
  },

  actions: {
    async getLikesHabitats() {
      try {
        const user = useAuthStores();
        const userId = user.getUser.id;
        const likesFavorite = await api.get(`/users/${userId}/likes`);
        this.likes = likesFavorite.data;
        console.log(likesFavorite);
        return likesFavorite.data;
      } catch (e) {
        return null;
      }
    },
    async deleteLike(event) {
      try {
        let deletedLike = await api.delete(`likes/${event.id}`);
        await this.getLikesHabitats();
      } catch (e) {

      }
    }
  }
});
