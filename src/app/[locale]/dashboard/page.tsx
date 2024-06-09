import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { unstable_setRequestLocale } from "next-intl/server";

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
    <div>
      <UserButton />
      Dashboard
      <br />
      <SignOutButton redirectUrl={"/"} />
    </div>
  );
}
