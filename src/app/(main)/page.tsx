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
import handImage from "/public/blue-hero-gfx.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={"relative z-50 m-0 p-0"}>
        <Image
          unoptimized
          src={handImage}
          className={"absolute -top-24 left-4 h-[150px] w-auto sm:hidden"}
          alt={""}
        />
      </div>
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
