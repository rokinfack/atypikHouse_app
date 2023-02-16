import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify } from "quasar";

export const useBlogActivities = defineStore("blog-activities", {
  state: () => ({
    blogs: [],
    selectedBlog: null
  }),

  getters: {
    getBlogs(state) {
      return state.blogs;
    },
    getSelectedBlog(state) {
      return state.selectedBlog;
    }
  },

  actions: {
    async getBlogActivities() {
      try {
        let activities = await api.get(`activities?order[createdAt]=desc`);
        this.blogs = activities.data;
        return activities.data;
      } catch (e) {
        return null;
      }
    },
    async getCurrentBlogActivities(id) {
      try {
        let activity = await api.get(`activities/${id}`);
        this.selectedBlog = activity.data;
        return activity.data;
      } catch (e) {
        return null;
      }
    },
    async creatBlogActivities(data) {
      try {
        let activities = await api.post(`activities`, data);
        const messagesAlerts = {
          color: "green", message: "Opération réussie",
          icon: "success", position: "top-right"
        };
        Notify.create(messagesAlerts);
        this.router.push("/admin/blog");
        return activities.data;
      } catch (e) {
        return null;
      }
    },
    async updateBlogActivities(data) {
      try {
        let activities = await api.patch(`activities/${this.selectedBlog.id}`,data, {
          headers: {
            "Content-Type": "application/merge-patch+json"
          }
        });
        return activities.data;
      } catch (e) {
        return null;
      }
    }
  }
});
