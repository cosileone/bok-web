import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { OnboardingStep2 } from "~/components/OnboardingStep2";

export const metadata: Metadata = {
  title: "Welcome to BOK!",
};

export default function Onboarding() {
  return (
    <div>
      <UserButton afterSignOutUrl={"/"} />
      Onboarding
      <br />
      <SignOutButton />
      <OnboardingStep2 />
    </div>
  );
}
