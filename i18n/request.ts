import { getRequestConfig } from "next-intl/server";

const locales = ["ar", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as string)) {
    locale = "ar";
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
