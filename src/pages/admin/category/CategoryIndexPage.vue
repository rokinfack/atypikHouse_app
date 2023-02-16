<template>
  <div class="admin-reservation-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div class="new-category-container">
        <button class="btn bg-blue-700 rounded" type="button"
                @click="openModalAction">New
          category
        </button>
      </div>
    </div>
    <div class="admin-reservation-header">
      <div class="header">
        <h2>Category</h2>
      </div>
    </div>
    <div class="admin-reservation-content">
      <data-table v-bind="{ columns }" v-bind:resources="getResources" v-bind:per-page-options="[5,10,20,30,50]"
                  @refetch="categoryStores.updateUrl(baseUrl+$event);url=baseUrl+$event"
                  v-bind:pagination-data="getPaginationData">
        <template v-slot:cell="{ resource, column }">
              <span v-if="column.attribute === '@id'">
                    {{ resource[column.attribute] }}
              </span>
          <div v-if="column.attribute === 'operation'">
            <button class="btn btn-primary rounded" @click="edit(resource)">
              Edit
            </button>
          </div>
        </template>
      </data-table>
    </div>
  </div>
  <BaseModal v-bind:show="openModal">
    <div class="modal-content">
      <div class="header">
        <h2>Création de catégorie</h2>
        <i class="fa-solid fa-close cursor-pointer" @click="openModal = false"></i>
      </div>
      <form class="form-modal-content" @submit.prevent="handleCategory">
        <div class="form-groups" :class="{'error':v$?.categoryForm?.name?.$errors?.length > 0}">
          <label for="localisation" class="label">Nom de la catégorie</label>
          <input type="text" class="form-control" placeholder="Nom de la catégorie"
                 v-model="categoryForm.name"
                 @blur="v$?.categoryForm.name?.$touch"
          >
          <p v-if="v$.categoryForm?.name?.$error" class="form-error">{{ v$.categoryForm?.name?.$errors[0]?.$message
            }}</p>
        </div>
        <div class="forms-groups">
          <label for="dropzone-file" class="label">Ajouter des photos </label>
          <div class="dropzone-container">
            <label for="dropzone-file" class="content">
              <div class="label-content label-content-tiny">
                <svg class="w-10 h-10 mb-3 text-gray-400 w-5 h-5" viewBox="0 0 20 21" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-yellow-300"
                        d="M11.2004 2.10039C11.2004 1.78213 11.074 1.47691 10.8489 1.25186C10.6239 1.02682 10.3187 0.900391 10.0004 0.900391C9.68213 0.900391 9.37691 1.02682 9.15186 1.25186C8.92682 1.47691 8.80039 1.78213 8.80039 2.10039V9.30039H1.60039C1.28213 9.30039 0.976906 9.42682 0.751862 9.65186C0.526819 9.87691 0.400391 10.1821 0.400391 10.5004C0.400391 10.8187 0.526819 11.1239 0.751862 11.3489C0.976906 11.574 1.28213 11.7004 1.60039 11.7004H8.80039V18.9004C8.80039 19.2187 8.92682 19.5239 9.15186 19.7489C9.37691 19.974 9.68213 20.1004 10.0004 20.1004C10.3187 20.1004 10.6239 19.974 10.8489 19.7489C11.074 19.5239 11.2004 19.2187 11.2004 18.9004V11.7004H18.4004C18.7187 11.7004 19.0239 11.574 19.2489 11.3489C19.474 11.1239 19.6004 10.8187 19.6004 10.5004C19.6004 10.1821 19.474 9.87691 19.2489 9.65186C19.0239 9.42682 18.7187 9.30039 18.4004 9.30039H11.2004V2.10039Z" />
                </svg>
                <div class="text-label-container text-label-container-tiny">
                  <div class="notice">Formats supportés: PNG, JPEG</div>
                </div>
                <div class="label-text label-text-tiny">
                  Selectionner un document
                </div>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <!--        <div class="form-equipement-groups">-->
        <!--          <div class="header">-->
        <!--            <h2>Equipements</h2>-->
        <!--            <div class="description">-->
        <!--              <span>Ajouter l’icone et la description de l’équipement</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="equipment-container">-->
        <!--            <div class="equipment-form-item">-->
        <!--              <div class="icon">-->
        <!--                icon-->
        <!--              </div>-->
        <!--              <div class="input">-->
        <!--                <input class="form-control w-full">-->
        <!--              </div>-->
        <!--              <div class="delete">-->
        <!--                <i class="fa-solid fa-trash "></i>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="equipment-footer">-->
        <!--            <button class="btn bg-white border rounded text-black border-gray-800 w-full">Ajouter un autre</button>-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="button-container mt-6">
          <button class="btn btn-primary block w-full rounded" type="submit" :disabled="isLoading">
            <svg class="inline mr-3 w-4 h-4 text-white animate-spin"
                 v-bind:class="{'hidden':!isLoading}" viewBox="0 0 100 101" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
            {{ selectedData === null ? "Créér" : "Mettre a jour" }}
          </button>
        </div>
      </form>

    </div>
  </BaseModal>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import CategoryModal from "components/admin/category/CategoryModal.vue";
import BaseModal from "components/BaseModal.vue";
import DataTable from "components/admin/DataTable.vue";
import axios from "axios";
import { api } from "boot/axios";
import { useCategoryStores } from "stores/category.stores";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  name: `CategoryIndexPage`,
  components: {
    DataTable,
    BaseModal,
    Breadcrumb
  },
  setup() {
    const categoryStores = useCategoryStores();

    return { categoryStores, v$: useVuelidate() };
  },
  mounted() {

  },
  data() {
    return {
      url: "categories",
      baseUrl: "categories",
      response: null,
      columns: [
        { name: "Id", attribute: "id", sortable: "id" },
        { name: "Name", attribute: "name", sortable: "name" },
        { name: "Operation", attribute: "operation" }
      ],
      openModal: false,
      isLoading: false,
      selectedData: null,
      categoryForm: {
        name: ""
      }
    };
  },
  validations() {
    return {
      categoryForm: {
        name: { required }
      }
    };
  },
  watch: {
    url: {
      immediate: true,
      handler: async function() {
        await this.categoryStores.dataTableGet();
        console.log(this.getPaginationData);
      }
    }
  },
  methods: {
    captureRequestParams: (query) => {
      console.log(query);
    },
    edit(event) {
      console.log(event);
      this.selectedData = event;
      this.categoryStores.updateSelectedData(event);
      this.openModal = true;
      this.categoryForm.name = this.selectedData.name;
    },
    async handleCategory() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.isLoading = true;
      if (this.selectedData) {
        await this.categoryStores.updateCategory(this.selectedData.id, this.categoryForm);
      } else {
        await this.categoryStores.createCategories(this.categoryForm);
      }
      this.isLoading = false;
      this.openModal = false;
      this.categoryStores.updateSelectedData(null);
      await this.categoryStores.dataTableGet();
    },
    openModalAction() {
      this.openModal = !this.openModal;
      this.selectedData = null;
      this.categoryStores.updateSelectedData(null);
      this.categoryForm = {
        name: ""
      };
    }
  },
  computed: {
    ...mapState(useCategoryStores, ["getResources", "getPaginationData"])
    // ...mapActions(useCategoryStores, ["updateUrl"])
  }
})
;
</script>

<style scoped>

</style>
