import React from "react";
import { WatchlistBar } from "./WatchlistBar";

const WatchlistWindow = () => {
  return (
    <>
      <div
        className="text-white flex flex-col w-screen ml-16 h-screen  overflow-y-scroll  px-20 py-16 "
        style={{ background: "rgba(217, 217, 217, 0.1)" }}
      >
        <p className="text-5xl mb-16 text-[#F33]">Create a New WatchList</p>
        <form
          action="
        
        "
          className="flex-col"
        >
          <section className="py-2">
            <label htmlFor="" className="text-2xl  ">
              Name
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-4 p-4 h-12 w-full"
            />
          </section>

          <section className="py-6">
            <label htmlFor="" className="text-2xl">
              Description
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-4 h-32 w-full"
            />
          </section>
          <section className="w-48">
            <WatchlistBar />
          </section>
        </form>
      </div>
    </>
  );
};

export default WatchlistWindow;
