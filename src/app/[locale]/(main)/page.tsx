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

export default function Home() {
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
