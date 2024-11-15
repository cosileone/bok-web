"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

export const getHomepageNavigationItems = (t: (arg0: string) => string) => [
  [`${t("navigation.business")}`, "/business"],
  [`${t("navigation.features")}`, "/#features"],
  // ['Reviews', '/#reviews'],
  // ['Pricing', '/#pricing'],
  [`${t("navigation.aboutUs")}`, "/#team"],
  [`${t("navigation.faq")}`, "/#faqs"],
];

export function NavLinks({
  extraLinks = [],
  className,
}: {
  extraLinks?: string[][];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const t = useTranslations("Index");

  return getHomepageNavigationItems(t)
    .concat(extraLinks)
    .map(([label, href], index) => (
      <Link
        key={label}
        href={href ?? ""}
        className={cn(
          "unbounded relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-white transition-colors delay-150 hover:text-neutral-900 hover:delay-0",
          className,
        )}
        onMouseEnter={() => {
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
          setHoveredIndex(index);
        }}
        onMouseLeave={() => {
          timeoutRef.current = window.setTimeout(() => {
            setHoveredIndex(null);
          }, 200);
        }}
      >
        <AnimatePresence>
          {hoveredIndex === index && (
            <motion.span
              className="absolute inset-0 rounded-lg bg-neutral-100"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15 },
              }}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10">{label}</span>
      </Link>
    ));
}
