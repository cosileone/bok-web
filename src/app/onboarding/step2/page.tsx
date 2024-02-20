import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { OnboardingStep2 } from "~/components/OnboardingStep2";

export const metadata: Metadata = {
  title: "Welcome to BOK!",
};

export default function OnboardingPage2() {
  return (
    <div className={"pt-20 sm:pt-40"}>
      {/*<UserButton afterSignOutUrl={"/"} />*/}
      {/*Onboarding*/}
      {/*<br />*/}
      {/*<SignOutButton />*/}
      <OnboardingStep2 />
    </div>
  );
}
