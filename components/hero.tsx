import { navLinks } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OutlineBtn from "./outlineBtn";
import SolidBtn from "./solidBtn";

export default function Hero() {
  return (
    <div className="lg:flex block  lg:space-x-6 space-y-8 items-center">
      <div className="flex flex-col space-y-6 ">
        <p className="lg:text-start text-center text-yellow-500 tracking-widest">
          HELLO !
        </p>
        <div className="text-start sm:text-center lg:text-start space-y-3  ">
          <p className="text-3xl font-extrabold tracking-widest">
            I'm <span className="text-yellow-500">Abdulkarim Hassan </span>
          </p>
          <p className="font-semibold text-xl">
            A passionate <span className="text-yellow-500">Mobile</span> and{" "}
            <span className="text-yellow-500">Web App Developer</span>
          </p>
        </div>
        <div className="flex flex-row lg:self-start self-center space-x-4">
          <Link href={navLinks[0].path}>
            <SolidBtn title="Hire me" />
          </Link>
          {/* Link that is Indexed to my projects   */}
          <Link href={navLinks[navLinks.length - 2].path}>
            <OutlineBtn title="My works" />
          </Link>
        </div>
      </div>
      <Image
        src="/images/hero.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
