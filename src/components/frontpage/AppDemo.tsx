"use client";

import { useId, useRef, useState } from "react";
import clsx from "clsx";
import { motion, useInView, useMotionValue } from "framer-motion";

import { AppScreen } from "~/components/frontpage/AppScreen";
import getStartedImage from "~/images/0-get-started.svg";
import Image from "next/image";

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
];
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  activePointIndex: number | null;
  onChangeActivePointIndex: (index: number | null) => void;
  width: number;
  height: number;
  paddingX?: number;
  paddingY?: number;
  gridLines?: number;
}) {
  const width = totalWidth - paddingX * 2;
  const height = totalHeight - paddingY * 2;

  const id = useId();
  const svgRef = useRef<React.ElementRef<"svg">>(null);
  const pathRef = useRef<React.ElementRef<"path">>(null);
  const isInView = useInView(svgRef, { amount: 0.5, once: true });
  const pathWidth = useMotionValue(0);
  const [interactionEnabled, setInteractionEnabled] = useState(false);

  let path = "";
  const points: Array<{ x: number; y: number }> = [];

  for (let index = 0; index < prices.length; index++) {
    const x = paddingX + (index / (prices.length - 1)) * width;
    const y =
      paddingY +
      (1 - (prices[index]! - minPrice) / (maxPrice - minPrice)) * height;
    points.push({ x, y });
    path += `${index === 0 ? "M" : "L"} ${x.toFixed(4)} ${y.toFixed(4)}`;
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, "overflow-visible")}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              const x = event.nativeEvent.offsetX;
              let closestPointIndex: number | null = null;
              let closestDistance = Infinity;
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                const point = points[pointIndex];
                const distance = Math.abs(point!.x - x);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestPointIndex = pointIndex;
                } else {
                  break;
                }
              }
              onChangeActivePointIndex(closestPointIndex);
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13B5C8" />
          <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: "#06b6d4", animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          if (pathRef.current && typeof pathLength === "number") {
            pathWidth.set(
              pathRef.current.getPointAtLength(
                pathLength * pathRef.current.getTotalLength(),
              ).x,
            );
          }
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex]!.y}
            x2={totalWidth}
            y2={points[activePointIndex]!.y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex]!.x}
            cy={points[activePointIndex]!.y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  );
}

export function AppDemo() {
  const [activePointIndex, setActivePointIndex] = useState<number | null>(null);
  const activePriceIndex = activePointIndex ?? prices.length - 1;
  const activeValue = prices[activePriceIndex];
  const previousValue = prices[activePriceIndex - 1];
  const percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue! - previousValue!) / previousValue!) * 100;

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          {/*<div className="flex gap-2">*/}
          {/*  <div className="text-xs leading-6 text-neutral-500">*/}
          {/*    Totale Risparmiato*/}
          {/*  </div>*/}
          {/*  <div className="text-sm text-neutral-900">€</div>*/}
          {/*  <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">*/}
          {/*    <path*/}
          {/*      d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"*/}
          {/*      stroke="#171717"*/}
          {/*      strokeWidth="2"*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</div>*/}
          <Image
            unoptimized
            className={""}
            style={{ objectPosition: "0 -90px" }}
            src={getStartedImage as string}
            alt={""}
          />
          <div className="mt-3 border-t border-neutral-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tabular-nums tracking-tight text-neutral-900">
                {activeValue!.toFixed(2)}
              </div>
              <div className="text-sm text-neutral-900">EUR</div>
              {percentageChange && (
                <div
                  className={clsx(
                    "ml-auto text-sm tabular-nums tracking-tight",
                    percentageChange >= 0
                      ? "text-green-500"
                      : "text-neutral-500",
                  )}
                >
                  {`${
                    percentageChange >= 0 ? "+" : ""
                  }${percentageChange.toFixed(2)}%`}
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-neutral-500">
              <div>1D</div>
              <div>5D</div>
              <div className="font-semibold text-blue-700">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="mt-3 rounded-lg bg-neutral-50 ring-1 ring-inset ring-black/5">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white">
              Investire
            </div>
            <div className="mt-3 divide-y divide-neutral-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-neutral-500">Open</div>
                <div className="font-medium text-neutral-900">6,387.55</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-neutral-500">Closed</div>
                <div className="font-medium text-neutral-900">6,487.09</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-neutral-500">Low</div>
                <div className="font-medium text-neutral-900">6,322.01</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  );
}