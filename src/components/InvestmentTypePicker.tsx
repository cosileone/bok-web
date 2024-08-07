"use client";

import React, { useState } from "react";

interface InvestmentCategory {
  id: number;
  name: string;
  icon: string; // URL or icon name for the image
}

const categories: InvestmentCategory[] = [
  { id: 1, name: "Brick & Mortar", icon: "🏠" },
  { id: 2, name: "Stocks", icon: "📈" },
  { id: 3, name: "ESG", icon: "🌱" },
  { id: 4, name: "ETFs", icon: "💰" },
  { id: 5, name: "Tech & AI", icon: "💻" },
  { id: 6, name: "Crypto", icon: "🔵" },
];

const InvestmentTypePicker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategorySelect = (id: number) => {
    setSelectedCategory(id);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 font-sans dark:bg-black dark:text-white">
      <h2 className="mb-2 text-xl font-semibold">Investment Goals</h2>
      <p className="text-sm">Where would you prefer to invest?</p>
      <p className={"mb-4 text-sm text-gray-500"}>i.e. Stocks & ETFs</p>

      <h3 className="mb-3 text-sm font-semibold">
        Select Investment Categories
      </h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-900 ${
              selectedCategory === category.id ? "ring-2 ring-lime-400" : ""
            }`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <div className="flex items-center">
              <span className="mr-3 text-lg">{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </div>
            <div
              className={`h-6 w-6 rounded-full border-2 ${
                selectedCategory === category.id
                  ? "border-lime-400 bg-lime-400"
                  : "border-gray-600"
              }`}
            />
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-lg bg-lime-400 py-2 font-semibold text-black hover:bg-lime-500">
        NEXT
      </button>
    </div>
  );
};

export default InvestmentTypePicker;
