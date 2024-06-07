import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["it", "en"];
export const defaultLocale = "it";

// https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // use this only for when locale is in pathname
  if (!locales.includes(locale || defaultLocale)) notFound();

  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  // const locale = "en";

  const messages = (await import(`../messages/${locale}.json`)) as {
    default: Record<string, string>;
  };

  return {
    messages: messages.default,
  };
});
