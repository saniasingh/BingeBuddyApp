import React from "react";
import { Lato } from "next/font/google";
import Ribbon from "./../../assets/ribbon.png";
import Image from "next/image";
import CheckMarkImg from "./../../assets/Checkmark.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const IntroContainer = () => {
  return (
    <>
      <main className=" w-full">
        <section
          className={`${lato.className} m-12 border-red-600 rounded-xl border-2`}
          style={{ background: "rgba(217, 217, 217, 0.1)" }}
        >
          <p className="text-4xl px-6 py-6">
            Welcome to <span className="text-red-600">Being Buddy</span>
          </p>
          <p className="text-xl px-6 py-4">
            Browse movies, add them to watchlists and share them with friends.{" "}
          </p>
          <p className="text-xl px-6 pt-2 py-10">
            Just click the{" "}
            <span>
              <Image src={Ribbon} alt="Ribbon" className="inline mx-2" />
            </span>
            to add a movie, the poster to see more details or click{" "}
            <span>
              <Image
                src={CheckMarkImg}
                alt="Check Mark"
                className="inline mx-2"
              />
            </span>{" "}
            to mark the movie as watched.
          </p>
        </section>
      </main>
    </>
  );
};
