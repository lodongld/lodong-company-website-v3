import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/7071cf963d13ddf4aa425ba18e0a8881.jpg";
import styles from "./../styles/page-3.module.css";

export const PageThree: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">03</span>
            <span className="mx-2">디자인</span>
          </div>

          <div>
            <div className="text-lg">
              <p>심플함과 화려함의 밸런스.</p>
              <p>최고의 전문 디자이너와 함께.</p>
              <p>작업의 고급스러운 영혼을 부여합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <div className="image-container">
          <Image src={Photo} alt={"how_we_work.jpg"} className={styles.photo} placeholder={"blur"}  />
        </div>
      </div>
    </Element>
  );
};