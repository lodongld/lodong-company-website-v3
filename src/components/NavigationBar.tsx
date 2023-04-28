import React, { FunctionComponent } from "react";
import Image from "next/image";
import LodongIcon from "./../img/lodong-icon.png";
import css from "./../styles/navigation.module.css";

export const NavigationBar: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center flex-row flex-nowrap py-[1.5rem] px-[2rem] lg:px-[90px]">
          <a href="#">
            <Image src={LodongIcon} alt="lodong logo" className="h-[50px] lg:h-[65px] w-auto" />
          </a>

          <div className="block md:hidden p-[0.5rem] border-2 border-transparent cursor-pointer hover:border-2 hover:border-black hover:rounded">
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>

          <div className="hidden md:block">
            <div className="flex flex-row items-center justify-start flex-nowrap">
              <a href="#" className="text-lg text-white font-bold px-[0.5rem] lg:px-[1rem] hover:font-bold">Home</a>
              <a href="#" className="text-lg text-white px-[0.5rem] lg:px-[1rem] hover:font-bold ">About Us</a>
              <a href="#" className="text-lg text-white px-[0.5rem] lg:px-[1rem] hover:font-bold">Service</a>
              <a href="#" className="text-lg text-white px-[0.5rem] lg:px-[1rem] hover:font-bold">Projects</a>
              <a href="#" className="text-lg text-white px-[0.5rem] lg:px-[1rem] hover:font-bold">News</a>
              <a href="#" className="text-lg text-white px-[0.5rem] lg:px-[1rem] hover:font-bold">Careers</a>
              <a href="#" className="text-lg text-white font-medium px-[2rem] py-[0.5rem] ml-[0.75rem] lg:ml-[1rem] rounded-full bg-[#242424] drop-shadow-lg border-2 hover:bg-transparent hover:border-[#242424] hover:text-[#242424]">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <aside className="absolute top-0 left-0 z-50 hidden block w-4/5 h-full md:hidden bg-neutral-950">
        <div className="flex flex-col items-center justify-start h-screen">
          <div className="bg-opacity-5 bg-white h-auto w-full py-[1.5rem] flex justify-center items-center">
            <a href="#" className="#">
              <div className="h-[50px] lg:h-[65px]">
                <Image src={LodongIcon} alt="lodong logo" fill={false} />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center justify-start w-full">
            <a href="#" className="w-full text-center text-lg text-white font-bold py-[1rem] hover:font-bold">Home</a>
            <a href="#" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">About Us</a>
            <a href="#" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Service</a>
            <a href="#" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Projects</a>
            <a href="#" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">News</a>
            <a href="#" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Careers</a>
            <a href="#" className="text-lg text-white px-[2rem] py-[0.75rem] mt-[1rem] rounded-full border-2 border-transparent bg-[#242424] drop-shadow-lg hover:bg-transparent hover:border-[#242424]">Contact</a>
          </div>
        </div>
      </aside>
    </>
  );
};
