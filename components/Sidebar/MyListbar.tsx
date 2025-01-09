import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MyListbar = () => {
  return (
    <>
      <div className="text-white text-2xl mx-3 border-t border-gray-800 my-4  py-4">
        <button className={`${lato.className} hover:scale-110 bg-transparent`}>
          My List
        </button>
      </div>
    </>
  );
};

export default MyListbar;
