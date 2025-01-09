import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Ribbon from "./../../assets/ribbon.png";

import {
  FaceSmileIcon,
  FaceFrownIcon,
  // FaceNeutralIcon,
} from "@heroicons/react/24/outline";
// import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

// const { FaSmile, FaMeh, FaFrown } = require("react-icons/fa");

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const movieImg =
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

export const MovieCard = () => {
  return (
    <>
      <main className="ml-4 flex flex-col ">
        <div className="relative">
          <Image src={Ribbon} alt="Ribbon Img" className="absolute top-0 left-0 bg-transparent rounder-tr-md" />
          <Image
            src={movieImg}
            alt="Movie Poster Image"
            width={170}
            height={90}
          />
        </div>
        <p className="my-2 flex items-center justify-between">
          <FaceSmileIcon className="h-10 w-10 bg-lime-700 rounded-md "></FaceSmileIcon>
          <span className="inline ">8/10</span>
        </p>
        <p
          className={`${lato.className} leading-relaxed font-extralight uppercase`}
        >
          Fast And Furious X <span className="block"> (2023)</span>
        </p>
      </main>
    </>
  );
};
