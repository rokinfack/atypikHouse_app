import { boot } from "quasar/wrappers";
import ga from "../../analytics.js";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router }) => {
  // something to do
  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, sessionId);
  });
});

