import React, { FunctionComponent } from "react";
import Photo from "./../img/30fe171e1d75cbb169acafc36d461276.jpg";
import { LeftImage } from "./Layout";

export const PageTwo: FunctionComponent = (): JSX.Element => {
  return (
    <LeftImage image={Photo} alt={""}>
      <div className="flex flex-col row-span-1 gap-5 text-2xl text-white">
        <div>
          <span className="mx-2 text-red-500">02</span>
          <span className="mx-2">기획</span>
        </div>

        <div className="text-lg">
          <p>노련한 경험 위에 쌓는 혁신적인 기획.</p>
          <p>효율적인 어플리케이션 구동을 위해 빈틈 없는</p>
          <p>기획 단계를 포함합니다.</p>
        </div>
      </div>
    </LeftImage>
  );
};