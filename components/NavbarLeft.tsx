import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarLeft = () => {
  return (
    <>
      <div>
        <Link href="#" className="flex text-2xl gap-4 text-white">
          <Image src="/verified.svg" alt="verified" width={30} height={30} />
          <h1>Verified</h1>
        </Link>
      </div>
    </>
  );
};

export default NavbarLeft;
