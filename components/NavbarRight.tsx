import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NavbarRight = ({ activeSection = "home" }: NavbarRightProps) => {
  const [open, setIsOpen] = useState(false);
  const navData = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Service", target: "service" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <>
      <div className="hidden md:flex z-[1000]">
        {navData.map((item, index) => (
          <ScrollLink
            to={item.target}
            smooth={true}
            duration={500}
            href="#"
            key={index}
            className={cn(
              "mr-8 text-[1.3rem] hover:text-dark transition-200 duration-200",
              activeSection === item.target ? "text-dark" : "text-white"
            )}>
            {item.name}
          </ScrollLink>
        ))}
      </div>

      <button
        className="md:hidden flex text-2xl"
        onClick={() => setIsOpen(!open)}>
        {open ? (
          <FaTimes className="fixed right-8 z-[1001]" />
        ) : (
          <FaHamburger />
        )}
      </button>

      {open && (
        <div className="md:hidden w-full flex flex-col justify-center align-center text-center py-6 fixed right-0 top-0 rounded-b-3xl bg-darker z-[1000]">
          {navData.map((item, index) => (
            <ScrollLink
              to={item.target}
              smooth={true}
              duration={500}
              href="#"
              key={index}
              className={cn(
                "mt-6 hover:text-dark transition-200 duration-200",
                activeSection === item.target ? "text-dark" : "text-white"
              )}
              onClick={() => {
                setIsOpen(false);
              }}>
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarRight;
