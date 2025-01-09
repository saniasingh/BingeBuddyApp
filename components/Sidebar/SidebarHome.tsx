import React from "react";
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
