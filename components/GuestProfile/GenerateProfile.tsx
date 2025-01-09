import React from "react";
import { Button } from "../ui/button";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const GenerateProfile = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <section
          className={`${lato.className} text-2xl font-light leading-relaxed tracking-tight my-8`}
        >
          <p>Hello!</p>
          <p>Please log in or create an account</p>
          <p>to use the feature of this app</p>
        </section>

        <form action="" className=" flex flex-col items-center w-full p-4">
          <section className="py-2  w-[20rem] m">
            <label htmlFor="" className="text-xl text-gray-400  ">
              Email*
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-4 p-4 h-12 w-full"
            />
          </section>

          <section className="py-6 w-[20rem]">
            <label htmlFor="" className="text-xl text-gray-400">
              Password*
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-4 h-12 w-full"
            />
          </section>
          <section className=" my-4">
            <Button className="bg-red-500 text-black w-[14rem] hover:bg-red-800">Log In</Button>
            <p className="my-4 mx-8">
              or{" "}
              <a href="">
                <span className="text-red-500 my-4 underline underline-offset-2">create an account</span>
              </a>
            </p>
          </section>
        </form>
      </main>
    </>
  );
};
