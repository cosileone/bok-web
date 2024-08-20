import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { type ValueType } from "recharts/types/component/DefaultTooltipContent";

// Sample data
const data = [
  { name: "Vanguard S&P 500 ETF", value: 3050, color: "#535ACC" },
  { name: "Other Investment", value: 2000, color: "#82D688" },
  { name: "Real Estate", value: 1500, color: "#BB5B80" },
  { name: "Crypto", value: 800, color: "#EE6C52" },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: ValueType;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip rounded bg-black p-2 text-white shadow-lg"
        style={{ border: `1px solid ${payload[0].payload.color}` }}
      >
        <p className="label">{`${payload[0].name}`}</p>
        <p className="intro">* €{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }

  return null;
};

const InvestmentPieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/*<Tooltip content={<CustomTooltip />} />*/}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InvestmentPieChart;
