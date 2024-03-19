"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../utils/common";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
  const [pathname, setPathname] = useState("/");
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const handleMobileNav = () => setOpenMobileNav((prev) => !prev);
  return (
    <div className="w-full fixed top-0 py-2 px-6  nav">
      <div className="flex flex-row justify-between items-center pb-4">
        <p className="text-white text-2xl font-extrabold">DevAbdul</p>

        {/* Desktop navbar */}
        <nav className="lg:flex hidden">
          <ul className="flex flex-row space-x-8 items-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => setPathname(link.path)}
                className={`text-lg tracking-wider hover:border-b-2 border-yellow-500 hover:transition-all hover:ease-linear ${
                  pathname == link.path
                    ? "text-yellow-500 border-b-2"
                    : "text-white"
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navbar */}

        <div
          className="flex flex-row lg:hidden items-center space-x-2"
          onClick={handleMobileNav}
        >
          {openMobileNav ? (
            <GrClose color="gray" size={25} />
          ) : (
            <GiHamburgerMenu color="gray" size={25} />
          )}
          {/* <p className="tracking-wider text-gray-300/70">MENU</p> */}
        </div>
      </div>

      {/* Mobile navlinks */}
      <div
        className={`${
          openMobileNav ? "flex" : "hidden"
        } lg:hidden transition   duration-300 ease-in-out`}
      >
        <ul className="space-y-4 items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={` text-lg tracking-wider hover:border-b-2  border-yellow-500 hover:transition-all hover:ease-linear ${
                pathname == link.path
                  ? "text-yellow-500 border-b-2"
                  : "text-white"
              }`}
              onClick={() => {
                setPathname(link.path);
                handleMobileNav();
              }}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
