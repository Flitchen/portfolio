import { navLinks, services } from "@/utils/common";
import Link from "next/link";
import React from "react";
import { GrServices } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { LuLink } from "react-icons/lu";
import { SlEnvolope, SlLocationPin, SlPhone } from "react-icons/sl";

export default function Footer() {
  return (
    <>
      <div className="block space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-4 py-6 ">
        <div className="flex flex-col space-y-6 ">
          <p className="text-2xl font-extrabold tracking-wider">About</p>
          <p className="text-neutral-300 text-lg">
            {" "}
            I'm Abdulkarim Hassan, an IT professional with a Bachelor's degree
            in Information and Communucation Technology with Management and over
            3 years of experience in developing mobile and web applications
          </p>
        </div>
        <div className=" lg:flex flex-col lg:items-center">
          <p className="text-2xl font-extrabold tracking-wider">Links</p>
          <ul className="space-y-4 py-3 text-lg">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="flex flex-row  space-x-2 items-center text-neutral-300"
              >
                <Link
                  href={link.path}
                  className="flex flex-row  space-x-2 items-center"
                >
                  <LuLink className="text-neutral-300" size={20} />
                  <p>{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-2xl font-extrabold tracking-wider">Services</p>
          <ul className="space-y-4 py-3 text-lg">
            {services.map((service) => (
              <li
                key={service}
                className="flex flex-row  space-x-2 items-center text-neutral-300"
              >
                <GrServices className="text-neutral-300" size={20} />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-2xl font-extrabold tracking-wider ">
            Have a Question?
          </p>
          <ul className="space-y-4 py-3 text-lg">
            <li className="flex flex-row  space-x-5 items-center text-neutral-300">
              <SlLocationPin className="text-neutral-300" size={30} />
              <p> 203 Fake St. Dar es Salaam, Tanzania</p>
            </li>
            <li className="flex flex-row  space-x-5 items-center text-neutral-300">
              <SlPhone className="text-neutral-300" size={25} />
              <p> +255 392 3929 210</p>
            </li>
            <li className="flex flex-row  space-x-5 items-center text-neutral-300">
              <SlEnvolope className="text-neutral-300" size={25} />
              <p> dulab@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-neutral-400 text-center">
        Abdulkarim Hassan &copy; 2023. All rights reserved.
      </p>
    </>
  );
}
