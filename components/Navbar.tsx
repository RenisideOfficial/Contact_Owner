import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-col justify-between align-center m-8 p-2">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </>
  );
};

export default Navbar;
