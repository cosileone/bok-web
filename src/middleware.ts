import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isDevProcess = process.env.NODE_ENV === "development";

// https://clerk.com/docs/references/nextjs/clerk-middleware#configure-clerk-middleware
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  // "/business(.*)",
]);

export default clerkMiddleware(
  (auth, request) => {
    if (isProtectedRoute(request)) auth().protect();
  },
  { debug: isDevProcess },
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
