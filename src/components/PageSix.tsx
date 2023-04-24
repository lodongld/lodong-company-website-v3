import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/b112afdb818daf09e8be4cf22b594eb2.jpg";
import styles from "./../styles/page-2.module.css";

export const PageSix: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="col-span-8">
        <div className="image-container">
          <Image src={Photo} alt={"how_we_work.jpg"} className={styles.photo} placeholder={"blur"} />
        </div>
      </div>

      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">06</span>
            <span className="mx-2">퍼블리싱</span>
          </div>

          <div>
            <div className="text-lg">
              <p>A to Z with 로동.</p>
              <p>빈틈없는 정책 검토와 퍼블리싱까지 대행해 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};