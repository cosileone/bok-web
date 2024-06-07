import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "~/i18n";

const isDevProcess = process.env.NODE_ENV === "development";

// https://clerk.com/docs/references/nextjs/clerk-middleware#configure-clerk-middleware
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/business/(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/login(.*)",
  "/register(.*)",
  "/business/login(.*)",
  "/business/register(.*)",
]);

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "it",
  localePrefix: "as-needed",
});

export default clerkMiddleware(
  (auth, request) => {
    if (isProtectedRoute(request) && !isPublicRoute(request)) auth().protect();
    return i18nMiddleware(request);
  },
  { debug: isDevProcess },
);

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(it|en)/:path*",
  ],
};
