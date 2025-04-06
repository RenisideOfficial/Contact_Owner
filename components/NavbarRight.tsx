"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes, FaHamburger } from "react-icons/fa";

const NavbarRight = () => {
  const [open, setIsOpen] = useState(false);
  const [active, setIsActive] = useState<number | null>(0);

  const navData = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Service", target: "service" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <>
      <div className="md:flex hidden text-white text-[1.3rem]">
        {navData.map((item, index) => (
          <Link
            href="#"
            key={index}
            className={cn(
              "mr-8 hover:text-dark transition-colors duration-200",
              active === index && "text-dark"
            )}
            onClick={() => setIsActive(index)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden flex text-2xl text-white"
        onClick={() => setIsOpen(!open)}
      >
        {open ? <FaTimes className="z-[1001]" /> : <FaHamburger />}
      </button>

      {open && (
        <div className="flex md:hidden text-white flex-col text-center align-center absolute top-0 left-0 w-full gap-8 p-8 bg-darker rounded-b-3xl z-[1000] text-[1.3rem]">
          {navData.map((item, index) => (
            <Link
              href="#"
              key={index}
              className={cn(
                "hover:text-dark transition-colors duration-200",
                active === index && "text-dark"
              )}
              onClick={() => {
                setIsActive(index);
                setIsOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarRight;
