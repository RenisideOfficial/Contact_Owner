import Image from "next/image";
import React from "react";

const Slide = ({ img, description }: SliderProps) => {
  return (
    <div className="flex flex-col justify-center align-center text-center text-2xl mx-[15%]">
      <Image
        src={img}
        alt="slide"
        className="relative lg:left-[22%]"
        width={500}
        height={500}
      />
      <p className="mt-6">{description}</p>
    </div>
  );
};

export default Slide;
