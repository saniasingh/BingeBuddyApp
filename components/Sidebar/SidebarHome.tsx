"use client";

import React from "react";
// import { useState } from "react";

import { MyProfile } from "../GuestProfile/MyProfile";
import { Searchbar } from "./Searchbar";
import Logo from "./../../assets/beingBuddyLogo.jpg";
import Image from "next/image";
import { HomeBar } from "./HomeBar";
import { Historybar } from "./Historybar";
import { WatchlistBar } from "../Watchlist/WatchlistBar";
import MyListbar from "./MyListbar";

export const SidebarHome = () => {
  return (
    <>
      <main className="my-4 sticky top-0 w-72 p-4">
        <div>
          <div className=" text-white flex">
            <Image src={Logo} alt="Logo Image" width={70} height={70} />
            <span
              className="font-extrabold mx-1 py-2"
              style={{ color: "#F33F3F", fontSize: "2rem" }}
            >
              BeingBuddy
            </span>
          </div>
        </div>
        <section>
          <Searchbar></Searchbar>
          <HomeBar></HomeBar>
          <Historybar></Historybar>
          <WatchlistBar></WatchlistBar>
        </section>
        <MyListbar></MyListbar>
        <MyProfile></MyProfile>
      </main>
    </>
  );
};


// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Icon */}
//       <button
//         className="lg:hidden p-2 text-white bg-gray-800 rounded-md fixed top-4 left-4 z-50"
//         onClick={toggleSidebar}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16m-7 6h7"
//           />
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-4 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform lg:translate-x-0 lg:static lg:block`}
//       >
//         <div className="flex items-center mb-4">
//           <img
//             src="{Logo}"
//             alt="Logo"
//             className="h-10 w-10 mr-2"
//           />
//           <h1 className="text-red-500 text-2xl font-bold">BeingBuddy</h1>
//         </div>

//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full p-2 rounded-md bg-gray-800 text-white"
//           />
//         </div>

//         <nav>
//           <ul className="space-y-2">
//             <li className="flex items-center p-2 rounded-md bg-gray-800">
//               <span className="material-icons">home</span>
//               <a href="#" className="ml-2">Home</a>
//             </li>
//             <li className="flex items-center p-2 rounded-md">
//               <span className="material-icons">history</span>
//               <a href="#" className="ml-2">History</a>
//             </li>
//             <li className="flex items-center p-2 rounded-md bg-red-500 text-center">
//               <a href="#" className="w-full">+ Create Watchlist</a>
//             </li>
//           </ul>
//         </nav>

//         <h2 className="mt-6 text-lg font-semibold">My List</h2>

//         <div className="mt-4 flex items-center">
//           <span className="material-icons">account_circle</span>
//           <span className="ml-2">GUEST</span>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// }

