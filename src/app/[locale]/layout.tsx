import { type ReactNode } from "react";
import { type Metadata } from "next";
import { locales } from "~/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: {
    template: "%s - BOK",
    default:
      "BOK - L’app che rende l’indipendenza finanziaria un gioco da ragazzi!",
  },
  description:
    "Raggiungi la tua indipendenza finanziaria con BOK! Risparmia ed investi in modo semplice ed efficace. Dalla Generazione Z per la generazione Z",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Layout({
  params,
  children,
}: {
  params?: { locale: string };
  children: ReactNode;
}) {
  const locale = params?.locale ?? "en";
  unstable_setRequestLocale(locale);
  return <div className="flex h-full flex-col">{children}</div>;
}
