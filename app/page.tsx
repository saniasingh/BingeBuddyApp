// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SidebarHome } from "@/components/Sidebar/SidebarHome";
import { MainContainerHome } from "@/components/MainContainer/MainContainerHome";
import WatchlistWindow from "@/components/Watchlist/WatchlistWindow";
import { GenerateProfile } from "@/components/GuestProfile/GenerateProfile";
import { NewGuestProfile } from "@/components/GuestProfile/NewGuestProfile";
import { EditProfile } from "@/components/GuestProfile/EditProfile";
import { MovieDetailsContainer } from "@/components/MainContainer/MovieDetailsContainer";
import { WatchlistByName } from "@/components/Watchlist/WatchlistByName";

export default function Home() {
  return (
    <main className="flex bg-black h-screen  items-center">
      <SidebarHome></SidebarHome>
      {/* <GenerateProfile></GenerateProfile> */}
      {/* <NewGuestProfile></NewGuestProfile> */}
      {/* <EditProfile></EditProfile> */}
      {/* <MovieDetailsContainer></MovieDetailsContainer> */}
      <WatchlistByName />
      {/* <WatchlistWindow></WatchlistWindow> */}
      {/* <MainContainerHome></MainContainerHome> */}
    </main>
  );
}
