import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify } from "quasar";

export const useEquipmentStores = defineStore("equipment-stores", {
  state: () => ({
    equipments: [],
    selectedEquipment: null,
    url: "equipment",
    paginationData: {
      next: null,
      first: 1,
      last: 1,
      total: 0,
      current: 1,
      per_page: 20,
      current_length: 0
    }
  }),

  getters: {
    getResources(state) {
      return state.equipments;
    },
    getEquipment(state) {
      return state.selectedEquipment;
    },
    getUrl(state) {
      return state.url;
    },
    getPaginationData(state) {
      return state.paginationData;
    }
  },

  actions: {
    async getDatatable(url) {
      try {
        return await api.get(url);
      } catch (e) {
        return null;
      }
    },
    async updateEquipment(id, data) {
      try {
        let newEquipment = await api.put(`equipment/${id}`, data);
        const messagesAlerts = {
          color: "green", message: "Opération réussie",
          icon: "success", position: "top-right"
        };
        Notify.create(messagesAlerts);
        return newEquipment.data;
      } catch (e) {
        return null;
      }
    },
    async getData() {
      try {
        const data = await api.get("equipment?order[createdAt]=desc");

        this.equipments = data.data["hydra:member"];
        return data.data["hydra:member"];
      } catch (e) {
        return [];
      }
    },
    async createEquipments(data) {
      try {
        let equipment = await api.post("equipment", data);
        this.equipments.push(equipment.data);

        const messagesAlerts = {
          color: "green", message: "Opération réussie",
          icon: "success", position: "top-right"
        };
        Notify.create(messagesAlerts);

        return equipment.data;
      } catch (e) {
        return null;
      }
    },
    async dataTableGet() {
      let responseReturn = await this.getDatatable(this.url);

      this.response = responseReturn?.data;
      this.equipments = this.response;
      this.paginationData.total = responseReturn.data["hydra:totalItems"];
      this.paginationData.current_length = responseReturn.data["hydra:member"].length;
      if (responseReturn.data["hydra:view"]) {
        const url = new URLSearchParams(responseReturn.data["hydra:view"]["@id"]);

        for (const [key, value] of url.entries()) {
          if (key.includes("itemsPerPage")) {
            this.paginationData.per_page = value;
          }
          if (key.includes("page")) {
            this.paginationData.current = value;
          }
        }

      } else {
        this.paginationData.current = 1;
        this.paginationData.per_page = 20;
      }

      if (responseReturn.data["hydra:view"]) {
        const urlFirst = new URLSearchParams(responseReturn.data["hydra:view"]["hydra:first"]);
        const urlLast = new URLSearchParams(responseReturn.data["hydra:view"]["hydra:last"]);
        const urlNext = new URLSearchParams(responseReturn.data["hydra:view"]["hydra:next"]);

        if (urlFirst) this.paginationData.first = urlFirst.get("page") ?? 1;
        if (urlLast) this.paginationData.last = urlLast.get("page") ?? 1;
        if (urlNext) this.paginationData.next = urlNext.get("page") ?? 1;

      }
    },
    updateUrl(url) {
      this.url = url;
    },
    updateSelectedData(selected) {
      this.selectedCategory = selected;
    }
  }
});
