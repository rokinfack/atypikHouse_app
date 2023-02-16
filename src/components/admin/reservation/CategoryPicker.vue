<template>
  <div>
    <form @submit.prevent="submit">
      <ul class="category-picker-container">
        <li v-for="category in getResources" v-bind:key="category">
          <input type="radio" :id="category.id" name="category" v-model="state.category" :value="category"
                 class="hidden peer"
                 required>
          <label :for="category.id" class="category-picker peer-checked:ring-2
      peer-checked:ring-yellow-500 peer-checked:[&>div>div:last-child>span]:text-yellow-300 ">
<!--            <img src="src/assets/images/new.jpg" class="image">-->
            <div class="category-overlay">
              <div class="svg">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.1011 25.0064C21.3368 25.0064 21.1383 26.424 19.3805 26.424C17.6935 26.424 17.3675 25.0064 14.6457 25.0064C11.8956 25.0064 11.6829 26.424 9.9251 26.424C8.16728 26.424 7.96882 25.0064 5.2045 25.0064C2.44019 25.0064 2.22755 26.424 0.469727 26.424V29.2592C3.23404 29.2592 3.46086 27.8416 5.2045 27.8416C6.96232 27.8416 7.16079 29.2592 9.9251 29.2592C12.6894 29.2592 12.9021 27.8416 14.6457 27.8416C16.3893 27.8416 16.6445 29.2592 19.3805 29.2592C22.1164 29.2592 22.3574 27.8416 24.1011 27.8416C25.8306 27.8416 26.0857 29.2592 28.8217 29.2592V26.424C27.0639 26.424 26.8654 25.0064 24.1011 25.0064ZM9.93928 22.88C12.7036 22.88 12.9021 21.4624 14.6457 21.4624C16.3468 21.4624 16.6729 22.88 19.3805 22.88C22.1448 22.88 22.3433 21.4624 24.1011 21.4624C25.788 21.4624 26.0857 22.88 28.8217 22.88V20.0448C27.9002 20.0448 27.4041 19.6479 26.6953 19.2651L23.8601 8.59061L26.7945 9.79557L27.8435 7.15883L11.4986 0.907227L0.469727 14.5303L2.69535 16.274L4.66582 13.7507L5.98418 18.6839C5.72901 18.6272 5.48802 18.6272 5.19033 18.6272C2.42601 18.6272 2.22755 20.0448 0.469727 20.0448V22.88C3.16316 22.88 3.54591 21.4624 5.21868 21.4624C6.90562 21.4624 7.23167 22.88 9.93928 22.88ZM17.5376 12.5032L19.5506 20.0448C17.651 20.1582 17.4809 18.6272 14.6457 18.6272C14.1212 18.6272 13.7101 18.6839 13.3415 18.769L12.0515 13.9633L17.5376 12.5032Z"
                    fill="white" />
                </svg>
              </div>
              <div class="text-container">
                <span class="text">{{ category.name }}</span>
              </div>
            </div>
          </label>
        </li>
      </ul>
    </form>
    <div class="picker-button-container">
      <button class="btn btn-primary rounded block w-full" @click="submit">
        Continuer
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useCategoryStores } from "stores/category.stores";
import { mapState } from "pinia";
import { usePropertiesHabitatStores } from "stores/properties-habitat.stores";

export default defineComponent({
  emits: ["navigate"],
  name: `CategoryPicker`,
  setup(props, { emit }) {
    const validations = {
      category: { required }
    };
    const state = reactive({
      category: {}
    });
    // sends validations to its parent, if it has the same scope.
    const v = useVuelidate(validations, state, { $scope: props.scope });

    const categoryStores = useCategoryStores();
    const propertiesHabitat = usePropertiesHabitatStores();
    categoryStores.getData();

    const navigate = function(data) {
      emit("navigate", data);
    };
    return { v, categoryStores, state, navigate, propertiesHabitat };
  }, methods: {
    async submit(event) {
      const isFormCorrect = await this.v.$validate();
      if (!isFormCorrect) return;
      this.propertiesHabitat.category = this.state.category;
      this.state.category = this.state.category["@id"];
      this.navigate(this.state);
    }
  }, computed: {
    ...mapState(useCategoryStores, ["getResources"])
  }
});
</script>

<style scoped>

</style>
