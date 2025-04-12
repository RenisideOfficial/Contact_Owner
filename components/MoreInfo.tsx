import Image from "next/image";
import React from "react";
import img from "@/public/imgs/Cutout3.png";

const MoreInfo = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col justify-between align-baseline mt-24 lg:gap-24 gap-6 lg:mt-[10rem]">
      <div className="mt-8">
        <h2 className="md:text-6xl text-3xl font-bold lg:mt-24">
          Transforming Your Industry/Area <br /> with Innovative Solutions.
        </h2>
        <p className="md:text-3xl text-2xl">
          Building Your Vision, Delivering Real Results. Unlock Your Potential:
          We Guide You to Success. The Future of Your Industry/Area Starts Here.
          Experience the Difference: Quality, Innovation, and Excellence.
        </p>
      </div>
      <Image src={img} alt="cutout" className="lg:w-[40%] w-full" />
    </div>
  );
};

export default MoreInfo;
