import Link from "next/link";

import { Logo } from "~/components/salient/Logo";
import { SlimLayout } from "~/components/salient/SlimLayout";
import { type Metadata } from "next";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import CircleSpinner from "~/components/CircleSpinner";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Register() {
  return (
    <SlimLayout>
      <Link href="/business" aria-label="Home">
        <Logo className={"lg:ml-auto lg:mr-auto"} />
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
        <SignUp forceRedirectUrl={"/dashboard"} />
      </ClerkLoaded>
    </SlimLayout>
  );
}
