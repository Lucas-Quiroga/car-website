"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Discover, reserve, or hire a car with speed and ease!
          </h1>

          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process
          </p>

          <CustomButton
            title="Explore Cars"
            containerStyles="bg-red-500 text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src={"/hero3.png"}
              alt="hero"
              fill
              className="object-contain"
            />
          </div>

          {/* <div className="hero__image-overlay"></div> */}
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1697144378 hidden xl:block ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;
