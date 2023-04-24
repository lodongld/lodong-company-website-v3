import React, { FunctionComponent } from "react";
import Image from "next/image";
import LodongLogo from "./../img/lodong-logo.png";

export const NavigationBar: FunctionComponent = (): JSX.Element => {
  return (
    <nav className="absolute flex items-center justify-between w-full h-24 px-4 py-2 bg-transparent">
      <div className="w-[64px] h-[64px]">
        <Image src={LodongLogo} alt={"lodong_logo.jpg"} className={"w-auto h-auto"} />
      </div>

      <div className="items-center hidden px-4 lg:flex nav-end gap-x-16">
        <div className="flex flex-wrap nav-group gap-x-5">
          <div className="cursor-pointer nav-item">
            <a href="#home">Home</a>
          </div>

          <div className="cursor-pointer nav-item">
            <a href="#about-us">About Us</a>
          </div>

          <div className="cursor-pointer nav-item">
            <a href="#service">Service</a>
          </div>

          <div className="cursor-pointer nav-item">
            <a href="#work">Work</a>
          </div>

          <div className="cursor-pointer nav-item">
            <a href="#news">News</a>
          </div>

          <div className="cursor-pointer nav-item">
            <a href="#careers">Careers</a>
          </div>
        </div>

        <a href="#contact">
          <button className="px-4 py-2 text-white bg-black rounded-full">Contact</button>
        </a>
      </div>
    </nav>
  );
};