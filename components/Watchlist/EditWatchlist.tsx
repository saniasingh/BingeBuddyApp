import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import MoviePoster from "./../../assets/poster1.png";

export const EditWatchlist = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <div className="flex pl-4 my-8 justify-between w-full">
          <p className="text-3xl">Edit Your WatchList</p>
          <a
            href="#"
            className="mr-8 mt-2 text-lg text-red-500 underline underline-offset-2 hover:cursor-pointer"
          >
            Delete WatchList
          </a>
        </div>

        <form action="" className="pl-4 pr-8 w-full">
          <section className="py-2 ">
            <label htmlFor="" className="text-xl font-semibold">
              Name
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-1 p-4 h-12 w-full"
              placeholder="Movies by Tom Cruise"
            />
          </section>

          <section className="py-2">
            <label htmlFor="" className="text-xl font-semibold">
              Description
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-1 h-32 w-full"
            />
          </section>
          <section className="w-48"></section>
        </form>

        <section className="pl-4 pr-8 pt-6 w-full">
          <p className="font-semibold text-xl">Movies</p>
          <div className="bg-transparent border rounded-md my-2 flex items-center">
            <Image
              src={MoviePoster}
              alt="Movie Poster"
              className=""
              width={56}
            />
            <div className="flex items-center w-full">
              <p className="ml-4 ">
                Top Gun: Maverick <span className="font-thin">(2022)</span>
              </p>
              <a
                href="#"
                className="ml-auto mr-2 p-4 w-24 rounded-md border border-red-500 "
              >
                Remove
              </a>
            </div>
          </div>
          <div className="bg-transparent border rounded-md my-2 flex items-center">
            <Image
              src={MoviePoster}
              alt="Movie Poster"
              className=""
              width={56}
            />
            <div className="flex items-center w-full">
              <p className="ml-4 ">
                Top Gun: Maverick <span className="font-thin">(2022)</span>
              </p>
              <a
                href="#"
                className="ml-auto mr-2 p-4 w-24 rounded-md border border-red-500 "
              >
                Remove
              </a>
            </div>
          </div>
          <div className="bg-transparent border rounded-md my-2 flex items-center">
            <Image
              src={MoviePoster}
              alt="Movie Poster"
              className=""
              width={56}
            />
            <div className="flex items-center w-full">
              <p className="ml-4 ">
                Top Gun: Maverick <span className="font-thin">(2022)</span>
              </p>
              <a
                href="#"
                className="ml-auto mr-2 p-4 w-24 rounded-md border border-red-500 flex"
              >
                Remove
              </a>
            </div>
          </div>
          <Button className="bg-red-500 text-black text-lg h-12 flex w-52 hover:bg-red-900 hover:text-white my-8">
            Save
          </Button>
        </section>
      </main>
    </>
  );
};
