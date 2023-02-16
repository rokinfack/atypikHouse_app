<template>
  <aside class="admin-aside-container" aria-label="Sidebar">
    <div class="admin-aside">
      <ul class="admin-list-container">
        <li v-for="link of link_by_role" v-bind:key="link">
          <router-link v-bind:to="link.route"
                       class="admin-list-item" v-bind:class="{'active': currentView(link.route)}">
            <i class="fas icon" v-bind:class="link.icon"></i>
            <span class="text">{{ link.name }}</span>
          </router-link>
        </li>
        <hr>
        <li>
          <router-link to="/admin/settings/profils"
                       class="admin-list-item">
            <i class="fas fa-gear icon"></i>
            <span class="text">Settings</span>
          </router-link>
        </li>
        <li>
          <span v-on:click="deconnect"
                class="admin-list-item cursor-pointer">
            <i class="fas fa-arrow-right-from-bracket icon"></i>
            <span class="text">Deconnexion</span>
          </span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { defineComponent, watch } from "vue";
import { useAuthStores } from "stores/auth.stores";
import { useRoute } from "vue-router";

export default defineComponent({
  name: `AdminSidebar`,
  data() {
    return {
      currentPath: useRoute().path
    };
  },
  setup() {
    const authStores = useAuthStores();

    const role = authStores.getRole ?? localStorage.getItem("role");

    const userHostLink = [
      {
        name: "Dashboard",
        route: "/admin",
        icon: "fa-gauge-high"
      },
      {
        name: "Reservation",
        route: "/admin/client/reservation",
        icon: "fa-wallet"
      },
      {
        name: "Habitat",
        route: "/admin/client/habitat",
        icon: "fa-house"
      },
      {
        name: "Plannig",
        route: "/admin/client/planning",
        icon: "fa-user"
      },
      {
        name: "Favoris",
        route: "/admin/favorite",
        icon: "fa-heart"
      },
      {
        name: "Notification",
        route: "/admin/notification",
        icon: "fa-envelope"
      }
    ];

    const userAdminLink = [
      {
        name: "Dashboard",
        route: "/admin",
        icon: "fa-gauge-high"
      },
      {
        name: "Reservation",
        route: "/admin/reservation",
        icon: "fa-wallet"
      },
      {
        name: "Client",
        route: "/admin/users",
        icon: "fa-user"
      },
      {
        name: "Plannig",
        route: "/admin/planning",
        icon: "fa-user"
      },
      {
        name: "Habitat",
        route: "/admin/habitat",
        icon: "fa-house"
      },
      {
        name: "Category",
        route: "/admin/category",
        icon: "fa-certificate"
      },
      {
        name: "Blog",
        route: "/admin/blog",
        icon: "fa-blog"
      },
      {
        name: "Equipement",
        route: "/admin/equipment",
        icon: "fa-heart"
      },
      {
        name: "Propriété dynamique",
        route: "/admin/properties",
        icon: "fa-dice"
      },
      {
        name: "Notification",
        route: "/admin/notification",
        icon: "fa-envelope"
      }
    ];

    const userLink = [
      {
        name: "Dashboard",
        route: "/admin",
        icon: "fa-gauge-high"
      },
      {
        name: "Reservation",
        route: "/admin/client/reservation",
        icon: "fa-wallet"
      },
      {
        name: "Favoris",
        route: "/admin/favorite",
        icon: "fa-heart"
      },
      {
        name: "Notification",
        route: "/admin/notification",
        icon: "fa-envelope"
      }
    ];

    let link_by_role = userLink;
    if (role === "ROLE_HOST") {
      link_by_role = userHostLink;
    } else if (role === "ROLE_ADMIN") {
      link_by_role = userAdminLink;
    }

    return { authStores, link_by_role };
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
  methods: {
    currentView(path) {
      return this.currentPath === path;
    },
    deconnect() {
      this.authStores.logout();
    }
  }
});
</script>

<style scoped>

</style>
