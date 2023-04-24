import React, { FunctionComponent } from "react";
import { Element } from "react-scroll";
import Photo from "./../img/team-looking-busy.jpg";

export const LandingPage: FunctionComponent = (): JSX.Element => {
  const styles = {
    backgroundImage: `url(${Photo.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <Element name={"home"} style={styles}>
      <div className="grid justify-between w-full h-screen grid-cols-1 grid-rows-3">
        <div className="row-span-1 row-start-2 mx-20">
          <div className="flex flex-col justify-center row-span-1 row-start-2 text-end gap-y-3">
            <div className="text-5xl text-white">실패 경험 <span className="font-bold">ZERO</span></div>
            <div className="text-5xl text-white">세상에 없던 디지털 솔루션 개발 전문</div>
            <div className="text-9xl font-bold text-[#FA2B2B]">LODONG</div>
          </div>
        </div>

        <div className="flex flex-col justify-center row-span-1 row-start-3 px-10 bg-opacity-50 lg:px-16 gap-y-3 bg-neutral-900">
          <h1 className="font-bold text-white lg:text-4xl">We Develop Innovative</h1>
          <h1 className="font-bold text-gray-500 lg:text-4xl">Digital Solutions</h1>
          <h1 className="font-bold text-white lg:text-4xl">Enhancing User Experience</h1>
        </div>
      </div>
    </Element>
  );
};