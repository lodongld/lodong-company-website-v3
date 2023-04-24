import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/b3a13b93967b546962311a8790e33f62.jpg";
import styles from "./../styles/page-3.module.css";

export const PageFive: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">05</span>
            <span className="mx-2">테스트</span>
          </div>

          <div>
            <div className="text-lg">
              <p>완벽의, 완벽을 위한, 완벽에 의한 개발.</p>
              <p>아주 사소한 문제도 절대 용납하지 않습니다.</p>
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