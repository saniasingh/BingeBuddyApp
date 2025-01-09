import React from "react";
import Image from "next/image";

import ActorImg from "./../../assets/Tom Cruise 1.png";


export const CastCard = () => {
  return (
    <>
      <main className="text-white flex flex-col my-4 ml-8 w-36">
        <Image src={ActorImg} alt="Actor Profile Image" width={142} height={200} />
        <p className="flex flex-wrap pl-2">Tom Cruise with Long Name</p>
        <p className="text-xs p-2 flex flex-wrap">Capt. Pete 'Maverick' Mitchell</p>
      </main>
    </>
  );
};
