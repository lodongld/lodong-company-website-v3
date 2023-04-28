import React, { FunctionComponent, Ref, RefObject } from "react";
import Image from "next/image";
import Photo from "./../img/team-looking-busy.jpg";
import css from "./../styles/landing.module.css";
import { Division, Heading2 } from "@/ts/Motion";
import DownArrow from "./../img/Vector.png";

interface Props {
  ref: RefObject<HTMLElement>;
}

export const LandingPage: FunctionComponent<Props> = (props): JSX.Element => {
  const styles = {
    backgroundImage: `url(${Photo.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (window.location.hash === "#how-we-work") {
      props.ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.ref]);

  return (
    <section className="min-h-[calc(100vh_-_100px)] lg:min-h-[calc(100vh_-_119px)]">
      <article className="min-h-[calc(100vh_-_40vh_-_100px)] lg:min-h-[calc(100vh_-_40vh_-_119px)] w-full flex justify-end items-end flex-col px-[2rem] lg:px-[90px]">
        <p className="text-white font-kumbhsans text-end" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
          <span className="text-[26px] lg:text-[35px] font-medium">실패 경험 </span>
          <span className="text-[36px] lg:text-[45px] font-bold">&nbsp;ZERO</span><br />
          <span className="text-[26px] lg:text-[35px] font-medium">세상에 없던 디지털 솔루션 개발 전문</span>
        </p>
        <p className="mr-[-5px] text-[#FA2B2B] text-[100px] lg:text-[128px] leading-none font-bold tracking-tighter" style={{ textShadow: "6px -6px 0px rgba(36,36,36,0.3)" }}>LODONG</p>
      </article>

      <article className="min-h-[calc(100vh_-_60vh_+_2px)] lg:min-h-[calc(100vh_-_60vh_+_6px)]" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.80) 80%, rgba(0,0,0,0) 100%)" }}>
        <div className="min-h-[calc(100vh_-_60vh_+_2px)] lg:min-h-[calc(100vh_-_60vh_+_6px)] w-full flex justify-center lg:justify-between items-center flex-row flex-wrap px-[2rem] lg:px-[90px] ">

          <div className="w-full lg:w-4/5 font-extrabold text-[32px] md:text-[45px] lg:text-[55px] xxl:text-[75px] leading-tight text-center lg:text-left my-[1rem]">
            <p className="text-white">We Develop Innovative</p>
            <p className="text-[#6A6A6A]">Digital Solutions</p>
            <div className="flex flex-row flex-wrap items-center justify-center w-full lg:justify-start lg:flex-nowrap">
              <p className="text-white whitespace-nowrap">Enhancing User Experience</p>
              <div className="mt-[1.5rem] lg:mt-0 ms-0 lg:ms-[20px] h-[2px] w-4/5 md:w-3/5 xl:w-[450px] bg-[#6A6A6A]"></div>
            </div>
          </div>

          <div className="text-white cursor-pointer my-[1rem] ">
            <i className="fa-solid fa-chevrons-down fa-bounce text-[50px] lg:text-[60px]"></i>
          </div>

        </div>
      </article>
    </section>
  );
};