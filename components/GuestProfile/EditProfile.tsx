import React from "react";
import { Button } from "../ui/button";
import { Lato } from "next/font/google";
// import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const EditProfile = () => {
  return (
    <>
      <main className="text-white flex flex-col place-items-start h-screen  overflow-y-scroll hide-scrollbar w-full ml-12 p-4 bg-lightGray bg-opacity-10">
        <section
          className={`${lato.className}  flex flex-row items-center px-12 w-full font-light leading-relaxed tracking-tight mt-8`}
        >
          <p className="text-2xl">Edit Profile</p>
          <a href="" className="ml-auto hover:scale-110">
            <span className="text-red-500 underline underline-offset-4 ">
              Log Out
            </span>
          </a>
        </section>

        <form
          action=""
          className=" flex flex-col items-center w-full px-4 py-2"
        >
          <section className="rounded-full bg-slate-700 text-white p-8">
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
          <div className="mx-4 p-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
            <p className=" mx-2">Edit Your Avatar</p>
          </div>
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
              Edit Your Profile
            </Button>
            <p className="my-4 mx-8 text-gray-400">
              or{" "}
              <a href="#" className="hover:scale-110">
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
