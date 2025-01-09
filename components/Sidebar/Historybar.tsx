import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

export const Historybar = () => {
  return (
    <>
      <div>
        <button className="flex items-center px-4 py-2 my-2 hover:scale-110 text-white">
          <ClockIcon className="h-6 w-6 text-white hover:text-gray-700  transition" />
          <span className="mx-2 text-lg">History</span>
        </button>
      </div>
    </>
  );
};
