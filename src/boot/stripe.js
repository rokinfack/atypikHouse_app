import { boot } from "quasar/wrappers";
import { StripePlugin } from "@vue-stripe/vue-stripe";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  // something to do
  const options = {
    pk: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    testMode: true,
    locale: "fr"
  };
  app.prototype.$stripe = window.Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY, options)
  // app.use(StripePlugin, options);

});
