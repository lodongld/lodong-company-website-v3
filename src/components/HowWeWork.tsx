import React, { FunctionComponent } from "react";
import HowWeWorkImage from "./../img/how-we-work.png";
import { RightImage } from "./Layout";
import { Paragraph } from "@/ts/Motion";

export const HowWeWork: FunctionComponent = (): JSX.Element => {
  return (
    <RightImage image={HowWeWorkImage} alt={""}>
      <div className={"flex flex-col row-span-1 gap-5 text-2xl text-white"}>
        <div>
          <span className={"mx-2 text-red-500"}>LODONG</span>
          <span className={"mx-2"}>의 개발 프로세스</span>
        </div>

        <div>
          <h1 className={"text-6xl font-bold"}>How We Work</h1>
        </div>
      </div>

      <div className={"flex flex-col row-span-1 gap-5 text-2xl text-white"}>
        <div>
          <span className={"mx-2 text-red-500"}>01</span>
          <span className={"mx-2"}>컨설팅 및 솔루션</span>
        </div>

        <div>
          <div className={"text-lg"}>
            <Paragraph>하나를 말씀하시면 열을 아는 로동.</Paragraph>
            <Paragraph>대표님들의 상상을 현실로 만들어드립니다.</Paragraph>
            <Paragraph>완성도 높은 컨설팅, 완벽한 솔루션으로 증명합니다.</Paragraph>
          </div>
        </div>
      </div>
    </RightImage>
  );
};