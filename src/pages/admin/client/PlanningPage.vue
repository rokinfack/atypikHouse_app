<template>
  <div class="admin-habitat-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div>
        <button class="btn btn-primary rounded w-52 " @click="addIndisponiblity">Nouvelle indisponibilité</button>
      </div>
    </div>
    <div class="admin-habitat-header">
      <div class="header">
        <h2>Veuillez retrouver ici tout le planning de vos habitats</h2>
      </div>
    </div>
    <div class="admin-habitat-content">
      <div class="row justify-center items-center flex">
        <div class="form-groups">
          <label for="habitat">Habitat</label>
          <select class="form-control">
            <option value=""></option>
          </select>
        </div>
        <q-btn flat dense label="Prev" @click="calendarPrev" />
        <q-separator vertical />
        <q-btn flat dense label="Next" @click="calendarNext" />
      </div>
      <QCalendar ref="calendar" view="week" locale="fr"
                 animated
                 transition-prev="slide-right"
                 transition-next="slide-left" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { QCalendar } from "@quasar/quasar-ui-qcalendar";
import "@quasar/quasar-ui-qcalendar/dist/index.css";
import Breadcrumb from "components/Breadcrumb.vue";
import { useHabitatPlanningStores } from "stores/habitat-planning.stores";

export default defineComponent({
  name: "PlanningPage",
  components: {
    QCalendar,
    Breadcrumb
  },
  data() {
    return {
      selectedDate: "",
      isShowModal: false
    };
  },
  methods: {
    calendarNext() {
      this.$refs.calendar.next();
    },
    calendarPrev() {
      this.$refs.calendar.prev();
    },
    addIndisponiblity() {
      this.isShowModal = true;

    }
  },
  setup() {
    const habitatPlanning = useHabitatPlanningStores();
    return { habitatPlanning };
  }
});
</script>

<style scoped>

</style>
