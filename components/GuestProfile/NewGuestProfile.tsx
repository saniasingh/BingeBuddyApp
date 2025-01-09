import React from "react";
import { Button } from "../ui/button";
import { Lato } from "next/font/google";
// import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const NewGuestProfile = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <section
          className={`${lato.className} text-2xl font-light leading-relaxed tracking-tight my-8`}
        >
          <p>Hello!</p>
          <p>Create an account</p>
          <p>to use the feature of this app</p>
        </section>

        <form action="" className=" flex flex-col items-center w-full px-4">
          <section className="rounded-full bg-slate-700 text-white p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </section>
          <section className="py-1  w-[20rem]">
            <label htmlFor="" className="text-xl text-gray-400 ">
              Name*
            </label>
            <br />
            <input
              type="text"
              className="bg-transparent border rounded-md my-4 p-4 h-12 w-full"
              placeholder="Your name"
              required
            />
          </section>
          <section className="py-1  w-[20rem] m">
            <label htmlFor="" className="text-xl text-gray-400 ">
              Email*
            </label>
            <br />
            <input
              type="Email"
              className="bg-transparent border rounded-md my-4 p-4 h-12 w-full"
              placeholder="Your Email"
              required
            />
          </section>

          <section className="py-1 w-[20rem]">
            <label htmlFor="" className="text-xl text-gray-400">
              Password*
            </label>
            <br />
            <input
              type="password"
              className="bg-transparent border rounded-md my-4 h-12 w-full focus:ring-red-500 px-4"
              placeholder="Your password"
              required
            />
          </section>
          <section className=" my-4">
            <Button className="bg-red-500 text-black w-[14rem] hover:bg-red-800">
              Log In
            </Button>
            <p className="my-4 mx-8 text-gray-400">
              or{" "}
              <a href="">
                <span className="text-red-500 my-4 underline underline-offset-2">
                  create an account
                </span>
              </a>
            </p>
          </section>
        </form>
      </main>
    </>
  );
};
