<template>
  <footer>
    <div class="footer">
      <div class="container max-w-screen-xl mx-auto my-10 flex flex-col footer-container">
        <div class="footer-nav">
          <router-link to="/">
            <img src="../assets/logo_dark.png" class="nav-logo" alt="footer-logo">
          </router-link>

          <div class="">
            <ul class="nav-ul">
              <li class="nav-link" v-for="link of navList" v-bind:key="link">
                <router-link v-bind:to="link.route" class="nav-link-item"
                             v-bind:class="{'active': currentView(link.route)}">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="nav-right">
            <a href="https://www.facebook.com/" target="_blank" class="footer-icons">
              <q-icon name="facebook" size="sm" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" class="footer-icons">
              <q-icon name="fa-brands fa-twitter" size="sm" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" class="footer-icons">
              <q-icon name="fa-brands fa-youtube" size="sm" />
            </a>
          </div>

        </div>
        <div class="footer-copywrite">
          © 2022 Groupe 1 (Allade fabien). All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: `FooterComponent`,
  data() {
    return {
      currentPath: useRoute().path,
      navList: [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "A propos",
          route: "/a-propos"
        },
        {
          name: "Terms",
          route: "/terms"
        },
        {
          name: "Privacy",
          route: "/privacy"
        },
        {
          name: "Contact",
          route: "/contact-us"
        }
      ]
    };
  },
  methods: {
    currentView(path) {
      return this.currentPath === path;
    }
  },
  setup() {
  },
  mounted() {
    const route = useRoute();
    watch(
      () => route.path,
      newPath => {
        this.currentPath = newPath;
      }
    );
  },
});
</script>
