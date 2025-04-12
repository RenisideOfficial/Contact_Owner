import React from "react";
import img from "@/public/verified.svg";
import Image from "next/image";
import Link from "next/link";

const NavbarLeft = () => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Link
        href="#"
        className="flex gap-4 text-2xl"
        onClick={() => handleLink()}>
        <Image src={img} alt="home" className="w-8" />
        <h2>Verified</h2>
      </Link>
    </div>
  );
};

export default NavbarLeft;
