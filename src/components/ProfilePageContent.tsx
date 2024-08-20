"use client";

import React from "react";
import { useOrganizationList, useUser } from "@clerk/nextjs";
import InvestmentRadarChart from "~/components/InvestmentRadarChart";

const ProfilePageContent = () => {
  const { user } = useUser();
  const {
    userMemberships: { data: organizations },
  } = useOrganizationList({
    userMemberships: true,
  });
  const membership = organizations?.at(0);
  if (!membership) return null;

  console.log("tacos", membership);
  const { name: companyName, imageUrl: companyLogoUrl } =
    membership.organization;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-white px-12 py-6 shadow-lg">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <img
          src={user?.imageUrl}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full"
        />
        <h1 className="font-serif text-2xl font-bold text-gray-700">
          Your Profile
        </h1>
        <img
          src={companyLogoUrl}
          alt={companyName}
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

      {/* Greeting */}
      <div className="mt-6 text-center">
        <p className="text-balance text-lg">
          Hi <span className="font-bold">{user?.firstName}</span>, you are
          registered as <span className="font-bold">{"CEO"}</span> of{" "}
          <span className="font-bold">{companyName}</span>
        </p>
      </div>

      {/* Graph/Image */}
      <div className="my-8 w-full">
        <InvestmentRadarChart />
      </div>

      {/* Description */}
      <div className="px-8 text-center">
        <h2 className="text-xl">Your Investment Profile</h2>
        <p className="mt-4 text-balance text-sm text-gray-600">
          Find out who you are from an Investment standpoint, based on your
          salary contributions, areas of interest and risk preference. Get
          started right away on building your pension and most importantly your
          financial future.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-8 w-full rounded-2xl bg-indigo-600 px-6 py-3 font-bold uppercase text-white shadow-md hover:bg-indigo-700">
        Get Started &gt;
      </button>
    </div>
  );
};

export default ProfilePageContent;
