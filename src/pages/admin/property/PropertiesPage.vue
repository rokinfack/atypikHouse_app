<template>
  <div class="admin-reservation-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div class="new-category-container">
        <button class="btn bg-blue-700 rounded" type="button"
                @click="openModalAction">New
          Property
        </button>
      </div>
    </div>
    <div class="admin-reservation-header">
      <div class="header">
        <h2>Proprété dynamique</h2>
      </div>
    </div>
    <div class="admin-reservation-content">
      <data-table v-bind="{ columns }" v-bind:resources="getResources" v-bind:per-page-options="[5,10,20,30,50]"
                  @refetch="propertiesStores.updateUrl(baseUrl+$event);url=baseUrl+$event"
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
          <div v-if="column.attribute === 'required'">
            <span class="bg-blue-100 text-blue-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
              {{ resource.required ? "requis" : "non requis" }}
            </span>
          </div>
          <div v-if="column.attribute === 'category'">
            <p>
              {{ resource.category.name }}
            </p>
          </div>
        </template>
      </data-table>
    </div>
  </div>
  <BaseModal v-bind:show="openModal">
    <div class="modal-content">
      <div class="header">
        <h2>Création de propriéte</h2>
        <i class="fa-solid fa-close cursor-pointer" @click="openModal = false;v$.$reset()"></i>
      </div>
      <form class="form-modal-content" @submit.prevent="handleProperty">
        <div class="form-groups" :class="{'error':v$?.form?.name?.$errors?.length > 0}">
          <label for="localisation" class="label">Nom de la propriété</label>
          <input type="text" class="form-control" placeholder="Nom de l'équipement"
                 v-model="form.name"
                 @blur="v$?.form.name?.$touch"
          >
          <p v-if="v$.form?.name?.$error" class="form-error">{{ v$.form?.name?.$errors[0]?.$message
            }}</p>
        </div>
        <div class="form-groups" :class="{'error':v$?.form?.type?.$errors?.length > 0}">
          <label for="localisation" class="label">Type de propriété</label>
          <multiselect
            v-model="form.type"
            :options="typesProperty"
            :searchable="true"
            :close-on-select="true"
            :allow-empty="false"
            placeholder="Select one type of property"
          >
          </multiselect>
          <p v-if="v$.form?.type?.$error" class="form-error">{{ v$.form?.type?.$errors[0]?.$message
            }}</p>
        </div>

        <div class="form-groups" :class="{'error':v$?.form?.category?.$errors?.length > 0}">
          <label for="localisation" class="label">Nom de la categorie</label>
          <multiselect
            v-model="form.category"
            :options="getCategories"
            :searchable="true"
            :close-on-select="true"
            :allow-empty="false"
            track-by="name"
            label="name"
            placeholder="Select one categorie"
          >
            <template v-slot:singleLabel="{option}">
              {{ option.name }}
            </template>
            <template v-slot:option="{option}">
              {{ option.name }}
            </template>
          </multiselect>
          <p v-if="v$.form?.name?.$error" class="form-error">{{ v$.form?.category?.$errors[0]?.$message
            }}</p>
        </div>
        <div class="form-groups col flex items-center">
          <input type="checkbox" class="check-box" name="checkbox" id="checkbox" v-model="form.required" />
          <label for="checkbox" class="check-box-label">La propriété est requis ?</label>
        </div>

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
import DataTable from "components/admin/DataTable.vue";
import BaseModal from "components/BaseModal.vue";
import { useVuelidate } from "@vuelidate/core";
import { useCategoryPropertyStores } from "stores/category-property.stores";
import { mapState } from "pinia";
import { useEquipmentStores } from "stores/equipment.stores";
import { required } from "@vuelidate/validators";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/dist/vue-multiselect.css";

export default defineComponent({
  name: "PropertiesPage",
  components: {
    Breadcrumb,
    DataTable,
    BaseModal,
    Multiselect
  },
  setup() {
    const propertiesStores = useCategoryPropertyStores();
    propertiesStores.getCategoriesProperty();

    return { propertiesStores, v$: useVuelidate() };
  },
  computed: {
    ...mapState(useCategoryPropertyStores, ["getResources", "getPaginationData", "getCategories"])
  },
  data() {
    return {
      url: "properties",
      typesProperty: ["string", "bool", "number", "text"
      ],
      baseUrl: "properties",
      response: null,
      columns: [
        { name: "Id", attribute: "id", sortable: "id" },
        { name: "Name", attribute: "name", sortable: "name" },
        { name: "Type", attribute: "type", sortable: "type" },
        { name: "Category", attribute: "category" },
        { name: "IsRequired", attribute: "required" },
        { name: "Operation", attribute: "operation" }
      ],
      openModal: false,
      isLoading: false,
      selectedData: null,
      form: {
        name: "",
        type: "",
        required: false,
        category: {
          name: ""
        }
      }
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        category: {
          required
        },
        type: {
          required
        }
      }
    };
  },
  watch: {
    url: {
      immediate: true,
      handler: async function() {
        await this.propertiesStores.dataTableGet();
        console.log("fabien");
        console.log(this.getResources);
        console.log(this.getPaginationData);
      }
    }
  },
  methods: {
    openModalAction() {
      this.openModal = !this.openModal;
      this.selectedData = null;
      this.propertiesStores.updateSelectedData(null);
      this.form = {
        name: ""
      };
    },
    edit(event) {
      console.log(event);
      this.selectedData = event;
      this.propertiesStores.updateSelectedData(event);
      this.openModal = true;
      this.form = this.selectedData;
    },
    async handleProperty() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.isLoading = true;
      if (this.selectedData) {
        await this.propertiesStores.updateProperty(this.selectedData.id, this.form);
      } else {
        await this.propertiesStores.createProperties(this.form);
      }
      this.isLoading = false;
      this.openModal = false;
      this.propertiesStores.updateSelectedData(null);
      await this.propertiesStores.dataTableGet();
    }
  }
});
</script>

<style scoped>

</style>
