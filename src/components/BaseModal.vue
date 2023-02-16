<template>
  <transition to="#modals">
    <div v-if="show">
        <div class="modal">
          <div class="content">
            <slot></slot>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: `BaseModal`,
  props: {
    show: Boolean
  }
});
</script>

<style scoped>

</style>
