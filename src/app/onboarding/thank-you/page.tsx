import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { ThankYou } from "~/components/ThankYou";

export const metadata: Metadata = {
  title: "Benvenuti a BOK!",
};

export default function Onboarding() {
  return (
    <div className={"pt-20 sm:pt-40"}>
      {/*<UserButton afterSignOutUrl={"/"} />*/}
      {/*Thank You*/}
      {/*<br />*/}
      {/*<SignOutButton />*/}
      <ThankYou />
    </div>
  );
}
