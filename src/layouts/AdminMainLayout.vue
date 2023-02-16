<template>
  <div class="admin-page">
    <admin-navbar />
    <div class="admin-content">
      <AdminSidebar />
      <main>
        <router-view />
      </main>
    </div>

  </div>
  <q-ajax-bar :hijack-filter="myFilterFn" color="primary" size="4px" />
</template>

<script>
import { defineComponent } from "vue";
import AdminSidebar from "components/admin/AdminSidebar.vue";
import { useAuthStores } from "stores/auth.stores";
import AdminNavbar from "components/admin/AdminNavbar.vue";

export default defineComponent({
  name: "AdminMainLayout",
  setup() {
    const useAuth = useAuthStores();
    const myFilterFn =  (url) => {
      // console.log(/^http:\/\/localhost\.:8000\/api/.test(url));
      // console.log(url);
      // example (only https://my-service.com/* should trigger)
      return url.includes(import.meta.env.VITE_API_URL)
    }

    return { useAuthStores,myFilterFn };
  },
  components: { AdminNavbar, AdminSidebar }
});
</script>

