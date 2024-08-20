"use client";

import { type FC } from "react";
import { cn } from "~/lib/utils";
import ForecastProjection from "~/components/ForecastProjection";
import InvestmentPieChart from "~/components/InvestmentPieChart";
import { useUser } from "@clerk/nextjs";

interface FinancialOverviewProps {
  className?: string;
}

const FinancialOverview: FC<FinancialOverviewProps> = ({ className }) => {
  const { user } = useUser();
  const userSavings = 4_050;
  const userGoal = 30_000;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md rounded-lg bg-white p-6 font-sans dark:bg-black dark:text-white",
        className,
      )}
    >
      <div className="mb-5 flex flex-col items-center">
        <img
          src={user?.imageUrl}
          alt="User profile image"
          className="mr-4 h-12 w-12 rounded-full ring-4 dark:ring-gray-800"
        />
        <div className={"text-center"}>
          <p className="my-2 text-sm font-bold">
            {user?.firstName}, this month is looking good!
          </p>
          <h2 className="mb-1 text-2xl font-light text-green-600 dark:text-green-400">
            <div className={"relative mx-auto w-fit"}>
              <span className={"absolute -left-8"}>💰</span>
              {userSavings.toLocaleString("it-IT", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
              })}
            </div>
          </h2>
        </div>
        <ForecastProjection principal={userSavings} contributions={200} />
      </div>

      <div className="mt-6">
        <div>
          <InvestmentPieChart />
        </div>
        <h3 className="mb-3 text-lg font-semibold">YOUR GOALS</h3>
        <div className="rounded-md p-4 dark:bg-gray-800">
          <p className="mb-3 text-sm">The power of Compound Interest</p>
          <div className="flex items-center">
            <div className="mr-3 h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-600">
              <div
                className="relative h-full rounded-l-full bg-green-500 shadow"
                style={{ width: "13.5%" }}
              >
                <div
                  className={
                    "absolute right-0 -translate-y-[1.125rem] translate-x-2 text-xl drop-shadow-sm"
                  }
                >
                  <div
                    className={
                      "cursor-grab select-none transition-all hover:scale-125"
                    }
                  >
                    🔥
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {userSavings.toLocaleString("en-EN", {
                style: "currency",
                currency: "EUR",
                notation: "compact",
              })}{" "}
              /{" "}
              {userGoal.toLocaleString("en-EN", {
                style: "currency",
                currency: "EUR",
                notation: "compact",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
