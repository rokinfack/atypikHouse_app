<template>
  <nav class="admin-nav">
    <div class="admin-image-container">
      <router-link to="/" class="image-container">
        <img src="../../assets/logo_dark.png" class="image" alt="">
      </router-link>
    </div>
    <div class="admin-avatar-container">
      <img v-bind:src="urlDefault" class="avatar-image" alt="">
      <div class="avatar-text">
        <span class="avatar-name">{{ user?.firstName }} {{ user?.lastName }}</span>
        <span class="avatar-role">{{ roleName }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStores } from "stores/auth.stores";

export default defineComponent({
  name: `AdminNavbar`,
  setup() {
    const useAuth = useAuthStores();
    const user = useAuth.getUser;

    const urlDefault = !user?.profileImage ? `https://ui-avatars.com/api/?background=random&name=${user?.firstName.split("+")}+${user?.lastName.concat("+")}` : `${import.meta.env.VITE_IMAGE_URL}${user.profileImage}`;
    const role = useAuth?.current_role;

    let roleName = "Utilisateur";
    if (role === "ROLE_HOST") {
      roleName = "Loueur";
    } else if (role === "ROLE_ADMIN") {
      roleName = "Administrateur";
    }

    return { useAuthStores, user, urlDefault, role, roleName };
  }
});
</script>
