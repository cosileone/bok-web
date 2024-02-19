import Link from "next/link";

import { AuthLayout } from "~/components/frontpage/AuthLayout";
import { type Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Login() {
  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don’t have an account?{" "}
          <Link href={"/register"} className="text-cyan-600">
            Sign up
          </Link>{" "}
          for free!
        </>
      }
    >
      <SignIn />
    </AuthLayout>
  );
}
