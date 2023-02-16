<template>
  <div class="admin-blog-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div class="blog-button-container">
        <button class="btn rounded bg-white border border-yellow-500 text-blue-800">Aperçu</button>
        <button class="btn btn-primary rounded text-blue-900" @click="blogForm.isPublished =!blogForm.isPublished">
          {{ blogForm.isPublished ? "Dépublier" : "Publier" }}
        </button>
      </div>
    </div>
    <div class="admin-blog-header">
      <div class="header">
        <h2>Creation d'article</h2>
      </div>
    </div>
    <div class="admin-blog-content-new">
      <div class="admin-blog-form-content">
        <form @submit.prevent="handleSubmit">
          <div class="form-groups" :class="{'error':v$?.blogForm?.title?.$errors.length > 0}">
            <label for="title" class="label">Titre</label>
            <input type="text" class="form-control" name="title" id="title"
                   v-model="blogForm.title" @blur="v$.blogForm.title?.$touch"
                   placeholder="Pourquoi vous devez prendre des logements chez atypiKHouse">
            <p v-if="v$.blogForm?.title?.$error" class="form-error">{{ v$.blogForm?.title?.$errors[0].$message }}</p>
          </div>
          <div class="form-groups" :class="{'error':v$?.blogForm?.slug?.$errors.length > 0}">
            <label for="slug" class="label">Slug </label>
            <input type="text" class="form-control"
                   v-model="blogForm.slug" @blur="v$.blogForm.slug?.$touch"
                   placeholder="Pourquoi-prendre-logement-atypiKhouse">
            <p v-if="v$.blogForm?.slug?.$error" class="form-error">{{ v$.blogForm?.slug?.$errors[0].$message }}</p>
          </div>
          <div class="form-groups" :class="{'error':v$?.blogForm?.orderAffichage?.$errors.length > 0}">
            <label for="disposition" class="label">Disposition de l’article dans le fil </label>
            <select name="disposition" id="disposition" class="form-control"
                    v-model="blogForm.orderAffichage" @blur="v$.blogForm.orderAffichage?.$touch"
            >
              <option v-for="i in parseInt(3)" v-bind:key="i" :value="i">{{ i }}</option>
            </select>
            <p v-if="v$.blogForm?.orderAffichage?.$error" class="form-error">
              {{ v$.blogForm?.orderAffichage?.$errors[0].$message }}</p>
          </div>
          <div class="form-groups" :class="{'error':v$?.blogForm?.description?.$errors.length > 0}">
            <label for="description" class="label">Description de l'article </label>
            <textarea name="description" id="description" class="form-control"
                      v-model="blogForm.description" @blur="v$.blogForm.description?.$touch"
            ></textarea>
            <p v-if="v$.blogForm?.description?.$error" class="form-error">
              {{ v$.blogForm?.description?.$errors[0].$message }}</p>
          </div>
          <div class="form-groups" :class="{'error':v$?.blogForm?.coverImage?.$errors.length > 0}">
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
            <p v-if="v$.blogForm?.coverImage?.$error" class="form-error">
              {{ v$.blogForm?.coverImage?.$errors[0].$message }}</p>
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
          <div class="form-groups" :class="{'error':v$?.blogForm?.htmlContent?.$errors.length > 0}">
            <label for="contenu" class="label">Contenu</label>
            <q-editor v-model="blogForm.htmlContent" @blur="v$.blogForm.content?.$touch"></q-editor>
            <p v-if="v$.blogForm?.htmlContent?.$error" class="form-error">
              {{ v$.blogForm?.htmlContent?.$errors[0].$message
              }}</p>
          </div>

          <div class="button-container">
            <button class="btn btn-primary w-full block rounded" type="submit">Creer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useMediaStores } from "stores/media.stores";
import { useBlogActivities } from "stores/blog-activity.stores";
import { mapState } from "pinia";

export default defineComponent({
  name: `BlogNewPage`,
  data() {
    return {
      blogForm: {
        slug: "",
        coverImage: null,
        htmlContent: "",
        title: "",
        orderAffichage: null,
        isPublished: false,
        description: ""
      }
    };
  },
  components: {
    Breadcrumb
  },
  methods: {
    async handleSubmit() {
      console.log("fabien");
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      console.log("fabien");

      await this.blogActivities.creatBlogActivities(this.blogForm);
    },
    async handleFileUpload(event) {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      await this.mediaStores.postMedia(formData);
      console.log(this.file);
      this.blogForm.coverImage = this.getMedias[0]["@id"];
    },
    getImage(image) {
      let url = import.meta.env.VITE_IMAGE_URL + image?.fileUrl;
      return url;
    }
  },
  setup() {
    const mediaStores = useMediaStores();
    const blogActivities = useBlogActivities();

    return { v$: useVuelidate(), mediaStores, blogActivities };
  },
  validations: {
    blogForm: {
      title: { required },
      slug: { required },
      coverImage: { required },
      description: { required },
      htmlContent: { required },
      orderAffichage: { required }
    }
  }, computed: {
    ...mapState(useMediaStores, ["getMedias", "getCurrentMedia"])
  }
});
</script>

<style scoped>

</style>
