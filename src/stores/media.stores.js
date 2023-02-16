import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useMediaStores = defineStore("media", {
  state: () => ({
    medias: [],
    currentMedia: null
  }),

  getters: {
    getMedias(state) {
      return state.medias;
    },
    getCurrentMedia(state) {
      return state.currentMedia;
    }
  },

  actions: {
    async postMedia(data) {
      try {
        let value = await api.post("/media", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.medias.push(value.data);
        console.log(value);
      } catch (e) {

      }
    }
  }
});
