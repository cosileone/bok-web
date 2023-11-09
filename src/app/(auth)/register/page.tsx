import Link from "next/link";

import { AuthLayout } from "~/_components/AuthLayout";
import { Button } from "~/_components/Button";
import { SelectField, TextField } from "~/_components/Fields";
import { type Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Register() {
  return (
    <AuthLayout
      title="Sign up for an account"
      subtitle={
        <>
          Already registered?{" "}
          <Link href="/login" className="text-cyan-600">
            Sign in
          </Link>{" "}
          to your account.
        </>
      }
    >
      <SignUp />
    </AuthLayout>
  );
}
