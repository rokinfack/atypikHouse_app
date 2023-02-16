<template>
  <div class="blog-bannier-item relative" v-if="getSelectedBlog">
    <img :src="getImage(getSelectedBlog.coverImage)" alt="" class="h-[40vh] w-full">
    <div class="absolute top-0 w-full h-full flex px-6 items-center justify-center">
      <div class="blog-bannier-header">
        <h1>{{ getSelectedBlog?.title }}</h1>
      </div>
    </div>
  </div>
  <div class="blog-page" v-if="getSelectedBlog">
    <div class="blog-page-container text-lg my-3" v-html="getSelectedBlog.htmlContent">
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useBlogActivities } from "stores/blog-activity.stores";

export default defineComponent({
  name: "BlogPage",
  setup() {
    const blogActivities = useBlogActivities();

    return { blogActivities };
  },
  computed: {
    ...mapState(useBlogActivities, ["getSelectedBlog"])
  },
  mounted() {
    this.blogActivities.getCurrentBlogActivities(this.$route.params.id)
  },methods:{
    getImage(cover) {
      let url = import.meta.env.VITE_IMAGE_URL + cover?.fileUrl;
      return url;
    },
  }
});
</script>

<style scoped>

</style>
