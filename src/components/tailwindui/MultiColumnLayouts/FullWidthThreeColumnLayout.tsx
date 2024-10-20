"use client";

import { type PropsWithChildren, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3Icon,
  ChartPieIcon,
  Cog8ToothIcon,
  ListBulletIcon,
  TrophyIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "~/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "~/components/salient/Logo";
import { usePathname } from "~/lib/i18n/navigation";

const navigation = [
  { name: "Home", href: "/home", icon: ChartPieIcon },
  { name: "Dashboard", href: "/dashboard", icon: ListBulletIcon },
  { name: "Learn", href: "/learn", icon: AcademicCapIcon },
  // { name: "Employees", href: "/employees", icon: UsersIcon },
  { name: "Leaderboard", href: "/leaderboard", icon: TrophyIcon },
  { name: "Profile", href: "/profile", icon: UserCircleIcon },
  { name: "Settings", href: "/settings", icon: Cog8ToothIcon },
  // {
  //   name: "Activity",
  //   href: "#activity",
  //   icon: LightningBoltIcon,
  // },
  // { name: "Goals", href: "/dashboard", icon: FireIcon },
  // { name: "Projects", href: "#", icon: FolderIcon },
  // { name: "Calendar", href: "#", icon: CalendarIcon },
  // { name: "Assets", href: "#", icon: DocumentDuplicateIcon },
  // { name: "Reports", href: "#", icon: ChartPieIcon },
];

type Team = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};
const teams: Team[] = [
  // { id: 1, name: "Nike Campaign", href: "#", initial: "1", current: false },
  // { id: 2, name: "2024 Programming", href: "#", initial: "2", current: false },
  // { id: 3, name: "Marketing Team", href: "#", initial: "3", current: false },
];

export default function FullWidthThreeColumnLayout({
  children,
}: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <>
      <div>
        <Transition show={sidebarOpen}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Logo className={"h-16"} />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={cn(
                                    currentPath === item.href
                                      ? "bg-gray-50 text-bokpurple"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-bokpurple",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    className={cn(
                                      currentPath === item.href
                                        ? "text-bokpurple"
                                        : "text-gray-400 group-hover:text-bokpurple",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={cn(
                                    team.current
                                      ? "bg-gray-50 text-blue-600"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                >
                                  <span
                                    className={cn(
                                      team.current
                                        ? "border-blue-600 text-blue-600"
                                        : "border-gray-200 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Logo className={"ml-4 mt-4 h-16"} />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={cn(
                            currentPath === item.href
                              ? "bg-gray-50 text-bokpurple"
                              : "text-gray-700 hover:bg-gray-50 hover:text-bokpurple",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                        >
                          <item.icon
                            className={cn(
                              currentPath === item.href
                                ? "text-bokpurple"
                                : "text-gray-400 group-hover:text-bokpurple",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/*<li>*/}
                {/*  <div className="text-xs font-semibold leading-6 text-gray-400">*/}
                {/*    Your teams*/}
                {/*  </div>*/}
                {/*  <ul role="list" className="-mx-2 mt-2 space-y-1">*/}
                {/*    {teams.map((team) => (*/}
                {/*      <li key={team.name}>*/}
                {/*        <a*/}
                {/*          href={team.href}*/}
                {/*          className={cn(*/}
                {/*            team.current*/}
                {/*              ? "bg-gray-50 text-blue-600"*/}
                {/*              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",*/}
                {/*            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",*/}
                {/*          )}*/}
                {/*        >*/}
                {/*          <span*/}
                {/*            className={cn(*/}
                {/*              team.current*/}
                {/*                ? "border-blue-600 text-blue-600"*/}
                {/*                : "border-gray-200 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600",*/}
                {/*              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",*/}
                {/*            )}*/}
                {/*          >*/}
                {/*            {team.initial}*/}
                {/*          </span>*/}
                {/*          <span className="truncate">{team.name}</span>*/}
                {/*        </a>*/}
                {/*      </li>*/}
                {/*    ))}*/}
                {/*  </ul>*/}
                {/*</li>*/}
                <li className="-mx-6 mt-auto">
                  <span className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonBox: {
                            flexDirection: "row-reverse",
                            padding: "6px 12px 6px 6px",
                          },
                          userButtonOuterIdentifier: {
                            fontWeight: "600",
                          },
                        },
                      }}
                      showName
                    />
                    {/*<span className="sr-only">Your profile</span>*/}
                    {/*<span aria-hidden="true">Tom Cook</span>*/}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a>
            <span className="sr-only">Your profile</span>
            <UserButton />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="xl:pl-96">
            <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              {/* Main area */}
              {children}
            </div>
          </div>
        </main>

        {/*<aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">*/}
        {/*  /!* Secondary column (hidden on smaller screens) *!/*/}
        {/*</aside>*/}
      </div>
    </>
  );
}
