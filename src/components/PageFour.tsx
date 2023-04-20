import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/25c4090577e890bf05aaac64dce02c0a.jpg";
import styles from "./../styles/page-2.module.css";

export const PageFour: FunctionComponent = (): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="col-span-8">
        <div className="image-container">
          <Image src={Photo} alt={"how_we_work.jpg"} className={styles.photo} />
        </div>
      </div>

      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
          <div>
            <span className="mx-2 text-red-500">04</span>
            <span className="mx-2">개발</span>
          </div>

          <div>
            <div className="text-lg">
              <p>몇 수 앞을 더 내다보는 로동.</p>
              <p>단순 구동이 아닌 향후 보수 및 추가 기능까지 고려한</p>
              <p>개발을 진행합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};