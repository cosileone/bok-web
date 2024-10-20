"use client";

import React, { useState } from "react";
import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Brain, ChevronRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Progress } from "~/components/ui/progress";
import { useUser } from "@clerk/nextjs";

const generateHistoricalData = () =>
  Array.from({ length: 12 }).map((_, i) => ({
    month: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][i],
    actual: Math.floor(Math.random() * 5000) + 10000,
    projected: Math.floor(Math.random() * 6000) + 11000,
  }));

const AdvisorPageContent = () => {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [showRecommendation, setShowRecommendation] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const { user } = useUser();

  const aiSuggestion = {
    asset: "VOOG",
    type: "ETF",
    confidence: 89,
    currentAllocation: 15,
    suggestedAllocation: 25,
    reasons: [
      { factor: "Market Momentum", score: 92 },
      { factor: "Sector Performance", score: 88 },
      { factor: "Risk-Adjusted Returns", score: 85 },
      { factor: "Economic Indicators", score: 87 },
    ],
    projectedImpact: {
      current: 8.2,
      potential: 11.5,
      timeframe: "12 months",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent">
            Welcome back, {user?.firstName}
          </h1>
          <p className="mt-2 text-slate-600">
            Your AI-powered portfolio is ready for optimization
          </p>
        </div>
        <Button
          className={`${
            aiEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-400"
          } flex items-center gap-2`}
          onClick={() => setAiEnabled(!aiEnabled)}
        >
          <Brain className="h-4 w-4" />
          AI Advisor {aiEnabled ? "Enabled" : "Disabled"}
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Card className="h-[400px]">
            <CardHeader>
              <h3 className="text-xl font-semibold">Portfolio Performance</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={generateHistoricalData()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="actual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="projected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#actual)"
                  />
                  <Area
                    type="monotone"
                    dataKey="projected"
                    stroke="#818cf8"
                    fillOpacity={1}
                    fill="url(#projected)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-4 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600">
                  ${(128450).toLocaleString()}
                </h3>
                <p className="text-sm text-slate-600">Total Portfolio Value</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-green-600">+18.4%</p>
                  <p className="text-xs text-slate-600">YTD Return</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-purple-600">
                    82/100
                  </p>
                  <p className="text-xs text-slate-600">Health Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Risk Profile</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Growth", value: 60 },
                      { name: "Moderate", value: 30 },
                      { name: "Conservative", value: 10 },
                    ]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    fill="#8884d8"
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {showRecommendation && (
        <div className="mt-6">
          <Alert className="border-blue-200 bg-blue-50">
            <AlertTitle className="flex items-center gap-2 text-blue-800">
              <Brain className="h-5 w-5" />
              AI Recommendation Available
            </AlertTitle>
            <AlertDescription>
              <div className="mt-4 grid grid-cols-12 gap-6">
                <div className="col-span-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900">
                          Suggested: {aiSuggestion.asset}
                        </h4>
                        <p className="text-sm text-blue-700">
                          Growth ETF with strong momentum signals
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-700">AI Confidence</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {aiSuggestion.confidence}%
                        </p>
                      </div>
                    </div>

                    {showDetails && (
                      <div className="space-y-3">
                        {aiSuggestion.reasons.map((reason, index) => (
                          <div key={index}>
                            <div className="mb-1 flex justify-between text-sm">
                              <span className="text-slate-700">
                                {reason.factor}
                              </span>
                              <span className="text-blue-700">
                                {reason.score}%
                              </span>
                            </div>
                            <Progress value={reason.score} className="h-2" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        variant="link"
                        className="p-0 text-blue-600 hover:text-blue-800"
                        onClick={() => setShowDetails(!showDetails)}
                      >
                        {showDetails ? "Hide" : "Show"} analysis details
                        <ChevronRight
                          className={`ml-1 h-4 w-4 transform transition-transform ${
                            showDetails ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 space-y-4">
                  <div>
                    <p className="mb-1 text-sm text-blue-700">
                      Projected Impact
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        +
                        {(
                          aiSuggestion.projectedImpact.potential -
                          aiSuggestion.projectedImpact.current
                        ).toFixed(1)}
                        %
                      </span>
                      <span className="text-sm text-slate-600">
                        additional returns
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => setShowRecommendation(false)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowRecommendation(false)}
                    >
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default AdvisorPageContent;
