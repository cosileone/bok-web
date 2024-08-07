"use client";

import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import RangeChart from "~/components/RangeChart";

const data1 = [
  {
    name: "1 mese",
    risparmi: 10,
    range: [0, 20],
  },
  {
    name: "2 mesi",
    risparmi: 20,
    range: [10, 40],
  },
];

const euroSymbol = "\u20AC";

export type DoubleRangeType = {
  name: string;
  range: string[];
  range2: string[];
  "risparmi (\u20AC)": string;
};

export const createData = (
  principal = 10,
  contribution = 200,
  numberOfDataPoints = 48,
) => {
  const savingsRate = 0.1; // get value from userProfile
  const interestRateLow = 0.09;
  const interestRateLow2 = 0.08;
  const interestRateHigh = 0.11;
  const interestRateHigh2 = 0.12;

  const data: DoubleRangeType[] = [];
  for (let i = 0; i < numberOfDataPoints; i++) {
    const risparmi =
      principal *
      Math.pow(
        1 + savingsRate / numberOfDataPoints,
        (numberOfDataPoints * i) / 12,
      );
    const rangeLow =
      principal *
      Math.pow(
        1 + interestRateLow / numberOfDataPoints,
        (numberOfDataPoints * i) / 12,
      );
    const rangeHigh =
      principal *
      Math.pow(
        1 + interestRateHigh / numberOfDataPoints,
        (numberOfDataPoints * i) / 12,
      );

    const rangeLow2 =
      principal *
      Math.pow(
        1 + interestRateLow2 / numberOfDataPoints,
        (numberOfDataPoints * i) / 12,
      );
    const rangeHigh2 =
      principal *
      Math.pow(
        1 + interestRateHigh2 / numberOfDataPoints,
        (numberOfDataPoints * i) / 12,
      );

    const range = [rangeLow.toFixed(2), rangeHigh.toFixed(2)];
    const range2 = [rangeLow2.toFixed(2), rangeHigh2.toFixed(2)];

    data.push({
      name: `${i + 1} mes${i + 1 === 1 ? "e" : "i"}`,
      "risparmi (\u20AC)": risparmi.toFixed(2),
      range,
      range2,
    });
  }
  return data;
};

const ForecastChartCard = ({ className }: { className?: string }) => {
  const data = createData();
  return (
    <Card className={cn("pb-5 pr-10 pt-10", className)}>
      <h2 className={"mb-10 text-center text-2xl font-bold"}>
        Possibili risultati <br /> dei nostri risparmi a regola
      </h2>
      <RangeChart data={data} />
    </Card>
  );
};

export default ForecastChartCard;
