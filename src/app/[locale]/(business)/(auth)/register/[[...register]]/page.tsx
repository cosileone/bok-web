import Link from "next/link";

import { Logo } from "~/components/salient/Logo";
import { LoginLayout } from "~/components/salient/LoginLayout";
import { type Metadata } from "next";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import CircleSpinner from "~/components/CircleSpinner";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Register() {
  return (
    <LoginLayout>
      <Link href="/" aria-label="Home" className={"block"}>
        <Logo className={"mx-auto"} />
      </Link>
      <ClerkLoading>
        <div className={"h-[550px] text-center"}>
          <CircleSpinner className={"mr-2"} />
          <span className="text-sm font-medium leading-6 text-gray-900">
            Contacting Authentication Partner
          </span>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
    </LoginLayout>
  );
}
