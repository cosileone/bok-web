import { type Metadata } from "next";
import { SignOutButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <br />
      <SignOutButton />
    </div>
  );
}
