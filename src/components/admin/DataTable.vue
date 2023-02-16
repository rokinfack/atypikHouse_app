<template>
  <div>
    <div>
      <!-- Header -->
      <div>
        <!--        <form @submit.prevent>-->
        <!--          <input type="text" :value="query.search" @input="query.search = $event.target.value" />-->
        <!--        </form>-->
        <form @submit.prevent v-if="selectedResources.length">
          <select v-model="selectedAction">
            <option :value="null">
              {{ selectedResources.length }} selected
            </option>
            <option v-for="action in actions" :key="`actions-${action}`">
              {{ action }}
            </option>
          </select>
        </form>
      </div>
      <!-- Table -->
      <div class="relative overflow-x-auto shadow sm:rounded-lg">
        <table class="w-full text-gray-500 table-auto">
          <thead class="text-gray-700 text-center uppercase bg-gray-50">
          <tr>
            <th v-for="column in columns" :key="`columns-${column.name}`" class="px-6 py-3 border-r">
                <span
                  v-if="column.sortable"
                  @click.prevent="sortBy(column.sortable)"
                  class="inline-flex cursor-pointer"
                >
                  <span>{{ column.name }}</span>
                  <span v-if="query.sortAttribute === column.sortable">
                    <i class="fa-solid fa-chevron-down pl-3" v-if="query.sortDirection === 'asc'"></i>
                    <i class="fa-solid fa-chevron-up pl-3" v-else></i>
                  </span>
                </span>
              <span v-else>
                  {{ column.name }}
                </span>
            </th>
          </tr>
          </thead>
          <tbody v-if="resources['hydra:member']?.length >0">
          <tr
            v-for="resource in resources['hydra:member']"
            :key="resource['@id']"
            class="bg-white border-b"
          >
            <td
              v-for="column in columns"
              :key="`cell-${resource.id}-${column.name}`"
              class="px-6 py-4 border-r"
            >
              <slot name="cell" v-bind="{ column, resource }">
                {{ resource[column.attribute] }}
              </slot>
            </td>
          </tr>
          </tbody>
          <tbody v-else class="">
          <tr>
            <td v-bind:colspan="columns.length" class="text-center p-9">
              Aucun element dans le tableau
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between my-6">
        <div class="flex items-center space-x-3">
          <span>Showing:</span>
          <form @submit.prevent class="w-20">
            <select v-model="query.itemsPerPage" class="form-control">
              <option
                v-for="perPageOption in perPageOptions"
                :key="`per-page-options-${perPageOption}`"
                :value="perPageOption"
              >
                {{ perPageOption }}
              </option>
            </select>
          </form>
        </div>
        <div class="flex space-x-3" v-if="paginationData.total !== 0">
          <div>
            <!--            Showing-->
            <!--            {{ (parseInt(paginationData.total) - parseInt(paginationData.current_length)) + 1-->
            <!--            }}-->
            <!--            - {{ (parseInt(paginationData.current) * parseInt(paginationData.current_length)) }}-->
            <!--            of {{ paginationData.total }}-->
          </div>
          <pagination-table v-bind:pagination-data="paginationData" @navigate="query.page = $event"></pagination-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch } from "vue";
import { debounce, pickBy } from "lodash";
import PaginationTable from "components/admin/PaginationTable.vue";

export default defineComponent({
  name: `DataTable`,
  components: { PaginationTable },
  props: {
    columns: Array,
    perPageOptions: Array,
    request: Object,
    resources: Object,
    paginationData: Object
  },
  data() {
    return {
      selectedAction: null,
      query: {
        search: "",
        page: 1,
        itemsPerPage: 20,
        sortAttribute: ""
      },
      selectedResources: []
    };
  },
  computed: {
    isAllSelected() {
      if (this.resources == null) {
        return 0;
      }
      return (
        this.resources.data.length ===
        this.resources.data.filter((resource) => this.isSelected(resource))
          .length
      );
    }
  },
  mounted() {
    this.query.page = 1;
    this.query["order[createdAt]"] = "desc";
  },

  methods: {
    isSelected(resource) {
      return this.selectedResources.includes(resource.id);
    },

    selectAll() {
      this.resources.data
        .filter((resource) => !this.isSelected(resource))
        .forEach((resource) => this.selectedResources.push(resource.id));
    },

    deselectAll() {
      this.selectedResources.splice(0, this.selectedResources.length);
    },

    sortBy(sortAttribute) {
      if (this.query.sortAttribute !== sortAttribute) {
        this.query.sortAttribute = sortAttribute;
        this.query[`order[${sortAttribute}]`];
      } else {
        this.query.sortDirection =
          this.query.sortDirection === "asc" ? "desc" : "asc";
      }
      // TODO: ceci est a revoir plus en profondeur
      this.query[`order[${sortAttribute}]`] = this.query.sortDirection;
      console.log(this.query);
    },

    getResources(url) {
      this.$emit("refetch", url);
    }
  },

  watch: {
    query: {
      deep: true,
      handler: debounce(function(value) {
        let params = new URLSearchParams(pickBy(value)).toString();
        this.getResources(`?${params}`);
        console.log(params);
      }, 300)
    },

    selectedAction: function(value) {
      if (!value) return;

      if (window.confirm(`${value} selected items?`)) {
        this.$emit("click:action", value);
      }
    }
  }
});
</script>

<style scoped></style>
