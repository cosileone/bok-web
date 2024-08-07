"use client";

import { useState } from "react";
import RangeChart from "~/components/RangeChart";
import { createData } from "~/components/ForecastChartCard";

interface ForecastProjectionProps {
  principal: number;
  contributions?: number;
  className?: string;
}

const ForecastProjection = ({ principal }: ForecastProjectionProps) => {
  const [showForecast, setShowForecast] = useState(false);
  const data = createData(principal);
  return (
    <>
      <button
        onClick={() => setShowForecast((prev) => !prev)}
        className="mb-8 text-xs font-semibold text-lime-600 underline hover:no-underline dark:text-lime-300"
      >
        see forecast projection
      </button>
      {showForecast && <RangeChart data={data} />}
    </>
  );
};

export default ForecastProjection;
