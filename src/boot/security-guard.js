import { boot } from "quasar/wrappers";
import { useAuthStores } from "stores/auth.stores";
import _ from "lodash";
import { Cookies, Notify } from "quasar";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router, ssrContext }) => {
  // something to do
  router.beforeEach((to, from, next) => {
    const cookies = process.env.SERVER
      ? Cookies.parseSSR(ssrContext) : Cookies;
    const token = cookies.get("token");
    const unauthorizedLinks = [
      "/login",
      "/register",
      "/reset-password-request"
    ];

    // const token = userStores.getToken;
    // ici faire du code pour les autres guard sur les autres choses

    // if (_.includes(unauthorizedLinks, to.path) && token) {
    //   next("/");
    // }

    if (!token && to.path.includes("/admin")) {

      if (from.path === "/login") {

        const errorMessageAlerts = {
          color: "warning",
          message: "Vous devez etre connecter pour avoir access",
          icon: "report_problem",
          position: "top-right"
        };
        Notify.create(errorMessageAlerts);
      }

      next("/login");
    } else {
      next();
    }
  });
});
