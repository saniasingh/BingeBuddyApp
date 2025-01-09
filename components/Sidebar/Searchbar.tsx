import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Searchbar = () => {
  return (
    <>
      <form className="flex items-center border border-gray-800 text-white rounded-md px-4 py-2 my-6">
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2  border-none outline-none bg-transparent"
        />
      </form>
    </>
  );
};
