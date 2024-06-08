import { Footer } from "~/components/frontpage/Footer";
import { Header } from "~/components/frontpage/Header";
import { unstable_setRequestLocale } from "next-intl/server";

export function Layout({
  params,
  children,
}: {
  params?: { locale: string };
  children?: React.ReactNode;
}) {
  const locale = params?.locale ?? "en";
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
