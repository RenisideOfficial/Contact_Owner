"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "@/components/Slide";

const Carousel = () => {
  const slideData = [
    {
      img: "/icons/slide2.png",
      description:
        "Transforming Your Industry/Area with Innovative Solutions. Learn More. Unlock Your Potential: We Guide You to Success. Get Started Today.",
    },
    {
      img: "/icons/slide3.png",
      description:
        "Transforming Your Industry/Area with Innovative Solutions. Learn More. Unlock Your Potential: We Guide You to Success. Get Started Today.",
    },
    {
      img: "/icons/slide4.png",
      description:
        "Transforming Your Industry/Area with Innovative Solutions. Learn More. Unlock Your Potential: We Guide You to Success. Get Started Today.",
    },
    {
      img: "/icons/slide6.png",
      description:
        "Transforming Your Industry/Area with Innovative Solutions. Learn More. Unlock Your Potential: We Guide You to Success. Get Started Today.",
    },
    {
      img: "/icons/slide8.png",
      description:
        "Transforming Your Industry/Area with Innovative Solutions. Learn More. Unlock Your Potential: We Guide You to Success. Get Started Today.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="mt-[20%]">
        <h1 className="lg:text-4xl text-3xl text-center">What we believe?</h1>
        <Slider {...settings} className="mt-12">
          {slideData.map((items, index) => (
            <Slide key={index} {...items} />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Carousel;
