<template>
  <Navbar />
  <main>
    <router-view />
  </main>

  <FooterComponent />
  <q-ajax-bar :hijack-filter="myFilterFn" />
</template>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "components/Navbar.vue";
import FooterComponent from "components/FooterComponent.vue";


export default defineComponent({
  name: "MainLayout",

  components: {
    FooterComponent,
    Navbar
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const myFilterFn =  (url) => {
      console.log(/^http:\/\/localhost\.:8000/.test(url));
      // example (only https://my-service.com/* should trigger)
      return /^http:\/\/localhost:\.8000/.test(url)
    }

    return {
      publicPath: process.env.BASE_URL,
      myFilterFn
    };
  }
});
</script>
