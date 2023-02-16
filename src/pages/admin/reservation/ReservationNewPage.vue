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
        <Stepper v-bind:count="3" v-bind:current-index="1" />
      </div>
      <!--      <div class="category-picker-content">-->
      <!--        <div class="category-picker-header">-->
      <!--          <h1>Type de logement</h1>-->
      <!--        </div>-->
      <!--        <CategoryPicker />-->
      <!--      </div>-->

<!--      <div class="category-picker-content">-->
<!--        <div class="category-picker-header">-->
<!--          <h1>Informations générales</h1>-->
<!--        </div>-->
<!--        <image-picker />-->
<!--      </div>-->

      <div class="category-picker-content">
        <div class="category-picker-header">
          <h1>Autres détails et équipements</h1>
        </div>
        <habitat-property-form />
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import CategoryPicker from "components/admin/reservation/CategoryPicker.vue";
import Stepper from "components/Stepper.vue";
import ImagePicker from "components/admin/habitat/ImagePicker.vue";
import HabitatPropertyForm from "components/admin/habitat/HabitatPropertyForm.vue";

export default defineComponent({
  name: `ReservationNewPage`,
  components: {
    Breadcrumb,
    // CategoryPicker,
    Stepper,
    HabitatPropertyForm
    // ImagePicker
  }
});
</script>

<style scoped>

</style>
