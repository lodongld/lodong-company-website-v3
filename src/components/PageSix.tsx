import React, { FunctionComponent } from "react";
import Photo from "./../img/b112afdb818daf09e8be4cf22b594eb2.jpg";
import { LeftImage } from "./Layout";

export const PageSix: FunctionComponent = (): JSX.Element => {
  return (
    <LeftImage image={Photo} alt={""}>
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
    </LeftImage>
  );
};