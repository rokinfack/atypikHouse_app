<template>
  <div class="form-page-content">
    <div class="form-auth-card">
      <div class="form-card">
        <form action="" class="mx-14" @submit.prevent="submitForm">
          <div class="form-head">
            <h1 class="form-heading">Connexion</h1>
          </div>

          <div class="form-content">
            <div class="form-groups" :class="{'error':v$?.auth?.email?.$errors.length > 0}">
              <label for="email" class="label">Email</label>
              <input type="email" name="email" id="email" v-model="auth.email"
                     class="form-control" @blur="v$.auth.email?.$touch"
                     placeholder="Email" required>
              <p v-if="v$.auth?.email?.$error" class="form-error">{{ v$.auth?.email?.$errors[0].$message }}</p>
            </div>

            <div class="form-groups" :class="{'error':v$?.auth?.password.$errors.length > 0}">
              <label for="password" class="label">Mot de passe</label>
              <input type="password" name="password" id="password" v-model="auth.password"
                     @blur="v$.auth.password.$touch"
                     class="form-control" placeholder="Mot de passe" required>
              <p v-if="v$.auth?.password.$error" class="form-error">{{ v$.auth?.password.$errors[0].$message }}</p>
            </div>

            <div class="flex justify-between items-center">
              <div class="form-groups col flex items-center">
                <input type="checkbox" class="check-box" name="checkbox" id="checkbox" />
                <label for="checkbox" class="check-box-label">Se souvenir de moi</label>
              </div>

              <div class="reset-text">
                <router-link to="reset-password-request" class="reset-link">Mot de passe oublié ?</router-link>
              </div>
            </div>

            <div class="hr-container">
              <hr>
              <div class="hr-text">
                Ou
              </div>
            </div>

            <div class="form-social-container">
              <button class="social-btn">
                <svg class="mr-2 -ml-1 w-8 h-8" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.5 30C23.7842 30 30.5 23.2842 30.5 15C30.5 6.71572 23.7842 0 15.5 0C7.21572 0 0.5 6.71572 0.5 15C0.5 23.2842 7.21572 30 15.5 30Z"
                    fill="#1977F3" />
                  <path
                    d="M21.3386 19.337L22.0031 15.0001H17.8434V12.1861C17.8434 11.0006 18.4234 9.84258 20.2882 9.84258H22.1803V6.15112C22.1803 6.15112 20.4632 5.85791 18.8221 5.85791C15.3964 5.85791 13.1563 7.93357 13.1563 11.6946V15.0001H9.34668V19.337H13.1563V29.8187C13.9199 29.9389 14.7025 30.0001 15.4998 30.0001C16.2972 30.0001 17.0798 29.9368 17.8434 29.8187V19.337H21.3386Z"
                    fill="white" />
                </svg>

                Connexion avec Facebook
              </button>
              <button class="social-btn">
                <svg class="mr-2 -ml-1 w-8 h-8" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1543_4607)">
                    <path
                      d="M30.4842 15.2807C30.4842 14.0516 30.3821 13.1547 30.1613 12.2246H15.7988V17.7721H24.2292C24.0593 19.1507 23.1415 21.2269 21.1018 22.622L21.0732 22.8077L25.6144 26.2455L25.929 26.2762C28.8184 23.6685 30.4842 19.8317 30.4842 15.2807Z"
                      fill="#4285F4" />
                    <path
                      d="M15.7989 29.8968C19.9291 29.8968 23.3964 28.568 25.929 26.2759L21.1019 22.6218C19.8101 23.5021 18.0764 24.1166 15.7989 24.1166C11.7536 24.1166 8.32028 21.509 7.09638 17.9048L6.91698 17.9197L2.19505 21.4907L2.1333 21.6585C4.64882 26.5416 9.8159 29.8968 15.7989 29.8968Z"
                      fill="#34A853" />
                    <path
                      d="M7.09621 17.905C6.77328 16.9749 6.58638 15.9782 6.58638 14.9485C6.58638 13.9187 6.77328 12.9221 7.07922 11.992L7.07067 11.7939L2.28956 8.16553L2.13313 8.23824C1.09636 10.2646 0.501465 12.5401 0.501465 14.9485C0.501465 17.3569 1.09636 19.6323 2.13313 21.6587L7.09621 17.905Z"
                      fill="#FBBC05" />
                    <path
                      d="M15.7989 5.78004C18.6713 5.78004 20.6089 6.99252 21.7138 8.00576L26.031 3.8866C23.3796 1.47824 19.9291 0 15.7989 0C9.81591 0 4.64882 3.35507 2.1333 8.2382L7.0794 11.992C8.32028 8.38774 11.7536 5.78004 15.7989 5.78004Z"
                      fill="#EB4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1543_4607">
                      <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                Sign in with Google
              </button>
              <button class="social-btn">
                <svg class="mr-2 -ml-1 w-8 h-8" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.7403 23.379C24.2867 24.4272 23.7498 25.3918 23.1274 26.279C22.2793 27.4882 21.5849 28.3251 21.0497 28.7901C20.2201 29.553 19.3312 29.9436 18.3794 29.9659C17.6961 29.9659 16.872 29.7715 15.9127 29.3771C14.9503 28.9844 14.0659 28.7901 13.2572 28.7901C12.4091 28.7901 11.4995 28.9844 10.5265 29.3771C9.55209 29.7715 8.7671 29.977 8.16691 29.9975C7.25416 30.0361 6.34436 29.6343 5.43621 28.7901C4.85659 28.2844 4.13162 27.4177 3.26309 26.1901C2.33126 24.879 1.56517 23.3587 0.964985 21.6254C0.322218 19.7532 0 17.9403 0 16.1852C0 14.1747 0.434442 12.4407 1.30461 10.9876C1.9885 9.82042 2.89829 8.8997 4.03698 8.22382C5.17567 7.54791 6.40602 7.20346 7.731 7.18142C8.456 7.18142 9.40671 7.40569 10.5882 7.84642C11.7663 8.28861 12.5228 8.51287 12.8544 8.51287C13.1024 8.51287 13.9428 8.25065 15.3674 7.7279C16.7146 7.24311 17.8516 7.04236 18.7831 7.12143C21.3071 7.32513 23.2034 8.32009 24.4644 10.1126C22.2071 11.4804 21.0904 13.396 21.1127 15.8535C21.133 17.7677 21.8275 19.3607 23.1923 20.6254C23.8107 21.2125 24.5015 21.6661 25.27 21.9884C25.1035 22.4717 24.9273 22.9346 24.7403 23.379ZM18.9516 0.600169C18.9516 2.10051 18.4034 3.50137 17.3109 4.798C15.9924 6.33942 14.3976 7.23014 12.6682 7.08959C12.6461 6.9096 12.6333 6.72015 12.6333 6.52108C12.6333 5.08077 13.2604 3.53933 14.3739 2.279C14.9298 1.64087 15.6368 1.11028 16.4942 0.687018C17.3498 0.270068 18.159 0.0394862 18.9201 0C18.9423 0.200572 18.9516 0.401156 18.9516 0.600149V0.600169Z"
                    fill="black" />
                </svg>
                Sign in with Apple
              </button>
            </div>
            <div class="already-auth">
              <p>Vous n'etes pas encore inscrit ?
                <router-link to="register">S'inscrire</router-link>
              </p>
            </div>

            <div class="submit-content">
              <button type="submit" class="btn-submit" :disabled="isLoading">
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
                Me Connecter
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useAuthStores } from "stores/auth.stores";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    return { v$: useVuelidate(), authStores: useAuthStores() };
  },
  data() {
    return {
      auth: {
        email: "",
        password: ""
      },
      isLoading: false
    };
  },
  validations() {
    return {
      auth: {
        email: { email, required },
        password: { required, min: minLength(6) }
      }
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.isLoading = true;
      let value = await this.authStores.login(this.auth.email, this.auth.password);
      this.isLoading = false;

      if (value.status === 200){
        this.$router.push("/")
      }
    }
  }
});
</script>
