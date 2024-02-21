"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "0",
    value: 400,
    forecast: 700,
    range: [500, 900],
  },
  {
    name: "0",
    value: 500,
    forecast: 700,
    range: [500, 900],
  },
  {
    name: "0",
    value: 520,
    forecast: 700,
    range: [500, 900],
  },
  // ... more data points
];
const ForecastChart = ({ className }: { className?: string }) => {
  return (
    <>
      <ComposedChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Area
          type="monotone"
          dataKey="range"
          stroke="#1184d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
      </ComposedChart>
    </>
  );
};

export default ForecastChart;
