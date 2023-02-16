<template>
  <div class="stepper-container">
    <template v-for="n in count" v-bind:key="n">
      <div class="stepper-icon-container" v-bind:class="{ 'active' : n === currentIndex ,'complete' : n-currentIndex < 0 }">
        <div class="stepper-icon">
          <span class="number" v-if="n-currentIndex >= 0">{{ n }}</span>
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <path d="M2.63009 7.52689L7.82301 16.2308C8.46854 17.3128 9.94161 17.5356 10.8782 16.6929L27.1847 2.02199" stroke="white" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <div class="stepper-hr" v-if="count - n !== 0"></div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Stepper`,
  props: {
    count: Number,
    currentIndex: Number
  },
  data: function() {
    return {
      steppers: Array(this.count).fill({ active: true }, 0, this.count)
    };
  }
});

</script>

<style scoped>

</style>
