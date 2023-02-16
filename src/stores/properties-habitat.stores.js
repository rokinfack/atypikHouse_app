import { defineStore } from "pinia";
import { api } from "boot/axios";

export const usePropertiesHabitatStores = defineStore("properties-habitat", {
  state: () => ({
    category: null,
    properties: [],
    equipments: [],
    propertiesHabitats: []
  }),

  getters: {
    getCategory(state) {
      return state.category;
    },
    getProperties(state) {
      return state.properties;
    },
    getEquipments(state) {
      return state.equipments;
    },
    getHabitatProperties(state) {
      return state.propertiesHabitats;
    }
  },

  actions: {
    async getCategoryProperty() {
      try {
        const properties = await api.get(`category/${this.category.id}/properties`);
        this.properties = properties.data["hydra:member"];
        console.log(this.properties);
        this.properties.forEach((value) => {
          this.propertiesHabitats.push({
            name: value.name,
            value: "",
            property: value["@id"],
            type: value.type,
            required: value.required
          });
        });
      } catch (e) {

      }
    },
    async getEquipmentsNetwork() {
      try {
        const equipments = await api.get(`equipment?pagination=false`);
        this.equipments = equipments.data["hydra:member"];
        console.log(this.equipments);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
