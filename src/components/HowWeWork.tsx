import React, { FunctionComponent } from "react";
import Image from "next/image";
import HowWeWorkImage from "./../img/how-we-work.jpg";
import { Element } from "react-scroll";
import styles from "./../styles/how-we-work.module.css";

export const HowWeWork: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">LODONG</span>
            <span className="mx-2">의 개발 프로세스</span>
          </div>

          <div>
            <h1 className="text-6xl font-bold">How We Work</h1>
          </div>
        </div>

        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">01</span>
            <span className="mx-2">컨설팅 및 솔루션</span>
          </div>

          <div>
            <div className="text-lg">
              <p>하나를 말씀하시면 열을 아는 로동.</p>
              <p>대표님들의 상상을 현실로 만들어드립니다.</p>
              <p>완성도 높은 컨설팅, 완벽한 솔루션으로 증명합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <div className="image-container">
          <Image src={HowWeWorkImage} alt={"how_we_work.jpg"} className={styles.image} />
        </div>
      </div>
    </Element>
  );
};