<template>
  <div class="header-form-container">
    <form @submit.prevent="submit" class="flex space-x-3">
      <div class="input-prefix">
        <div class="prefix">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <!--        <input type="text" class="input-control" v-model="location" placeholder="Rechercher">-->
        <vue-google-autocomplete id="map" ref="address" classname="input-control" placeholder="Rechercher"
                                 v-on:placechanged="getAddressData">
        </vue-google-autocomplete>
      </div>

      <div class="w-64">
        <Datepicker v-model="date" range
                    no-today :enable-time-picker="false"
                    multi-calendars placeholder="Debut et fin"></Datepicker>
      </div>
      <div>
        <button class="btn bg-primary rounded h-full uppercase">Rechercher</button>
      </div>
    </form>
  </div>
  <div class="header-categories-list-container " v-if="getResources.length >0">
    <div class="category-badge" v-for="category in getResources"
         v-bind:class="{active: (category.id === selectedCategory)}"
         v-bind:key="category" v-on:click="navigate(category)">
      <i class="badge-icon fa-solid fa-home"></i>
      <span class="badge-text">{{ category.name }}</span>
    </div>
  </div>
  <div class="header-categories-list-container animate-pulse" v-else>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
    <div class="pulse-container">
      <div class="pulse-icon"></div>
      <div class="pulse-span"></div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from "vue";
import { useCategoryStores } from "stores/category.stores";
import { mapState } from "pinia";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default defineComponent({
  name: `SearchBarHeader`,
  data() {
    return {
      categories: [],
      selectedCategory: null,
      date: [],
      location: "",
      query: {},
      address: ""
    };
  },
  components: {
    Datepicker: Datepicker,
    VueGoogleAutocomplete
  },
  setup() {
    const useCategoryStore = useCategoryStores();

    useCategoryStore.getData();

    return { useCategoryStore };
  },
  computed: {
    ...mapState(useCategoryStores, ["getResources"])
  },
  methods: {
    navigate(category) {
      this.selectedCategory = category.id;
      this.query.category = category.id;
      this.$router.push({ path: "/category", query: this.query });
    },
    submit() {
      console.log("fabien");
      if (this.location !== "") {
        this.query.location = this.location;
      }
      if (this.date.length > 0) {
        this.query.startDate = this.date[0];
        this.query.endDate = this.date[0];
      }
      if (this.location !== "" || this.date.length > 0) {
        this.$router.push({ path: "/category", query: this.query });
      }
    },
    getAddressData(addressData, placeResultData, id) {
      console.log(addressData);
    }
  }
});
</script>

<style scoped>

</style>
