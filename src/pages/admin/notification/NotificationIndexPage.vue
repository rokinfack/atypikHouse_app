<template>
  <div class="admin-reservation-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
    </div>
    <div class="admin-reservation-header">
      <div class="header">
        <h2>Notification</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";

export default defineComponent({
  name: "NotificationIndexPage",
  components: { Breadcrumb }
});
</script>

<style scoped>

</style>
