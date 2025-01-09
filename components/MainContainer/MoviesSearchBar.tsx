import React from "react";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const MoviesSearchBar = () => {
  return (
    <>
      <main className="w-full">
        <div className="text-white flex items-center border border-slate-600 rounded-md mx-12 ">
          <MagnifyingGlassIcon className="h-14 w-8 text-slate-700 ml-4" />
          <input
            type="text"
            placeholder="Search for movie by title..."
            className="flex-grow py-4 px-2 outline-none placeholder-gray-500 text-md focus:outline-none bg-transparent"
          />

          <Button
            className=" text-black  text-lg w-32 h-14 transition duration-300 hover:scale-110"
            style={{ background: "#F33F3F" }}
          >
            {" "}
            Search
          </Button>
        </div>
      </main>
    </>
  );
};
