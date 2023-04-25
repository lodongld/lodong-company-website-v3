import { Paragraph } from "@/ts/Motion";
import React, { FunctionComponent } from "react";
import Photo from "./../img/3d445a4bea47fe12009f33675f3fe076.jpg";
import { RightImage } from "./Layout";

export const PageSeven: FunctionComponent = (): JSX.Element => {
  return (
    <RightImage image={Photo} alt={""}>
      <div className={"flex flex-col row-span-1 gap-5 text-2xl text-white"}>
        <div>
          <span className={"mx-2 text-red-500"}>07</span>
          <span className={"mx-2"}>작업완료</span>
        </div>

        <div>
          <div className={"text-lg"}>
            <Paragraph>완료 보고 및 개발 자료 반환과 폐기 후 개발 소스까지 </Paragraph>
            <Paragraph>전달해 드린 후 마무리합니다.</Paragraph>
          </div>
        </div>
      </div>
    </RightImage>
  );
};