import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const MyProfile = () => {
  return (
    <>
      <div className="flex items-center space-x-1 p-2 mt-44 bg-transparent border rounded-lg shadow-md">
        <UserCircleIcon className="h-8 w-8 text-white " />
        <div className="text-white w-full flex justify-between">
          <h2 className="flex-grow">GUEST</h2>
          <span className="mx-3">...</span>
        </div>
      </div>
    </>
  );
};
