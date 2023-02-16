import { boot } from "quasar/wrappers";
import axios from "axios";
import { useAuthStores } from "stores/auth.stores";
import { LocalStorage, Cookies } from "quasar";
import VueSnip from "vue-snip";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export default boot(({ app, ssrContext }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  const auth = useAuthStores();
  api.interceptors.request.use(
    (config) => {
      const cookies = process.env.SERVER
        ? Cookies.parseSSR(ssrContext) : Cookies;
      const token = cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    }, async (error) => {
      if (error.response.status === 401) {
        if (!error.request.responseURL.includes("authentication_token")) {
          auth.logout();
        }

      }
      return Promise.reject(error);
    }
  );

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
