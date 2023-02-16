<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination-ul">
        <li>
        <span
          class=" pagination-link-first"
          v-bind:class="{disabled:(paginationData.first === paginationData.current)}"
          v-on:click="previous(parseInt(paginationData.current) -1 )"
        >Previous</span>
        </li>
        <li v-for="n in parseInt(paginationData.last)" v-bind:key="n">
        <span
          class="pagination-link " v-bind:class="{'current disabled':parseInt(n)===parseInt(paginationData.current)}"
          v-on:click="previous(parseInt(n) )"
        >{{ n }}</span>
        </li>
        <li>
        <span
          class="pagination-link-next"
          v-bind:class="{disabled:(paginationData.last === paginationData.current)}"
          v-on:click="previous(parseInt(paginationData.next))">Next</span>
        </li>
      </ul>
    </nav>
  </div>


</template>

<script>

import { defineComponent, watch } from "vue";
import { debounce, pickBy } from "lodash";

export default defineComponent({
  name: `PaginationTable`,
  props: {
    paginationData: Object
  },
  setup() {

  },
  methods: {
    previous(page) {
      this.$emit("navigate", page);
      console.log(page);
    },
    next(page) {
      console.log(page);
      this.$emit("navigate", page);
    },
    go(page) {
      this.$emit("navigate", page);
      console.log(page);
    }
  }
});
</script>

<style scoped>

</style>
