import Link from "next/link";

import { AuthLayout } from "~/_components/AuthLayout";
import { Button } from "~/_components/Button";
import { TextField } from "~/_components/Fields";
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
          <Link href="/register" className="text-cyan-600">
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
