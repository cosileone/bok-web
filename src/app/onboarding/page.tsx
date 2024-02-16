import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Onboarding() {
  return (
    <div>
      <UserButton afterSignOutUrl={"/"} />
      Onboarding
      <br />
      <SignOutButton />
    </div>
  );
}
