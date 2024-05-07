import { type ReactNode } from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "~/styles/globals.css";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={clsx("h-full bg-neutral-50 antialiased", inter.variable)}
      >
        <body className="flex h-full flex-col">
          <div className="flex h-full flex-col">{children}</div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
