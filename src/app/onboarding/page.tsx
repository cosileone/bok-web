import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { OnboardingStep1 } from "~/components/OnboardingStep1";

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
      <OnboardingStep1 />
    </div>
  );
}
