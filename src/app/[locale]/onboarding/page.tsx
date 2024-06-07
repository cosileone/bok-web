import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { OnboardingStep1 } from "~/components/OnboardingStep1";

export const metadata: Metadata = {
  title: "Benvenuti a BOK!",
};

export default function Onboarding() {
  return (
    <div className={"pt-20 sm:pt-40"}>
      {/*<UserButton afterSignOutUrl={"/"} />*/}
      {/*Onboarding*/}
      {/*<br />*/}
      {/*<SignOutButton />*/}
      <OnboardingStep1 />
    </div>
  );
}
