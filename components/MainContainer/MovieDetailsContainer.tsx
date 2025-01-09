import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CastCard } from "../Cards/CastCard";

import MoviePoster from "./../../assets/poster1.png";

export const MovieDetailsContainer = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <section className="flex mx-8 my-12 p-4">
          <Image
            src={MoviePoster}
            alt="Movie Poster"
            width={300}
            height={400}
          />
          <div className="ml-12 flex flex-col">
            <p className="text-3xl mb-2">Top Gun Maverick (2022)</p>
            <span className="text-xs">Action, Drama . 2h 11min</span>
            <p className="mt-16 text-xl mb-4">Overview</p>
            <p className="">
              After more than thirty years of service as one of the Navy’s top
              aviators, and dodging the advancement in rank that would ground
              him, Pete “Maverick” Mitchell finds himself training a detachment
              of TOP GUN graduates for a specialized mission the likes of which
              no living pilot has ever seen.{" "}
            </p>
            <section className="my-10 flex">
              <div
                className="border-red-800 rounded-xl border-2 py-4 px-8 text-lg"
                style={{ background: "rgba(271, 271, 271, 0.2)" }}
              >
                {" "}
                Score <span className="block text-3xl text-red-500">65</span>
              </div>
              <Button className="bg-red-600 text-black ml-16 p-12 text-lg hover:bg-red-700">
                Add to WatchList
              </Button>
            </section>
          </div>
        </section>
        <p className="ml-12">Cast</p>

        {/* <section className=" flex flex-col-5 gap-5 m-4"> */}
          <div className="mx-2 my-4 grid justify-between sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <CastCard />
            <CastCard />
            <CastCard />
            <CastCard />
            <CastCard />
          </div>
        {/* </section> */}
      </main>
    </>
  );
};
