"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";

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

const createData = (numberOfDataPoints = 24) => {
  const baseRisparmi = 10;
  const risparmiRate = 0.1; // get value from userProfile
  const baseRangeLow = 9;
  const baseRangeHigh = 11;

  const data = [];
  for (let i = 0; i < numberOfDataPoints; i++) {
    const risparmi =
      baseRisparmi * i + baseRisparmi * i * Math.pow(2, 1 + risparmiRate * i);
    const rangeLow =
      baseRangeLow * i + baseRangeLow * i * Math.pow(2, 1 + risparmiRate * i);
    const rangeHigh =
      baseRangeHigh * i + baseRangeHigh * i * Math.pow(2, 1 + risparmiRate * i);

    data.push({
      name: `${i} mes${i === 1 ? "e" : "i"}`,
      "risparmi (€)": risparmi.toFixed(2),
      range: [rangeLow.toFixed(2), rangeHigh.toFixed(2)],
      range2: [(rangeLow * 0.9).toFixed(2), (rangeHigh * 1.1).toFixed(2)],
    });
  }
  return data;
};

const ForecastChart = ({ className }: { className?: string }) => {
  const data = createData();
  return (
    <Card className={cn("pb-5 pr-10 pt-10", className)}>
      <h2 className={"mb-10 text-center text-2xl font-bold"}>
        Possibili risultati <br /> dei nostri risparmi a regola
      </h2>
      <ResponsiveContainer width={"100%"} height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 3000]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="risparmi (€)" stroke="#1184d8" />
          <Area
            type="monotone"
            dataKey="range"
            stroke="#45a368"
            fillOpacity={0.1}
            fill="#45a368"
          />
          <Area
            type="monotone"
            dataKey="range2"
            stroke="#82ca9d"
            fillOpacity={0.1}
            fill="#82ca9d"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ForecastChart;
