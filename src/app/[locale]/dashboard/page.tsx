import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <FullWidthThreeColumnLayout />
    </>
  );
}
