import React from "react";
import { IntroContainer } from "./IntroContainer";
import { MoviesSearchBar } from "./MoviesSearchBar";
import { MovieCard } from "../Cards/MovieCard";

export const MainContainerHome = () => {
  return (
    <>
      <div
        className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10"
        // style={{ background: "#E1E1E1", opacity }}
      >
        <IntroContainer />
        <MoviesSearchBar />
        <p className="text-xl mx-12 my-10 sm:text-3xl">
          Trending Movies Right Now
        </p>
        <div className=" mx-12 my-4 grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
};
