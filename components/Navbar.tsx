import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between align-center p-8 bg-darker">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </>
  );
};

export default Navbar;
