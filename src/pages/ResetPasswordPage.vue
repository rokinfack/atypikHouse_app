<template>
  <div class="form-page-content h-screen">
    <div class="form-auth-card">
      <div class="form-card">
        <form action="" class="mx-14" @submit.prevent="submitForm">
          <div class="form-head">
            <h1 class="form-heading">Réinitialisation</h1>
            <p class="form-head-description">
              Si avez oublié votre mot de passe, veuillez renseigner votre email
            </p>
          </div>

          <div class="form-groups" :class="{'error':v$.password?.$errors.length > 0}">
            <label for="motDePasse" class="label">Mot de passe</label>
            <input type="password" class="form-control" name="motDePasse" id="motDePasse"
                   placeholder="Mot de passe" v-model="password" @blur="v$.password?.$touch">
            <p v-if="v$.password?.$error" class="form-error">{{ v$.password?.$errors[0].$message }}</p>
          </div>
          <div class="form-groups" :class="{'error':v$.passwordConfirmation?.$errors.length > 0}">
            <label for="confirmerMotDePasse" class="label">Confirmer mot de passe</label>
            <input type="password" class="form-control" name="confirmerMotDePasse"
                   placeholder="Confirmer mot de passe" id="confirmerMotDePasse"
                   @blur="v$.passwordConfirmation?.$touch" v-model="passwordConfirmation">
            <p v-if="v$.passwordConfirmation?.$error" class="form-error">
              {{ v$.passwordConfirmation?.$errors[0].$message }}</p>
          </div>

          <button class="btn btn-primary block w-full rounded mt-7" :disabled="isLoading">
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
            Mettre à jour
          </button>

          <div class="already-auth">
            <p>Vous etes déja inscrit ?
              <router-link to="/login">Connectez vous</router-link>
            </p>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { useAuthStores } from "stores/auth.stores";

export default defineComponent({
  name: "ResetPasswordPage",
  setup() {
    return { v$: useVuelidate(), authStores: useAuthStores() };
  },
  data() {
    return {
      password: "",
      passwordConfirmation: "",
      isLoading: false
    };
  },
  validations() {
    return {
      password: { required, min: minLength(6) },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs(this.password),
        sameAsRef: sameAs(this.password)
      }
    };
  },
  methods: {
    async submitForm() {

      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      const data = {
        token: this.$route.params.token,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };

      this.isLoading = true;
      let value = await this.authStores.resetPassword(data);
      this.isLoading = false;

      if (value) {
        this.$router.push("/login");
      }
    }
  }
});
</script>
