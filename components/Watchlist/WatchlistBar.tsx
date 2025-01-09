import React from "react";
import { Button } from "../ui/button";

export const WatchlistBar = () => {
  return (
    <>
      <div>
        <Button className="w-full text-black px-4 py-5 my-3 bg-[#F33F3F]  hover:bg-red-900 text-md">
          {" "}
          + Create Watchlist
        </Button>
      </div>
    </>
  );
};
