<template>
  <Navbar />
  <div class="not-found-container">
    <div class="not-found-content">
      <p class="not-found-text">
        404
      </p>
      <p class="not-found-description">
        Oupp!!! <br>
        Quelque chose s’est mal passé ou la page que vous demande n’existe pas
      </p>
      <div>
        <button class="not-found-button" v-on:click="returnLast">
          Retourner à la page Précédente
        </button>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "components/Navbar.vue";
import FooterComponent from "components/FooterComponent.vue";

export default defineComponent({
  name: "ErrorNotFound",
  components: { FooterComponent, Navbar },
  methods: {
    returnLast() {
      this.$router.go(-1);
    }
  }
});
</script>
