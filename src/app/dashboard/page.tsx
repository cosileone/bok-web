import { type Metadata } from "next";
import { SignOutButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl={"/"} />
      Dashboard
      <br />
      <SignOutButton />
    </div>
  );
}
