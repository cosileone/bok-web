import { CallToAction } from "~/components/frontpage/CallToAction";
import { Faqs } from "~/components/frontpage/Faqs";
import { Hero } from "~/components/frontpage/Hero";
import { Pricing } from "~/components/frontpage/Pricing";
import { PrimaryFeatures } from "~/components/frontpage/PrimaryFeatures";
import { Reviews } from "~/components/frontpage/Reviews";
import { SecondaryFeatures } from "~/components/frontpage/SecondaryFeatures";
import Team from "~/components/frontpage/Team";
import "~/styles/cursor.css";
import "~/styles/google-fonts.css";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params?: { locale: string } }) {
  const locale = params?.locale ?? "it";
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      {/*<Reviews />*/}
      {/*<Pricing />*/}
      <Team />
      <Faqs />
    </>
  );
}
