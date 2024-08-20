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
  { subject: "A", A: 120, fullMark: 150 },
  { subject: "B", A: 98, fullMark: 150 },
  { subject: "C", A: 86, fullMark: 150 },
  { subject: "D", A: 99, fullMark: 150 },
  { subject: "E", A: 85, fullMark: 150 },
];

const InvestmentRadarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/*<PolarRadiusAxis angle={30} domain={[0, 150]} />*/}
        <Radar
          name="Investment"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default InvestmentRadarChart;
