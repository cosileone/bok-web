import { Button } from "~/components/frontpage/Button";
import { CirclesBackground } from "~/components/frontpage/CirclesBackground";
import { Container } from "~/components/frontpage/Container";
import { Layout } from "~/components/frontpage/Layout";
import { unstable_setRequestLocale } from "next-intl/server";

export default function NotFound({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <CirclesBackground className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-neutral-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
        <p className="text-sm font-semibold text-neutral-900">404</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-neutral-900">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-neutral-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="outline" className="mt-8">
          Go back home
        </Button>
      </Container>
    </Layout>
  );
}
