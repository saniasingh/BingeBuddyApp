import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";

export const HomeBar = () => {
  return (
    <>
      <div>
        <button className="flex items-left space-x-2 px-4 py-2 my-6 bg-gray-700 text-white rounded-md hover:bg-gray-500 w-full transition">
          <HomeIcon className="h-5 w-5 text-white"/>
          <span className="text-lg text-white">Home</span>
        </button>
      </div>
    </>
  );
};
