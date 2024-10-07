import Link from "next/link";
import { Logo } from "~/components/salient/Logo";
import { LoginLayout } from "~/components/salient/LoginLayout";
import { type Metadata } from "next";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import CircleSpinner from "~/components/CircleSpinner";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Login() {
  return (
    <LoginLayout>
      <Link href="/" aria-label="Home">
        <Logo className="lg:ml-20" />
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
        <SignIn />
      </ClerkLoaded>
    </LoginLayout>
  );
}
