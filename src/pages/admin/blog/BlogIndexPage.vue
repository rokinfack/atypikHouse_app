<template>
  <div class="admin-blog-page">
    <div class="breadcrumb-container">
      <Breadcrumb />
      <div>
        <button class="btn btn-primary rounded w-52 " @click="newBlogPage">New blog</button>
      </div>
    </div>
    <div class="admin-blog-header">
      <div class="header">
        <h2>Veuillez retrouver ici toutes vos réservation</h2>
      </div>
      <div class="header-search">
        <div class="form-groups">
          <label for="search" class="label">Rechercher dans vos favoris</label>
          <div class="input-prefix my-1 w-2/4">
            <div class="prefix">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" class="input-control w-full !py-2 !bg-white" placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <div class="admin-blog-content" v-if="getBlogs && getBlogs['hydra:member']?.length > 0">
      <div class="blog-page-card" v-for="blog in getBlogs['hydra:member']" v-bind:key="blog">
        <div class="blog-page-article-container">
          <div class="blog-page-image">
            <img :src="getImage(blog.coverImage)" alt="">
          </div>
          <div class="blog-activity-card-content">
            <div class="blog-activity-card-controller">
              <span class="blog-activity-card-time">Publié {{ moment(blog.updatedAt).startOf("day").fromNow() }}</span>
              <MenuParent as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton>
                    <i class="fa-solid fa-ellipsis font-bold"></i>
                  </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <button
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm w-full text-gray-300']"
                          @click="updateNavigate(blog)"
                        >Modifier
                        </button>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <span
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Supprimer</span>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </MenuParent>
            </div>

            <h2 class="blog-activity-card-headtext" v-snip="{ lines: 2 }">{{ blog.title }}</h2>
            <p class="blog-activity-card-description" v-snip="{ lines: 3 }">
              {{ blog.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex h-[29vh] items-center justify-center" v-else>
      <h3 class="font-semibold text-xl text-blue-800">Aucun article de blog pour le moment</h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "components/Breadcrumb.vue";
import { useBlogActivities } from "stores/blog-activity.stores";
import { mapState } from "pinia";
import moment from "moment";
import VueSnip from "vue-snip";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default defineComponent({
  name: `BlogIndexPage`,
  components: {
    MenuItem,
    Breadcrumb,
    MenuParent: Menu,
    MenuButton,
    MenuItems
    // VueSnip
  },
  setup() {
    const blogActivities = useBlogActivities();
    blogActivities.getBlogActivities();

    return { blogActivities, moment };
  },
  methods: {
    newBlogPage() {
      this.$router.push("/admin/blog/new");
    },
    getImage(image) {
      let url = import.meta.env.VITE_IMAGE_URL + image?.fileUrl;
      return url;
    },
    updateNavigate(blog) {
      this.$router.push(`/admin/blog/${blog.id}/edit`);
    }
  },
  computed: {
    ...mapState(useBlogActivities, ["getBlogs", "getSelectedBlog"])
  }
});
</script>

<style scoped>

</style>
