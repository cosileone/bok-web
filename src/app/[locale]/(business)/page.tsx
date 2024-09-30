import { Faqs } from "~/components/salient/Faqs";
import { Footer } from "~/components/salient/Footer";
import { Header } from "~/components/salient/Header";
import { Hero } from "~/components/salient/Hero";
import { Pricing } from "~/components/salient/Pricing";
import { PrimaryFeatures } from "~/components/salient/PrimaryFeatures";

import "~/styles/cursor-reset.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={"bg-bokpurple"}>
        <Hero />
        <PrimaryFeatures />
        {/*<SecondaryFeatures />*/}
        {/*<CallToAction />*/}
        {/*<Testimonials />*/}
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
