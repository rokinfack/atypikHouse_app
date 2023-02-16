<template>
  <div class="admin-main-page">
    <div class="main-content">
      <span class="hello-container">
        <span class="hello-emoji">👋</span>
        <h2 class="hello-text">Salut {{ getUser.firstName }} {{ getUser.lastName }}</h2>
      </span>

      <div class="dash-info-container">
        <div class="header">
          <h2>Récapitulatifs de vos informations</h2>
        </div>
        <div class="content">
          <ul class="content-ul">
            <li>
              <input type="radio" id="small" name="hosting" value="small" class="hidden peer" required>
              <label for="small"
                     class="check-label-content peer-checked:!border-blue-600 peer-checked:!.text-blue-600">
                <div class="block">
                  <div class="info-text">0</div>
                  <div class="info-text-2">Habitat</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="big" name="hosting" value="big" class="hidden peer" required>
              <label for="big"
                     class="check-label-content ">
                <div class="block">
                  <div class="info-text">0</div>
                  <div class="info-text-2">Reservation</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStores } from "stores/auth.stores";
import { mapState } from "pinia";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const userAuth = useAuthStores();

    return { userAuth };
  },computed:{
    ...mapState(useAuthStores,["getUser"])
  }
});
</script>

<style scoped>

</style>
