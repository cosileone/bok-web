import React, { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useLocalStorage } from "@uidotdev/usehooks";

// Sample data
const sampleData = [
  { subject: "Risk Tolerance", current: 90, fullMark: 100 },
  { subject: "Age", current: 22, fullMark: 100 },
  { subject: "Saving Rate", current: 50, fullMark: 100 },
  { subject: "Debt Ratio", current: 50, fullMark: 100 },
  { subject: "BOK Score", current: 85, fullMark: 100 },
];

type InvestmentRadarChartProps = {
  riskTolerance: number;
};

const InvestmentRadarChart: React.FC = () => {
  const [riskAssessmentAnswers] = useLocalStorage<{
    riskTolerance: number;
    debtSituation: string;
    age: string;
  }>("bokRiskAssessmentAnswers", {
    riskTolerance: 5,
    debtSituation: "",
    age: "",
  });

  const [data, setData] = useState(sampleData);

  useEffect(() => {
    setData((prevData) =>
      prevData.map((entry) => {
        switch (entry.subject) {
          case "Risk Tolerance":
            return {
              ...entry,
              current: riskAssessmentAnswers.riskTolerance * 10,
            };
          case "Age":
            return { ...entry, current: Number(riskAssessmentAnswers.age) };
          case "Debt Ratio":
            const debtRatioMap = {
              "debt-free": 0,
              "some-debt": 30,
              "heavy-debt": 100,
            };
            return {
              ...entry,
              current:
                debtRatioMap[
                  riskAssessmentAnswers.debtSituation as keyof typeof debtRatioMap
                ],
            };
          default:
            return entry;
        }
      }),
    );
  }, []);

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
