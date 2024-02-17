import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { ThankYou } from "~/components/thank-you";

export const metadata: Metadata = {
  title: "Benvenuti a BOK!",
};

export default function Onboarding() {
  return (
    <div>
      <UserButton afterSignOutUrl={"/"} />
      Thank You
      <br />
      <SignOutButton />
      <ThankYou />
    </div>
  );
}
