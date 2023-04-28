import React, { RefObject, useRef } from "react";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import LandingPageBackground from "./../img/bg-main.png";
import LodongIcon from "./../img/lodong-icon.png";
import { LandingPage } from "@/components/LandingPage";
import { NavigationBar } from "@/components/NavigationBar";
import { HowWeWork } from "@/components/HowWeWork";
import { PageTwo } from "@/components/PageTwo";
import { PageThree } from "@/components/PageThree";
import { PageFour } from "@/components/PageFour";
import { PageFive } from "@/components/PageFive";
import { PageSix } from "@/components/PageSix";
import { PageSeven } from "@/components/PageSeven";
import { PageEight } from "@/components/PageEight";
import { Footer } from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = (): JSX.Element => {
  const scrollRef: RefObject<HTMLElement> = useRef(null);

  const landingPage = {
    backgroundImage: `url(${LandingPageBackground.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Head>
        <meta charSet={"UTF-8"} />
        <meta httpEquiv={"X-UA-Compatible"} />
        <meta name={"google"} content={"notranslate"} />
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
        <title>Lodong</title>
      </Head>

      <div id="landingPage" className="min-h-screen aspect-video" style={landingPage}>
        <header className="sticky top-0 w-full bg-white bg-opacity-50">
          <nav className="flex justify-between items-center flex-row flex-nowrap py-[1.5rem] px-[2rem] lg:px-[90px]">
            <a href="./index.html" className="h-[50px] lg:h-[65px] w-[50px]">
              <Image src={LodongIcon} alt="lodong logo" fill={false} />
            </a>

            <div className="block md:hidden p-[0.5rem] border-2 border-transparent cursor-pointer hover:border-2 hover:border-black hover:rounded">
              <i className="fa-solid fa-bars fa-xl"></i>
            </div>

            <div className="hidden md:block">
              <div className="flex flex-row items-center justify-start flex-nowrap">
                <a href="" className="text-lg text-black font-bold px-[0.5rem] lg:px-[1rem] hover:font-bold">Home</a>
                <a href="" className="text-lg text-black px-[0.5rem] lg:px-[1rem] hover:font-bold ">About Us</a>
                <a href="" className="text-lg text-black px-[0.5rem] lg:px-[1rem] hover:font-bold">Service</a>
                <a href="" className="text-lg text-black px-[0.5rem] lg:px-[1rem] hover:font-bold">Projects</a>
                <a href="" className="text-lg text-black px-[0.5rem] lg:px-[1rem] hover:font-bold">News</a>
                <a href="" className="text-lg text-black px-[0.5rem] lg:px-[1rem] hover:font-bold">Careers</a>
                <a href="" className="text-lg text-white font-medium px-[2rem] py-[0.5rem] ml-[0.75rem] lg:ml-[1rem] rounded-full bg-[#242424] drop-shadow-lg border-2 hover:bg-transparent hover:border-[#242424] hover:text-[#242424]">Contact</a>
              </div>
            </div>
          </nav>
        </header>

        <aside className="absolute top-0 left-0 z-50 block w-4/5 h-full md:hidden bg-neutral-950">
          <div className="flex flex-col items-center justify-start h-screen">
            <div className="bg-opacity-5 bg-white h-auto w-full py-[1.5rem] flex justify-center items-center">
              <a href="./index.html" className="h-[50px] lg:h-[65px] w-auto">
                <Image src={LodongIcon.src} alt="lodong logo" fill={true} />
              </a>
            </div>

            <div className="flex flex-col items-center justify-start w-full">
              <a href="" className="w-full text-center text-lg text-white font-bold py-[1rem] hover:font-bold">Home</a>
              <a href="" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">About Us</a>
              <a href="" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Service</a>
              <a href="" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Projects</a>
              <a href="" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">News</a>
              <a href="" className="w-full text-center text-lg text-white py-[1rem] hover:font-bold">Careers</a>
              <a href="" className="text-lg text-white px-[2rem] py-[0.75rem] mt-[1rem] rounded-full border-2 border-transparent bg-[#242424] drop-shadow-lg hover:bg-transparent hover:border-[#242424]">Contact</a>
            </div>
          </div>
        </aside>

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

              <div className="text-white cursor-pointer my-[1rem]">
                <FontAwesomeIcon icon={"chevrons-down"} className={"text-[50px] lg:text-[60px]"} />
              </div>
            </div>
          </article>
        </section>
      </div>

      <HowWeWork ref={scrollRef} />

      <PageTwo />

      <PageThree />

      <PageFour />

      <PageFive />

      <PageSix />

      <PageSeven />

      <PageEight />

      <Footer />
    </>
  );
};

export default Home;