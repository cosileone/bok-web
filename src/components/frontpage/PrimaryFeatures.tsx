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
import bokCardImage from "~/images/11.png";
import roundupsImage from "~/images/22.png";
import moviesImage from "~/images/33.png";

import { AppScreen } from "~/components/frontpage/AppScreen";
import { CircleBackground } from "~/components/frontpage/CircleBackground";
import { Container } from "~/components/frontpage/Container";
import { PhoneFrame } from "~/components/frontpage/PhoneFrame";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

interface CustomAnimationProps {
  isForwards: boolean;
  changeCount: number;
}

const getFeatures = (t: (arg0: string) => string) => {
  return [
    {
      name: `${t("primaryFeatures.feature1.title")}`,
      description: `${t("primaryFeatures.feature1.description")}`,
      icon: RocketEmoji,
      screen: RoundupScreen,
    },
    {
      name: `${t("primaryFeatures.feature2.title")}`,
      description: `${t("primaryFeatures.feature2.description")}`,
      icon: DeviceNotificationIcon,
      screen: SwearJarScreen,
    },
    {
      name: `${t("primaryFeatures.feature3.title")}`,
      description: `${t("primaryFeatures.feature3.description")}`,
      icon: DeviceTouchIcon,
      screen: VideoBitsScreen,
    },
  ];
};

function RocketEmoji(props: React.ComponentPropsWithoutRef<"svg">) {
  return <span className="text-[32px]">🚀</span>;
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return <span className="text-[32px]">🗣️</span>;
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
  const t = useTranslations("Index");
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>
          {t("primaryFeatures.feature1.shortTitle")}
        </AppScreen.Title>
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
              className={
                "h-full scale-[105%] rounded-lg object-cover object-left"
              }
              style={{ objectPosition: "-30px 0px" }}
              src={bokCardImage}
              alt={""}
            />
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function SwearJarScreen(props: ScreenProps) {
  const t = useTranslations("Index");
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>
          {t("primaryFeatures.feature2.shortTitle")}
        </AppScreen.Title>
        {/*<AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>*/}
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="h-full px-4 py-6">
          <div className="h-full space-y-6">
            <Image
              unoptimized
              className={
                "h-full scale-[100%] rounded-lg object-cover object-left"
              }
              style={{ objectPosition: "-30px 0px" }}
              src={roundupsImage}
              alt={""}
            />
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function VideoBitsScreen(props: ScreenProps) {
  const t = useTranslations("Index");

  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>
          {t("primaryFeatures.feature3.shortTitle")}
        </AppScreen.Title>
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
              className={
                "h-full scale-[100%] rounded-lg object-cover object-left"
              }
              style={{ objectPosition: "-30px 0px" }}
              src={moviesImage}
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

  const t = useTranslations("Index");
  const features = getFeatures(t);

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
            className="relative rounded-2xl transition-colors hover:bg-neutral-800/30"
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
              <span className="urbanist mt-2 text-neutral-200">
                {feature.description}
              </span>
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
  const [isVisible, setIsVisible] = useState(false);
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

  const t = useTranslations("Index");
  const features = getFeatures(t);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? "rotate-180" : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 bg-neutral-800/90 p-6 backdrop-blur transition-transform sm:p-10",
                  {
                    "translate-y-full": !isVisible,
                  },
                )}
              >
                <feature.icon className="h-8 w-8" />
                <h3 className="unbounded mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <span className={cn("urbanist mt-2 text-sm text-neutral-200")}>
                  {feature.description}
                </span>
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
              featureIndex === activeIndex
                ? "bg-neutral-300"
                : "bg-neutral-500",
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
  const t = useTranslations("Index");
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-[#2e00f9] py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-3xl lg:text-center">
          <h2 className="unbounded text-3xl font-medium tracking-tight text-white">
            {t("primaryFeatures.title")}
          </h2>
          <p className="urbanist mt-2 text-lg text-neutral-200">
            {t("primaryFeatures.subtitle")}
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
