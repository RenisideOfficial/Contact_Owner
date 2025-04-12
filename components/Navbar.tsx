"use client";
import React, { useEffect, useState } from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setIsActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // if user is at the top of the webpage.
      if (window.scrollY === 0) {
        setIsScrolled(false);
        return;
      }

      const sections = ["home", "about", "service", "contact"];
      for (const section in sections) {
        // gets the actual id
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 || rect.bottom >= 150) {
            setIsActiveSection(section);
            break;
          }
        }
      }
    };

    // set initial scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between align-center p-8 bg-darker text-white z-[1000] ${
          isScrolled
            ? "fixed top-0 w-full -right-12 mx-12 transition-all duration-200"
            : "relative"
        }`}>
        <NavbarLeft />
        <NavbarRight activeSection={activeSection} />
      </div>
    </>
  );
};

export default Navbar;
