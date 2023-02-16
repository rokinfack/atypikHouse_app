<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStores } from "stores/auth.stores";
import { Cookies, createMetaMixin, LocalStorage } from "quasar";

import { useMeta } from "quasar";
import { useHabitatReservation } from "stores/habitat-reservation.stores";

const metaData = {
  // sets document title
  title: "Index Page",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: "description", content: "Page 1" },
    keywords: { name: "keywords", content: "Quasar website" },
    equiv: { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: "og:title",
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle} - My Website`;
      }
    }
  },

  // CSS tags
  link: {
    material: { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
  },

  // JS tags
  script: {
    ldJson: {
      type: "application/ld+json",
      innerHTML: `{ "@context": "http://schema.org" }`
    }
  },

  // <html> attributes
  htmlAttr: {
    "xmlns:cc": "http://creativecommons.org/ns#", // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    "action-scope": "xyz", // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: "This is content for browsers with no JS (or disabled JS)"
  }
};

export default defineComponent({
  name: "App",
  mixins: [
    createMetaMixin(metaData)
  ],
  setup() {
    const authStores = useAuthStores();

    return { authStores };
  },
  meta: {
    title: "Atypik"
  },
  data() {
    return {
      preferences: null
    };
  },
  preFetch({ store, ssrContext }) {
    const userStore = useAuthStores(store);
    const habitatReservation = useHabitatReservation();
    const cookies = process.env.SERVER
      ? Cookies.parseSSR(ssrContext) : Cookies;
    userStore.token = cookies.get("token");
    console.log(cookies.get("current_user"));
    userStore.current_user = cookies.get("current_user");
    userStore.current_role = cookies.get("role");
    userStore.cookiesAccepted = cookies.get("cookies_accept");

    habitatReservation.startDate = cookies.get("startDate");
    habitatReservation.endDate = cookies.get("endDate");
    habitatReservation.person = cookies.get("person");
    habitatReservation.habitatId = cookies.get("habitatId");
  },
  mounted() {
    this.authStores.token = this.authStores.getToken;
    if (import.meta.env.SSR && !(this.authStores.getCookiesAccepted ?? false)) {
      this.$q.notify({
        position: "bottom-right",
        message: "Nos outils tiers utilisent des cookies, qui sont nécessaires à son fonctionnement et" +
          " requis pour atteindre les objectifs illustrés dans la politique en matière de cookies.",
        textColor: "white",
        multiLine: false,
        timeout: 350000,
        actions: [
          {
            label: "Accept", color: "white", handler: () => {
              this.authStores.acceptCookies();
            }
          },
          {
            label: "Learn more", color: "yellow", handler: () => { /* console.log('wooow') */
            }
          }
        ]
      });
    }
  }
});
</script>
