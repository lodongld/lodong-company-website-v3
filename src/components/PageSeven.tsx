import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/3d445a4bea47fe12009f33675f3fe076.jpg";
import styles from "./../styles/page-3.module.css";

export const PageSeven: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">07</span>
            <span className="mx-2">작업완료</span>
          </div>

          <div>
            <div className="text-lg">
              <p>용두용미, 화룡점정. 완료 보고 및 개발 자료 반환과 폐기 후</p>
              <p>개발 소스까지 전달해 드린 후 마무리합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <div className="image-container">
          <Image src={Photo} alt={"how_we_work.jpg"} className={styles.photo} placeholder={"blur"} />
        </div>
      </div>
    </Element>
  );
};