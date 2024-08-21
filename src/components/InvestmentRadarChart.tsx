import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { subject: "Risk Tolerance", current: 95, fullMark: 100 },
  { subject: "Age", current: 22, fullMark: 100 },
  { subject: "Saving Rate", current: 50, fullMark: 100 },
  { subject: "Debt Ratio", current: 50, fullMark: 100 },
  { subject: "BOK Score", current: 85, fullMark: 100 },
];

const InvestmentRadarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="63%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/*<PolarRadiusAxis angle={30} domain={[0, 150]} />*/}
        <Radar
          name="Investment"
          dataKey={"current"}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default InvestmentRadarChart;
