<template>
  <header>
    <nav class="max-w-full bg-white border-b-0 shadow-0 py-3 border-b">
      <div class=" container max-w-screen-xl mx-auto flex items-center justify-between">
        <!--        logo    -->
        <router-link to="/">
          <img src="../assets/logo_dark.png" class="nav-logo" alt="navbar-logo">
        </router-link>
        <!-- link -->
        <div class="">
          <ul class="nav-ul">
            <li class="nav-link" v-for="link of navList" v-bind:key="link">
              <router-link v-bind:to="link.route" class="nav-link-item"
                           v-bind:class="{'active': currentView(link.route)}">
                {{ link.name }}
              </router-link>
            </li>

            <li class="nav-link" v-if="getToken">
              <router-link to="/admin/settings/profils" class="nav-link-item">
                Profils
              </router-link>
            </li>

            <li class="nav-link" v-else>
              <router-link to="/login" class="nav-link-item"
                           v-bind:class="{'active': currentView('login')}">
                Login
              </router-link>
            </li>
          </ul>
        </div>

        <!--        end link -->
        <div class="nav-right">
          <button class="btn rounded bg-nav-black-100" @click="devenirHote">
            Devenir Hote
          </button>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStores } from "stores/auth.stores";
import { storeToRefs } from "pinia";
import { mapState } from "pinia";

export default defineComponent({
  name: `Navbar`,
  data() {
    return {
      currentPath: useRoute().path,
      navList: [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "Logement",
          route: "/category"
        },
        {
          name: "Activités",
          route: "/activities"
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
    },
    devenirHote() {
      if (this.getToken) {
        this.$router.push("/admin/settings/become-host")
      } else {
        this.$router.push("/register")
      }
    }
  },
  setup() {
    const authStores = useAuthStores();

    return { authStores };
  },
  computed: {
    ...mapState(useAuthStores, ["getToken"])
  },
  mounted() {
    const route = useRoute();
    watch(
      () => route.path,
      newPath => {
        this.currentPath = newPath;
      }
    );
  }
});
</script>
