import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["it", "en"];
export const defaultLocale = "it";
export const localePrefix = "as-needed";

export const resolveLocaleEmoji = (locale?: string | string[]) => {
  switch (locale) {
    case "it":
      return "🇮🇹";
    case "en":
      return "🇬🇧";
    default:
      return "🇮🇹";
  }
};

// https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  const messages = (await import(`../messages/${locale}.json`)) as {
    default: Record<string, string>;
  };

  return {
    messages: messages.default,
  };
});
