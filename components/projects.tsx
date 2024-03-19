import React from "react";
import SectionTitle from "./sectionTitle";
import Image from "next/image";
import { PiArrowLeftBold, PiArrowRightBold } from "react-icons/pi";

export default function Projects() {
  return (
    <div
      id="projects"
      className=" flex flex-col items-center space-y-6 w-full h-screen pt-16"
    >
      <SectionTitle title="Projects" />
      <div className="relative w-full h-screen group">
        <div
          style={{ backgroundImage: `url('/hero.png')` }}
          className="relative w-full h-screen bg-top -z-10 bg-cover duration-500"
        ></div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer">
          <PiArrowLeftBold color="white" />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 cursor-pointer">
          <PiArrowRightBold color="white" />
        </div>
      </div>
    </div>
  );
}
