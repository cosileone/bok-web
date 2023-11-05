import { CallToAction } from "~/_components/CallToAction";
import { Faqs } from "~/_components/Faqs";
import { Hero } from "~/_components/Hero";
import { Pricing } from "~/_components/Pricing";
import { PrimaryFeatures } from "~/_components/PrimaryFeatures";
import { Reviews } from "~/_components/Reviews";
import { SecondaryFeatures } from "~/_components/SecondaryFeatures";
import Team from "~/_components/Team";
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
