import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify } from "quasar";
import {
  LocalStorage, Cookies
} from "quasar";


export const useAuthStores = defineStore("auth", {
  state: () => ({
    token: null,
    current_user: null,
    current_role: null,
    cookiesAccepted: false
  }),

  getters: {
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.current_user;
    },
    getRole(state) {
      return state.current_role;
    },
    getCookiesAccepted(state) {
      return state.cookiesAccepted;
    }
  },

  actions: {
    async login(email, password) {
      try {
        let user_token = await api.post("authentication_token", { email: email, password: password });

        console.log(user_token)
        Cookies.set("token", user_token.data.token);
        Cookies.set("current_user", JSON.stringify(user_token.data.user));
        const user = user_token.data.user;
        const role = (user.roles.length === 1) ? "ROLE_USER" : user.roles.filter((role) => role !== "ROLE_USER")[0];
        Cookies.set("role", role);

        this.token = user_token.data.token;
        this.current_user = user_token.data.user;
        this.current_role = role;

        const messagesAlerts = {
          color: "green", message: "Connexion réussie",
          icon: "success", position: "top-right"
        };
        Notify.create(messagesAlerts);
        // const lastRoute = this.router.options.history.state.back;
        // if (lastRoute === "/register") {
        //   this.router.push("/admin/settings");
        // } else if (lastRoute.includes("habitat-reservation")) {
        //   return;
        // }

        return user_token;
      } catch (e) {
        const errorMessageAlerts = {

          color: "warning", message: e.response.data.message,
          icon: "report_problem", position: "top-right"
        };
        Notify.create(errorMessageAlerts);
        return e;
      }
    },
    async register(data) {
      try {
        let users_token = await api.post("/users", data);

        console.log(users_token);
        const messagesAlerts = {
          color: "green", message: "Inscription réussie",
          icon: "congregate", position: "top-right"
        };
        Notify.create(messagesAlerts);
        return users_token;
      } catch (e) {
        const errorMessageAlerts = {
          color: "warning", message: e.response,
          icon: "report_problem", position: "top-right"
        };
        Notify.create(errorMessageAlerts);
        return e;
      }
    },
    logout() {
      Cookies.remove("token");
      Cookies.remove("role");
      this.token = null;
      this.current_user = null;
      const messagesAlerts = {
        color: "green", message: "Déconnexion réussie",
        icon: "congregate", position: "top-right"
      };
      Notify.create(messagesAlerts);
      this.router.push("/login");
    },
    async requestPasswordReset(data) {
      try {
        await api.post("/reset_password/request", data);
        const messagesAlerts = {
          color: "green", message: "Mot de passe envoyé avec success. Veuillez consulter votre mail.",
          icon: "congregate", position: "top-right"
        };
        Notify.create(messagesAlerts);
      } catch (e) {
        const errorMessageAlerts = {
          color: "warning", message: e.response.data.message,
          icon: "report_problem", position: "top-right"
        };
        Notify.create(errorMessageAlerts);
        return e;
      }
    },
    async resetPassword(data) {
      try {
        let value = await api.post("/reset_password/", data);
        const messagesAlerts = {
          color: "green", message: "Mot de passe envoyé avec success. Veuillez consulter votre mail.",
          icon: "congregate", position: "top-right"
        };
        Notify.create(messagesAlerts);
        return value;
      } catch (e) {
        const errorMessageAlerts = {
          color: "warning", message: e.response.data.message,
          icon: "report_problem", position: "top-right"
        };
        Notify.create(errorMessageAlerts);
        return null;
      }
    },
    acceptCookies() {
      Cookies.set("cookies_accept", "trues");
      this.cookiesAccepted = Cookies.get("cookies_accept") ?? false;
    },
    async updateUserHost(data) {
      try {
        await api.patch(`users/${this.current_user.id}`, data, {
          headers: {
            "Content-Type": "application/merge-patch+json"
          }
        });
        this.logout();
      } catch (e) {

      }
    }
  }
});
