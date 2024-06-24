"use client";

import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "~/components/frontpage/Container";
import { Logo } from "~/components/frontpage/Logo";
import {
  getHomepageNavigationItems,
  NavLinks,
} from "~/components/frontpage/NavLinks";
import LoginButton from "~/components/frontpage/LoginButton";
import LocalePicker from "~/components/LocalePicker";
import { useTranslations } from "next-intl";
import { Link } from "~/lib/i18n/navigation";

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    "as" | "className"
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-neutral-700"
      {...props}
    />
  );
}

export function Header() {
  const t = useTranslations("Index");

  return (
    <header className={"bg-[#2e00f9]"}>
      <nav>
        <Container className="relative z-50 flex justify-between lg:pt-8">
          <div className={"flex items-center lg:hidden"}>
            <LocalePicker />
          </div>
          <div className="relative z-10 flex w-full items-center justify-center gap-16">
            <Link href="/" aria-label="Home" className={""}>
              <Logo className={"-top-10 lg:absolute lg:ml-0 lg:h-40 lg:pl-0"} />
              {/*<Logo className="inline-block h-10 w-auto" />*/}
              {/*<h1 className="unbounded inline pl-6 text-xl font-semibold text-neutral-200">*/}
              {/*  BOK*/}
              {/*</h1>*/}
            </Link>
            <div className="hidden w-full items-center lg:flex lg:justify-end lg:gap-10">
              <NavLinks />
              <LoginButton />
              <LocalePicker />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="ui-not-focus-visible:outline-none relative z-10 -m-2 inline-flex items-center rounded-lg stroke-neutral-200 p-2 hover:bg-neutral-200/50 hover:stroke-white active:stroke-neutral-300"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-neutral-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-neutral-50 px-6 pb-6 pt-32 shadow-2xl shadow-neutral-900/20"
                        >
                          <div className="space-y-4">
                            {getHomepageNavigationItems(t).map(
                              ([label, href], index) => (
                                <MobileNavLink key={label} href={href ?? ""}>
                                  {label}
                                </MobileNavLink>
                              ),
                            )}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            {/*  <Button href="/login" variant="outline">*/}
                            {/*    Log in*/}
                            {/*  </Button>*/}
                            {/*  <Button href="#">Download the app</Button>*/}
                            <LoginButton />
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/*<Button href="/login" variant="outline" className="hidden lg:block">*/}
            {/*  Log in*/}
            {/*</Button>*/}
            {/*<Button href="#" className="hidden lg:block">*/}
            {/*  Download*/}
            {/*</Button>*/}
          </div>
        </Container>
      </nav>
    </header>
  );
}
