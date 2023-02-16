import { Cookies } from "quasar";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default async (ssrContext) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext) : Cookies;
}
