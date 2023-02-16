<template>
  <div class="admin-reservation-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
    </div>
    <div class="admin-reservation-header">
      <div class="header">
        <h2>Ajouter un nouveau logement </h2>
      </div>
    </div>
    <div class="admin-reservation-content">
      <div class="stepper-container">
        <Stepper v-bind:count="4" v-bind:current-index="currentPage" />
      </div>
      <transition-group name="fade">
        <div v-if="currentPage === 1">
          <div class="category-picker-content">
            <div class="category-picker-header">
              <h1>Type de logement</h1>
            </div>
            <CategoryPicker :scope="scope" @navigate="navigate" />
          </div>
        </div>
        <div v-if="currentPage === 2">
          <div class="category-picker-content">
            <div class="category-picker-header">
              <h1>Informations générales</h1>
            </div>
            <image-picker :scope="scope" @navigate="navigate" />
          </div>
        </div>
        <div v-if="currentPage === 3">
          <div class="category-picker-content">
            <div class="category-picker-header">
              <h1>Autres détails et équipements</h1>
            </div>
            <habitat-property-form :scope="scope" @navigate="navigate" :isLoading="isLoading" />
          </div>
        </div>

      </transition-group>


    </div>
    <button class="btn-outline" @click="currentPage++">
      next
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import Stepper from "components/Stepper.vue";
import HabitatPropertyForm from "components/admin/habitat/HabitatPropertyForm.vue";
import CategoryPicker from "components/admin/reservation/CategoryPicker.vue";
import ImagePicker from "components/admin/habitat/ImagePicker.vue";
import { useVuelidate } from "@vuelidate/core";
import { useHabitatAdminStores } from "stores/habitat-admin.stores";
import { useAuthStores } from "stores/auth.stores";

export default defineComponent({
  name: "HabitatClientFormPage",
  components: {
    ImagePicker,
    CategoryPicker,
    Breadcrumb,
    // CategoryPicker,
    Stepper,
    HabitatPropertyForm
    // ImagePicker
  },
  data() {
    return { currentPage: 1, habitat: {}, isLoading: false };
  },
  setup() {
    const scope = "foo";
    const validations = {};
    const state = {};
    const v = useVuelidate(validations, state, { $scope: scope });
    const habitatAdmin = useHabitatAdminStores();
    const userAuth = useAuthStores();

    return { v, scope, habitatAdmin, userAuth };
  },
  methods: {
    async navigate(info) {
      this.habitat = { ...this.habitat, ...info };

      console.log(this.currentPage);
      if (this.currentPage === 3) {
        this.isLoading = true;
        this.habitat.owner = `/api/users/${this.userAuth.getUser.id}`
        await this.habitatAdmin.postHabitat(this.habitat);
        this.isLoading = false;
        return false;
      }
      this.currentPage++;
    }
  }
});
</script>

<style scoped>

</style>
