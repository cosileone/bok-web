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
import { type DoubleRangeType } from "~/components/ForecastChartCard";

type RangeChartProps = {
  data: DoubleRangeType[];
  height?: number;
};

const RangeChart = ({ data, height = 300 }: RangeChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={height}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[
            Number(data[0]?.["savings (\u20AC)"]) || 0,
            Number(data.at(-1)?.["savings (\u20AC)"]) || "auto",
          ]}
          tickFormatter={(value: string) =>
            Number(value).toLocaleString("en-EN", {
              maximumFractionDigits: 0,
              notation: "compact",
            })
          }
        />
        <Tooltip
          contentStyle={{
            borderRadius: "0.25rem",
            textAlign: "left",
          }}
          separator={": "}
        />
        <Legend />
        <Line type="monotone" dataKey="savings (€)" stroke="#1184d8" />
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
  );
};

export default RangeChart;
