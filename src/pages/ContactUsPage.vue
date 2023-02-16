<template>
  <div class="form-page-content">
    <div class="w-8/12 mt-16">
      <div class="contact-us-title">
        <h1>Contacter AtypikHouse</h1>
      </div>
      <div class="contact-us-card">
        <div class="contact-us-description">
          <p>Vous souhaitez obtenir des informations supplémentaires, émettre une réclamation,
            nous faire part de vos suggestions ou de votre expérience de visite, contactez-nous en complétant
            ce formulaire. Nous vous répondrons sous 1 semaine maximum.</p>
          <br>
          <p>Des suggestions d’acquisition à nous proposer ?, rendez-vous sur le <a href="">support.atypikhouse.fr</a>
          </p>
        </div>
        <div class="contact-us-info">
          <div class="contact-us-info-title">
            <p class="title">Information de contact</p>
          </div>
          <div class="contact-us-info-data">
            <a class="contact-us-phone block" href="tel:++33705089305">
              <q-icon name="fa-solid fa-mobile-screen" class="contact-us-icon" />
              +337 05 08 93 05
            </a>
            <a class="contact-us-email" href="mailto:alladefabien@gmail.com">
              <q-icon name="fa-solid fa-envelope" class="contact-us-icon" />
              alladefabien@gmail.com
            </a>
          </div>
        </div>
        <div class="contact-us-form">
          <form action="" @submit.prevent="submitForm">
            <div class="contact-us-form-title">
              <h1 class="title">Formulaire de contact</h1>
            </div>
            <div class="form-groups" :class="{'error':v$.name?.$errors.length > 0}">
              <label for="name" class="label">Nom</label>
              <input type="text" class="form-control" name="name" id="name" placeholder="Nom" v-model="name">
              <p v-if="v$.name?.$error" class="form-error">{{ v$.name?.$errors[0].$message }}</p>
            </div>
            <div class="flex space-x-3">
              <div class="form-groups col " :class="{'error':v$.city?.$errors.length > 0}">
                <label for="ville" class="label">Ville</label>
                <input type="text" class="form-control" name="ville" id="ville" v-model="city" placeholder="Ville">
                <p v-if="v$.city?.$error" class="form-error">{{ v$.city?.$errors[0].$message }}</p>
              </div>
              <div class="form-groups col" :class="{'error':v$.social_reason?.$errors.length > 0}">
                <label for="raison" class="label">Raison Sociale</label>
                <input type="text" class="form-control" name="raison" id="raison" placeholder="Raison Sociale"
                       v-model="social_reason">
                <p v-if="v$.social_reason?.$error" class="form-error">{{ v$.social_reason?.$errors[0].$message }}</p>
              </div>
            </div>
            <div class="flex space-x-3">
              <div class="form-groups col" :class="{'error':v$.phoneNumber?.$errors.length > 0}">
                <label for="phone" class="label">Numéro de téléphone</label>
                <input type="tel" class="form-control" name="phone" id="phone" v-model="phoneNumber"
                       placeholder="Numéro de téléphone">
                <p v-if="v$.phoneNumber?.$error" class="form-error">{{ v$.phoneNumber?.$errors[0].$message }}</p>
              </div>
              <div class="form-groups col" :class="{'error':v$.email?.$errors.length > 0}">
                <label for="email" class="label">Adresse Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Adresse Email">
                <p v-if="v$.email?.$error" class="form-error">{{ v$.email?.$errors[0].$message }}</p>
              </div>
            </div>
            <div class="form-groups" :class="{'error':v$.object_message?.$errors.length > 0}">
              <label for="object_name" class="label">Objet du message</label>
              <select name="object_message" id="object_name" v-model="object_message" class="form-control">
                <option value="object">object</option>
              </select>
            </div>

            <div class="form-groups" :class="{'error':v$.message?.$errors.length > 0}">
              <label for="message" class="label">Message</label>
              <textarea name="message" id="message" cols="30" rows="5" v-model="message" class="form-control">
              </textarea>
              <p v-if="v$.message?.$error" class="form-error">{{ v$.message?.$errors[0].$message }}</p>
            </div>
            <div class="button-contain py-5">
              <button type="submit" class="btn btn-primary block w-full rounded">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

export default defineComponent({
  name: "ContactUsPage",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      city: "",
      phoneNumber: "",
      social_reason: "",
      email: "",
      object_message: "",
      message: ""
    };
  },
  validations() {
    return {
      name: { required },
      city: { required },
      phoneNumber: { required },
      email: { required, email },
      social_reason: { required },
      object_message: {},
      message: {}
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

    }
  }

});
</script>

