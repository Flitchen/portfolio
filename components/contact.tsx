import Image from "next/image";
import React from "react";
import SolidBtn from "./solidBtn";
import SectionTitle from "./sectionTitle";

export default function Contact() {
  return (
    <div id="contact" className=" space-y-8 pt-16">
      <SectionTitle title="Contact" />
      <div
        id="contact"
        className="flex  lg:items-start  lg:flex-row justify-center w-full"
      >
        <div className=" flex flex-col space-y-6 p-12 bg-white min-w-[400px]">
          <div className="p-3 border-2 rounded-xl border-neutral-400">
            <input
              className=" w-full focus:outline-none text-black"
              placeholder="
          Your name"
            />
          </div>
          <div className="p-3 border-2 border-neutral-400 rounded-xl">
            <input
              className="focus:outline-none text-black"
              placeholder="
          Your Email"
            />
          </div>
          <div className="p-3 border-2 border-neutral-400 rounded-xl h-40">
            <input
              className="focus:outline-none text-black"
              placeholder="
          Message"
            />
          </div>

          <SolidBtn title="Send Message" />
        </div>
        <Image
          className="hidden lg:block"
          src="/images/hero.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
