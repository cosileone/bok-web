import { CallToAction } from "~/components/CallToAction";
import { Faqs } from "~/components/Faqs";
import { Hero } from "~/components/Hero";
import { Pricing } from "~/components/Pricing";
import { PrimaryFeatures } from "~/components/PrimaryFeatures";
import { Reviews } from "~/components/Reviews";
import { SecondaryFeatures } from "~/components/SecondaryFeatures";
import Team from "~/components/Team";
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
