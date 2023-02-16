<template>
  <div class="breadcrumb">
    <nav class="b-container" aria-label="Breadcrumb">
      <ol class="ol">
        <li class="b-link-container" v-for="(route,index) in routeList" v-bind:key="route">
          <router-link v-bind:to="'/'+routeList.slice(0,index+1).join('/')" class="b-link"
                       v-if="index+1 !== routeList.length">
            <svg class="w-4 h-4 mr-2" v-if="index === 0" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" v-if="index !== 0"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg>
            {{ route }}
          </router-link>
          <div class="b-link" v-else>
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" v-if="index !== 0"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="b-link">{{ route }}</span>

          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: `Breadcrumb`,
  data() {
    return {
      route: useRoute(),
      routeList: useRoute().path.split("/").filter(value => value.length > 0).filter(value => {
        return value !== "client";
      })
    };
  },
  mounted() {
  },
  setup() {

  }
});
</script>

<style scoped>

</style>
