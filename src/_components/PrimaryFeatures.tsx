"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import {
  AnimatePresence,
  type MotionProps,
  type Variant,
  type Variants,
  motion,
} from "framer-motion";
import { useDebouncedCallback } from "use-debounce";
import Image from "next/image";
import arrotondamentiImage from "~/_images/1-arrotondamenti.jpeg";
import swearJarImage from "~/_images/2-swear-jar.jpeg";
import cassetteImage from "~/_images/3-pillole-finanziarie.jpeg";

import { AppScreen } from "~/_components/AppScreen";
import { CircleBackground } from "~/_components/CircleBackground";
import { Container } from "~/_components/Container";
import { PhoneFrame } from "~/_components/PhoneFrame";
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from "~/_components/StockLogos";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

interface CustomAnimationProps {
  isForwards: boolean;
  changeCount: number;
}

const features = [
  {
    name: "Arrotondamenti Round-up",
    description:
      "Ogni volta che fai un acquisto con la tua carta BOK, potrai arrotondare l’importo speso all’euro successivo, risparmiandolo nel tuo conto salvadanaio in automatico. Inoltre, potrai moltiplicare la cifra raddoppiando, triplicando come vorrai tu. Attiva subito le funzioni!",
    icon: RocketEmoji,
    screen: RoundupScreen,
  },
  {
    name: '“Swear Jar” o "Barattolo delle penitenze"',
    description: (
      <>
        &quot;Il barattolo delle penitenze&quot; è il modo divertente per
        superare le cattive abitudini senza svuotare il portafoglio! <br />
        <br /> Crea delle regole personalizzate e imposta limiti di spesa nei
        tuoi negozi preferiti. Ad esempio, ogni volta che senti nominare un
        personaggio famoso o che spendi più di 50 euro da Zara, risparmia 5 euro
      </>
    ),
    icon: DeviceNotificationIcon,
    screen: SwearJarScreen,
  },
  {
    name: "Competizioni e Pillole Finanziarie",
    description:
      "Partecipa in competizioni avvincenti, sia in singolo che con amici, sfidando gli altri utenti per chi riesce a risparmiare più soldi con la app! Vinci premi fantastici quali ricompense in denaro, viaggi e tanto altro.",
    icon: DeviceTouchIcon,
    screen: VideoBitsScreen,
  },
];

function RocketEmoji(props: React.ComponentPropsWithoutRef<"svg">) {
  return <span className="text-[32px]">🚀</span>;
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return <span className="text-[32px]">🗣</span>;
}

function DeviceTouchIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return <span className="text-[32px]">💰</span>;
}

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const maxZIndex = 2147483647;

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  transition: { duration: 0.4 },
};

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});

const bodyAnimation: MotionProps = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
};

type ScreenProps =
  | {
      animated: true;
      custom: CustomAnimationProps;
    }
  | { animated?: false };

function RoundupScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Arrotondamenti</AppScreen.Title>
        {/*<AppScreen.Subtitle>*/}
        {/*  Get tips <span className="text-white">5s sooner</span> for every*/}
        {/*  invite.*/}
        {/*</AppScreen.Subtitle>*/}
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="h-full px-4 py-6">
          <div className="h-full space-y-6">
            <Image
              unoptimized
              className={"h-full rounded-lg object-cover object-left"}
              style={{ objectPosition: "-90px 0px" }}
              src={arrotondamentiImage}
              alt={""}
            />
          </div>
          <div className="mt-6 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
            Invite person
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function SwearJarScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Swear Jar</AppScreen.Title>
        {/*<AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>*/}
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="h-full px-4 py-6">
          <div className="h-full space-y-6">
            <Image
              unoptimized
              className={"h-full rounded-lg object-cover object-left"}
              style={{ objectPosition: "-90px 0px" }}
              src={swearJarImage}
              alt={""}
            />
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function VideoBitsScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Pillole Finanziarie</AppScreen.Title>
        {/*<AppScreen.Subtitle>*/}
        {/*  <span className="text-white">$34.28</span> per share*/}
        {/*</AppScreen.Subtitle>*/}
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="h-full px-4 py-6">
          <div className="h-full space-y-4">
            <Image
              unoptimized
              className={"h-full rounded-lg object-cover object-left"}
              style={{ objectPosition: "-110px 0px" }}
              src={cassetteImage}
              alt={""}
            />{" "}
            {/*<div className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">*/}
            {/*  Buy shares*/}
            {/*</div>*/}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function FeaturesDesktop() {
  const [changeCount, setChangeCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const onChange = useDebouncedCallback(
    (selectedIndex: number) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true },
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-orange-600"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="unbounded ui-not-focus-visible:outline-none text-left focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="urbanist mt-2 text-gray-200">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="ui-not-focus-visible:outline-none col-start-1 row-start-1 flex focus:outline-offset-[32px]"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null,
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  );
}

function FeaturesMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef<React.ElementRef<"div">>(null);
  const slideRefs = useRef<Array<React.ElementRef<"div">>>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    );

    for (const slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? "rotate-180" : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="unbounded mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="urbanist mt-2 text-sm text-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              "relative h-0.5 w-4 rounded-full",
              featureIndex === activeIndex ? "bg-gray-300" : "bg-gray-500",
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex]!.scrollIntoView({
                block: "nearest",
                inline: "nearest",
              });
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  );
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-[#2e00f9] py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-3xl lg:text-center">
          <h2 className="unbounded text-3xl font-medium tracking-tight text-white">
            Scopri le funzionalità di BOK Italia
          </h2>
          <p className="urbanist mt-2 text-lg text-gray-200">
            Sblocca il potenziale delle nostre molteplici funzionalità e
            raggiungi la tua indipendenza finanziaria
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
