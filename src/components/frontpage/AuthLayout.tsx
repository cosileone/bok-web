import { type ReactNode } from "react";
import Link from "next/link";

import { CirclesBackground } from "~/components/frontpage/CirclesBackground";
import bokLogo from "/public/bok-logo.png";
import Image from "next/image";
import { Logo } from "~/components/salient/Logo";

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-full pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        {/*<Link href="/" aria-label="Home">*/}
        {/*  <Image*/}
        {/*    unoptimized*/}
        {/*    src={bokLogo}*/}
        {/*    alt={""}*/}
        {/*    className={"mx-auto h-24 w-auto"}*/}
        {/*  />*/}
        {/*</Link>*/}
        <div className="relative">
          <CirclesBackground
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-neutral-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <div className={"flex justify-center"}>
            <Link href={"/"}>
              <Logo className={"lg:ml-0"} />
            </Link>
          </div>
          <h1 className="text-center text-2xl font-medium tracking-tight text-neutral-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-center text-lg text-neutral-600">
              {subtitle}
            </p>
          )}
        </div>
        <div className="-mx-4 flex flex-auto justify-center px-4 py-10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-16">
          {children}
        </div>
      </div>
    </main>
  );
}
