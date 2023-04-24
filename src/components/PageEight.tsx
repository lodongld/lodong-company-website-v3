import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Photo from "./../img/64c28d655c10d70306d734c5b2c5336d.jpg";
import styles from "./../styles/page-2.module.css";

export const PageEight: FunctionComponent = (): JSX.Element => {
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
            <span className="mx-2 text-red-500">08</span>
            <span className="mx-2">유지보수</span>
          </div>

          <div>
            <div className="text-lg">
              <p>대표님과 저희의 인연은 끝까지 작업이 완료 되었어도</p>
              <p>지속적인 모니터링과 추가 AS로 절대적인 만족을 보장합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};