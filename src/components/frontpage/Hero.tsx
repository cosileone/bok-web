import { useId } from "react";
import Image from "next/image";

import { AppDemo } from "~/components/frontpage/AppDemo";
import { Container } from "~/components/frontpage/Container";
import { PhoneFrame } from "~/components/frontpage/PhoneFrame";
import handImage from "/public/blue-hero-gfx.jpeg";
import eyes from "/public/eyes.gif";
import blob from "/public/blob.gif";
import LoginButton from "~/components/frontpage/LoginButton";
import { useTranslations } from "next-intl";

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<"div">) {
  const id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlayIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("Index");
  return (
    <div className="relative overflow-hidden bg-bokpurple py-20 sm:py-32 lg:pb-32 xl:pb-80 xl:pt-64">
      <div
        className={
          "absolute left-6 top-0 z-10 w-[130px] lg:left-36 lg:top-40 lg:z-auto lg:-mt-6 lg:w-[200px]"
        }
      >
        <Image
          unoptimized
          className={"-scale-x-100 object-cover sm:scale-x-100"}
          src={eyes}
          alt={""}
        />
      </div>
      <div
        className={
          "absolute right-10 top-72 h-[500px] w-[200px] overflow-hidden lg:left-80 lg:top-[660px] lg:w-[400px]"
        }
      >
        <Image
          unoptimized
          className={"object-cover"}
          src={blob}
          alt={""}
          style={{ objectPosition: "50px 0" }}
        />
      </div>
      <Image
        unoptimized
        src={handImage}
        className={
          "absolute top-40 hidden h-auto max-h-[200px] w-auto max-w-[200px] lg:left-8 lg:block lg:max-h-[320px]"
        }
        alt={""}
      />
      {/*<h2 className={"absolute text-neutral-200"}>*/}
      {/*  Dalla Generazione Z per la generazione Z*/}
      {/*</h2>*/}
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pl-28 lg:pt-6 xl:col-span-6">
            <h1 className="unbounded text-4xl font-medium tracking-tight text-white">
              {t("hero.title")}
            </h1>
            <p className="urbanist mt-6 text-lg text-neutral-200">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <LoginButton />
              {/*<NewsletterMiniForm />*/}
              {/* App Store Buttons */}
              {/*<AppStoreLink />*/}
              {/*<Button*/}
              {/*  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"*/}
              {/*  variant="outline"*/}
              {/*>*/}
              {/*  <PlayIcon className="h-6 w-6 flex-none" />*/}
              {/*  <span className="ml-2.5">Watch the video</span>*/}
              {/*</Button>*/}
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            {/*<BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-neutral-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />*/}
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          {/*<div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">*/}
          {/*  <p className="text-center text-sm font-semibold text-neutral-900 lg:text-left">*/}
          {/*    As featured in*/}
          {/*  </p>*/}
          {/*  <ul*/}
          {/*    role="list"*/}
          {/*    className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"*/}
          {/*  >*/}
          {/*    {[*/}
          {/*      ['Forbes', logoForbes],*/}
          {/*      ['TechCrunch', logoTechcrunch],*/}
          {/*      ['Wired', logoWired],*/}
          {/*      ['CNN', logoCnn, 'hidden xl:block'],*/}
          {/*      ['BBC', logoBbc],*/}
          {/*      ['CBS', logoCbs],*/}
          {/*      ['Fast Company', logoFastCompany],*/}
          {/*      ['HuffPost', logoHuffpost, 'hidden xl:block'],*/}
          {/*    ].map(([name, logo, className]) => (*/}
          {/*      <li key={name as string} className={clsx('flex', className as string)}>*/}
          {/*        <Image src={logo as string} alt={name as string} className="h-8" unoptimized />*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </Container>
    </div>
  );
}
