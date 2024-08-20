import { type ReactNode } from "react";
import { locales } from "~/i18n";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params?: { locale: string };
}) {
  const locale = params?.locale ?? "it";
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: "%s - BOK",
      default:
        "BOK - L’app che rende l’indipendenza finanziaria un gioco da ragazzi!",
    },
    description:
      "Raggiungi la tua indipendenza finanziaria con BOK! Risparmia ed investi in modo semplice ed efficace. Dalla Generazione Z per la generazione Z",
  };
}

export default async function Layout({
  params,
  children,
}: {
  params?: { locale: string };
  children: ReactNode;
}) {
  const locale = params?.locale ?? "it";
  const messages = await getMessages({ locale });
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <>{children}</>
    </NextIntlClientProvider>
  );
}
