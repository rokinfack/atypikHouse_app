<template>
  <div class="admin-settings-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
    </div>
    <div class="admin-settings-header">
      <div class="header">
        <h2>Parametres</h2>
      </div>
    </div>
    <div class="tabs-container">
      <div class="border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
          <li class="mr-2">
            <router-link to="/admin/settings/profils"
                  class="inline-flex px-3 py-2 cursor-pointer text-blue-900 border-b-4 border-blue-900 rounded-t-lg justify-center items-center active group"
                  aria-current="page">
              <i class="fa-solid fa-user text-center text-lg mr-2 text-blue-900 "></i>
              <span>Profils</span>
            </router-link>
          </li>
          <li class="mr-2" v-if="userAuth.getRole === 'ROLE_USER'">
            <router-link to="/admin/settings/become-host"
               class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Devenir hote
            </router-link>
          </li>
          <!--          <li class="mr-2">-->
          <!--            <span href="#" class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">-->
          <!--              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>Contacts-->
          <!--            </span>-->
          <!--          </li>-->
          <!--          <li>-->
          <!--            <span class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</span>-->
          <!--          </li>-->
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import { useAuthStores } from "stores/auth.stores";

export default defineComponent({
  name: "SettingsPage",
  components: { Breadcrumb },
  setup() {
    const userAuth = useAuthStores();

    return { userAuth };
  }
});
</script>

<style scoped>

</style>
