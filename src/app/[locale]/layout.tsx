import { type ReactNode } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - BOK",
    default:
      "BOK - L’app che rende l’indipendenza finanziaria un gioco da ragazzi!",
  },
  description:
    "Raggiungi la tua indipendenza finanziaria con BOK! Risparmia ed investi in modo semplice ed efficace. Dalla Generazione Z per la generazione Z",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex h-full flex-col">{children}</div>;
}
