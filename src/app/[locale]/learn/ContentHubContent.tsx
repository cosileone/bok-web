import React from "react";
import { Button } from "~/components/ui/button";
import Image from "next/image";

import graphPic from "~/images/graph.jpeg";
import bookPic from "~/images/bok-book.png";

const ContentHubContent: React.FC = () => {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
      {/* Top Section with Images */}
      <div className="flex items-center justify-between gap-2">
        <div className="w-1/2">
          <Image
            unoptimized
            src={bookPic}
            alt="Book Cover"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-1/2">
          <Image
            unoptimized
            src={graphPic}
            alt="Investment Graph"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="my-6 text-center">
        <p className="font-semibold italic leading-6">
          Our very own content hub and predictive AI to unlock your full
          investment potential
        </p>
      </div>

      {/* Bottom Button Section */}
      <div className="mb-10 text-center">
        <Button className="rounded-xl bg-bokpurple px-8 py-3 text-lg font-semibold uppercase tracking-tight text-lime-300">
          Start Now
        </Button>
      </div>

      <div className="grid gap-4 rounded-2xl bg-green-950 p-4 text-slate-900 sm:grid-cols-2">
        <div className="rounded-lg bg-lime-300 p-4 text-center shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl font-bold">Add 5% Vanguard ETF</h3>
          <p className="mt-2 text-xs">www.billsofknowledge.com</p>
        </div>
        <div className="rounded-lg bg-yellow-300 p-4 text-center shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl font-bold">+2% Nvidia</h3>
        </div>
        <div className="rounded-lg bg-bokpurple p-4 text-center shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl font-bold">
            <img src="/bok_logo.svg" alt="" className={"drop-shadow"} />
          </h3>
        </div>
        <div className="rounded-lg bg-red-300 p-4 text-center shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl font-bold">Add 10% AAPL and MSFT</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentHubContent;
