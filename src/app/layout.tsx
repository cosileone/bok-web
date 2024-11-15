import { type ReactNode } from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "~/styles/globals.css";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Contexts from "~/components/Contexts";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s - BOK",
    default:
      "BOK - L’app che rende l’indipendenza finanziaria un gioco da ragazzi!",
  },
  description:
    "Raggiungi la tua indipendenza finanziaria con BOK! Risparmia ed investi in modo semplice ed efficace. Dalla Generazione Z per la generazione Z",
};

export default function RootLayout({
  params,
  children,
}: {
  params?: { locale: string };
  children: ReactNode;
}) {
  const locale = params?.locale ?? "it";
  return (
    <Contexts>
      <html
        lang={locale}
        className={clsx("h-full antialiased", inter.variable)}
      >
        <body className="flex h-full flex-col bg-gray-50">
          {children}
          <Toaster />
          <Analytics />
        </body>
      </html>
    </Contexts>
  );
}
