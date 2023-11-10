import { type Metadata } from "next";
import { SignOutButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Onboarding() {
  return (
    <div>
      Onboarding
      <br />
      <SignOutButton />
    </div>
  );
}
