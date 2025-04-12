import React from "react";
import img from "@/public/imgs/Cutout2.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col justify-between align-baseline mt-24 lg:gap-24 gap-6 lg:mt-[10rem]">
      <Image
        src={img}
        alt="cutout"
        className="lg:w-[40%] w-full transform scale-x-[-1] -z-50"
      />
      <div className="mt-8">
        <h2 className="md:text-6xl text-3xl font-bold lg:mt-24">
          Transforming Your Industry/Area <br /> with Innovative Solutions.
        </h2>
        <p className="md:text-3xl text-2xl">
          Your Partner for Your Core Offering. We Help You Key Benefit.
          Solutions Made Simple. Connecting You to What You Connect Them To.
          Your Company Name: Making Key Action Easier.
        </p>
      </div>
    </div>
  );
};

export default About;
