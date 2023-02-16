<template>
  <div class="my-6">
    <form @submit.prevent="handleSubmit">
      <div class="form-groups" :class="{'error':v?.name?.$errors.length > 0}">
        <label for="logement" class="label">Nom de l’Hôtel ou du logement</label>
        <input type="text" name="logement" @blur="v.name?.$touch"
               v-model="form.name"
               placeholder="Hôtel Radison" class="form-control" required>
        <p v-if="v.name?.$error" class="form-error">{{ v.name?.$errors[0].$message }}</p>
      </div>
      <div class="form-groups" :class="{'error':v?.location?.$errors.length > 0}">
        <label for="localisation" class="label">Localisation de l’Hôtel ou du logement</label>
        <vue-google-autocomplete id="map" ref="address" class="form-control" placeholder="Localisation"
                                 v-model="form.location" v-on:placechanged="getAddressData"
                                 @blur="v.location?.$touch">
        </vue-google-autocomplete>
        <p v-if="v.location?.$error" class="form-error">{{ v.location?.$errors[0].$message }}</p>
      </div>
      <div class="form-groups" :class="{'error':v?.price?.$errors.length > 0}">
        <label for="price" class="label">Coût par nuitée</label>
        <input type="number" id="price" name="price" @blur="v.price?.$touch"
               v-model="form.price"
               placeholder="Nuité " class="form-control" required>
        <p v-if="v.price?.$error" class="form-error">{{ v.price?.$errors[0].$message }}</p>
      </div>
      <div class="form-groups" :class="{'error':v?.maxPeople?.$errors.length > 0}">
        <label for="max-people" class="label">Capacité acceuil maximal</label>
        <input type="number" name="max-people" id="max_people" @blur="v.maxPeople?.$touch"
               v-model="form.maxPeople"
               placeholder="7" class="form-control" required>
        <p v-if="v.maxPeople?.$error" class="form-error">{{ v.maxPeople?.$errors[0].$message }}</p>
      </div>
      <!--      <div class="form-groups" :class="{'error':v?.max_people?.$errors.length > 0}">-->
      <!--        <label for="localisation" class="label">Capacité acceuil maximal</label>-->
      <!--        <input type="number" name="price" @blur="v.max_people?.$touch"-->
      <!--               v-model="form.max_people"-->
      <!--               placeholder="120" class="form-control" required>-->
      <!--        <p v-if="v.max_people?.$error" class="form-error">{{ v.max_people?.$errors[0].$message }}</p>-->
      <!--      </div>-->
      <div class="form-groups" :class="{'error':v?.couchage?.$errors.length > 0}">
        <label for="couchage" class="label">Nombre de lit</label>
        <input type="number" name="couchage" id="couchage" @blur="v.couchage?.$touch"
               v-model="form.couchage"
               placeholder="2" class="form-control" required>
        <p v-if="v.couchage?.$error" class="form-error">{{ v.couchage?.$errors[0].$message }}</p>
      </div>
      <div class="form-groups" :class="{'error':v?.capacity?.$errors.length > 0}">
        <label for="capacity" class="label">Taille en m2</label>
        <input type="number" name="capacity" id="capacity" @blur="v.capacity?.$touch"
               v-model="form.capacity"
               placeholder="120" class="form-control" required>
        <p v-if="v.capacity?.$error" class="form-error">{{ v.capacity?.$errors[0].$message }}</p>
      </div>
      <div class="forms-groups">
        <label for="dropzone-file" class="label">Ajouter des photos </label>
        <div class="dropzone-container">
          <label for="dropzone-file" class="content">
            <div class="label-content">
              <svg class="w-10 h-10 mb-3 text-gray-400" viewBox="0 0 20 21" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path class="fill-yellow-300"
                      d="M11.2004 2.10039C11.2004 1.78213 11.074 1.47691 10.8489 1.25186C10.6239 1.02682 10.3187 0.900391 10.0004 0.900391C9.68213 0.900391 9.37691 1.02682 9.15186 1.25186C8.92682 1.47691 8.80039 1.78213 8.80039 2.10039V9.30039H1.60039C1.28213 9.30039 0.976906 9.42682 0.751862 9.65186C0.526819 9.87691 0.400391 10.1821 0.400391 10.5004C0.400391 10.8187 0.526819 11.1239 0.751862 11.3489C0.976906 11.574 1.28213 11.7004 1.60039 11.7004H8.80039V18.9004C8.80039 19.2187 8.92682 19.5239 9.15186 19.7489C9.37691 19.974 9.68213 20.1004 10.0004 20.1004C10.3187 20.1004 10.6239 19.974 10.8489 19.7489C11.074 19.5239 11.2004 19.2187 11.2004 18.9004V11.7004H18.4004C18.7187 11.7004 19.0239 11.574 19.2489 11.3489C19.474 11.1239 19.6004 10.8187 19.6004 10.5004C19.6004 10.1821 19.474 9.87691 19.2489 9.65186C19.0239 9.42682 18.7187 9.30039 18.4004 9.30039H11.2004V2.10039Z" />
              </svg>
              <div class="text-label-container">
                <div class="info">Glissez et déposer vos images</div>
                <div class="notice">Formats supportés: PNG, JPEG</div>
              </div>
              <div class="label-text">
                Selectionner un document
              </div>
            </div>
            <input id="dropzone-file" type="file" class="hidden" ref="file" v-on:change="handleFileUpload" />
          </label>
        </div>
      </div>
      <div class="preview-image-container my-9 relative space-x-3">
        <div class=" w-full rounded relative" v-for="file in getMedias" v-bind:key="file">
          <div class="absolute w-full bg-yellow-100 bg-opacity-5 flex">
            <q-icon
              name="fa-solid fa-trash" class="p-2 hover:bg-neutral-300 rounded-full cursor-pointer"
              @click="deleteFile(file)" />
          </div>
          <img :src="getImage(file)" class=" rounded object-cover" alt="" />
        </div>
      </div>
      <div class="button-container !mb-24">
        <button class="w-full block btn btn-primary rounded" type="submit">Continuer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useCategoryStores } from "stores/category.stores";
import { useMediaStores } from "stores/media.stores";
import { mapState } from "pinia";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default defineComponent({
  name: `ImagePicker`,
  emits: ["navigate"],
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      file: ""
    };
  },
  setup(props, { emit }) {

    const validations = {
      name: { required },
      coverImage: { required },
      location: { required },
      price: { required },
      maxPeople: { required },
      capacity: { required },
      couchage: { required }
    };

    const form = reactive({
      name: "",
      coverImage: null,
      location: "",
      imageHabitats: [],
      price: null,
      maxPeople: null,
      capacity: null,
      couchage: null
    });

    const mediaStores = useMediaStores();

    // sends validations to its parent, if it has the same scope.
    const v = useVuelidate(validations, form, { $scope: props.scope });

    const navigate = function(data) {
      emit("navigate", data);
    };
    return { v, form, navigate, mediaStores };
  },
  methods: {
    async submit(event) {
      console.log(this.form);
      const isFormCorrect = await this.v.$validate();
      if (!isFormCorrect) return;
      console.log("fabien", this.form);
      // this.navigate(this.form);
    },
    async handleFileUpload(event) {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      await this.mediaStores.postMedia(formData);
      console.log(this.file);
      this.form.coverImage = this.getMedias[0]["@id"];
      this.form.imageHabitats = this.getMedias.map(value => value["@id"]);
    },
    getImage(image) {
      let url = import.meta.env.VITE_IMAGE_URL + image?.fileUrl;
      return url;
    },
    deleteFile(file) {
      console.log(file);
    },
    getAddressData(addressData, placeResultData, id) {
      console.log(addressData, placeResultData, id);
      this.form.location = placeResultData.formatted_address;
      this.form.longitude = addressData.longitude.toString();
      this.form.latitude = addressData.latitude.toString();
    },
    async handleSubmit() {
      console.log(this.form);
      const isFormCorrect = await this.v.$validate();
      if (!isFormCorrect) return;
      console.log("fabien");
      this.navigate(this.form);
    }
  }, computed: {
    ...mapState(useMediaStores, ["getMedias"])
  }
});
</script>

