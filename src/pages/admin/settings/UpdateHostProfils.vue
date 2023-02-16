<template>
  <div class="w-full bg-white my-6 rounded shadow">
    <div class="w-full px-3 py-2">
      <h3 class="text-xl text-blue-900 font-semibold">Devenir Hote</h3>
      <p class="description">
        Pour votre première réservation, vous pouvez choisir d'accueillir un voyageur expérimenté ayant effectué
        au moins trois séjours sur Airbnb et ayant reçu uniquement des évaluations positives.
      </p>
      <p class="py-1">Veuillez remplir ce formulaire pour devenir hote</p>
    </div>
    <div class="p-4">
      <form class="" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-3">
          <div class="form-groups" :class="{'error':v$?.hostForm?.phoneNumber?.$errors.length > 0}">
            <label for="phoneNumber" class="label">PhoneNumber</label>
            <input type="text" name="phoneNumber" id="phoneNumber"
                   class="form-control" placeholder="Phone Number" v-model="hostForm.phoneNumber" required>
          </div>
          <div class="form-groups">
            <label for="banque" class="label">Banque</label>
            <input type="text" name="banque" id="banque"
                   class="form-control" placeholder="Numéro RIB" v-model="hostForm.bankRib" required>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <div class="form-groups">
            <label for="description" class="label">Description</label>
            <textarea type="text" name="description" id="description"
                      class="form-control" placeholder="Description" v-model="hostForm.description" required></textarea>
          </div>
        </div>
        <div class="w-full flex items-center justify-end my-3">
          <button class=" btn rounded bg-nav-black-100" type="submit">Mettre a jour</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStores } from "stores/auth.stores";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "UpdateHostProfils",
  methods: {
    async handleSubmit() {
      await this.userStores.updateUserHost(this.hostForm);
    }
  },
  setup() {
    const userStores = useAuthStores();

    return { userStores, v$: useVuelidate() };
  }, data() {
    return {
      hostForm: {
        description: "",
        bankRib: "",
        roles: ['ROLE_HOST'],
        phoneNumber: ""
      }
    };
  }
};
</script>

<style scoped>

</style>
