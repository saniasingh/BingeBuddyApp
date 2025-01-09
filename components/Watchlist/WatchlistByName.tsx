import React from "react";
import Image from "next/image";
import EditMarkImg from "./../../assets/Edit 1.png";
import { MovieCard } from "../Cards/MovieCard";

export const WatchlistByName = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <div>
          <p className="text-3xl pt-12 mx-4 font-bold">
            Movies by Tom Cruise
            <span>
              <Image
                src={EditMarkImg}
                alt="Edit Mark"
                className="inline ml-16"
              />
            </span>
          </p>
        </div>

        <p className=" pt-8 mx-4 font-semibold">About the Watchlist</p>
        <p className="mx-4">This list is created for Tom Cruise Movies</p>

        <section className="grid my-12 mx-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 uppercase">
          <div
            className=" grid grid-rows-2 border-red-600  rounded-xl border-2 p-4 "
            style={{ background: "rgba(217, 217, 217, 0.2)" }}
          >
            <p>Items on List</p>
            <span className="text-3xl text-red-500 self-end">65</span>
          </div>
          <div
            className=" grid grid-rows-2  border-red-600 rounded-xl border-2 p-4"
            style={{ background: "rgba(217, 217, 217, 0.2)" }}
          >
            unwatched run time
            <span className=" text-3xl text-red-500 self-end">65</span>
          </div>{" "}
          <div
            className="grid grid-rows-2 border-red-600 rounded-xl border-2 p-4"
            style={{ background: "rgba(217, 217, 217, 0.2)" }}
          >
            average score
            <span className=" text-3xl text-red-500 self-end">65</span>
          </div>
        </section>
        <section className="">
          <div className="grid gap-12 grid-flow-row sm:grid-flow-col sm:auto-cols-max sm:overflow-x-auto md:grid-cols-3 lg:grid-cols-5">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
      </main>
    </>
  );
};
