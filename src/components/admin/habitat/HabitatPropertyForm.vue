<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="form-groups" :class="{'error':v?.equipments?.$errors?.length > 0}">
        <label for="localisation" class="label">Equipments Présents</label>
        <multiselect
          v-model="form.equipments"
          :options="getEquipments"
          :multiple="true"
          :searchable="true"
          :close-on-select="true"
          :allow-empty="false"
          track-by="name"
          label="name"
          placeholder="Select multiple equipments"
        >
          <template v-slot:singleLabel="{option}">
            {{ option.name }}
          </template>
          <template v-slot:option="{option}">
            {{ option.name }}
          </template>
        </multiselect>
      </div>
      <h3>Autres propertés</h3>
      <div
        v-for="(input, index) in getHabitatProperties"
        :key="index"
        class="form-groups"
      >
        <label for="{{input.name}}">{{ input.name }}</label>
        <div v-if="input.type === 'string' || input.type==='text'">
          <input v-model="input.value" type="text" class="form-control" :required="input.required" />
        </div>
        <div v-if="input.type === 'bool'">
          <input v-model="input.value" type="checkbox" class="form-control p-6" :required="input.required" />
        </div>
        <div v-if="input.type === 'number'">
          <input v-model="input.value" type="number" class="form-control" :required="input.required" />
        </div>
      </div>
      <div class="form-groups" :class="{'error':v?.description?.$errors.length > 0}">
        <label for="max-people" class="label">Description de votre habitat</label>
        <textarea type="number" name="max-people" id="max_people" @blur="v.description?.$touch"
                  v-model="form.description"
                  placeholder="7" class="form-control" required></textarea>
        <p v-if="v.description?.$error" class="form-error">{{ v.description?.$errors[0].$message }}</p>
      </div>
      <div class="button-container mt-6 mb-14">
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
          Continuer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { usePropertiesHabitatStores } from "stores/properties-habitat.stores";
import { required, helpers, requiredIf } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import VueMultiselect from "vue-multiselect";
import { mapState } from "pinia";
import "vue-multiselect/dist/dist/vue-multiselect.css";

export default defineComponent({
  name: `HabitatPropertyForm`,
  emits: ["navigate"],
  props: ["isLoading"],
  components: {
    multiselect: VueMultiselect
  },
  setup(props, { emit }) {
    const propertiesHabitats = usePropertiesHabitatStores();


    propertiesHabitats.getCategoryProperty();
    propertiesHabitats.getEquipmentsNetwork();
    const validations = {
      equipments: { required },
      description: { required }
    };
    const form = reactive({
      equipments: null,
      habitatEquipment: null,
      description: ""
    });
    const navigate = function(data) {
      emit("navigate", data);
    };
    // sends validations to its parent, if it has the same scope.
    const v = useVuelidate(validations, form, { $scope: props.scope });


    return { v, form, navigate, propertiesHabitats };
  },
  computed: {
    ...mapState(usePropertiesHabitatStores, ["getCategory", "getProperties", "getEquipments", "getHabitatProperties"])
  },
  methods: {
    async handleSubmit() {
      console.log(this.form);
      console.log(this.v);
      const isFormCorrect = await this.v.$validate();
      if (!isFormCorrect) return;

      // this.form.habitat_equipments = this.getProperties;
      let habitatEquipments = [];
      if (this.form.equipments) {
        this.form.equipments.forEach((value, index) => {
          let values = {};
          values.equipment = JSON.parse(JSON.stringify(value));
          values.amount = 20;
          values.presence = false;

          habitatEquipments.push(values);
        });
      }
      console.log(habitatEquipments);

      this.form.habitatEquipment = habitatEquipments;
      if (this.getProperties) {
        let properties = [];
        this.getProperties.forEach((value, index) => {
          console.log(value);
          let values = {};
          values.property = this.getProperties[index];
          values.value = [this.getProperties[index].value];
          properties.push(values);
        });
        this.form.habitatProperties = properties;
      }
      console.log(this.form);

      this.navigate(this.form);
    }
  },
  mounted() {
    this.form.habitat_equipments = this.getProperties;
  },
  created() {
  }
});

</script>

<style scoped>

</style>
