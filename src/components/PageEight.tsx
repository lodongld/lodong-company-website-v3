import { Paragraph } from "@/ts/Motion";
import React, { FunctionComponent } from "react";
import Photo from "./../img/64c28d655c10d70306d734c5b2c5336d.jpg";
import { LeftImage } from "./Layout";

export const PageEight: FunctionComponent = (): JSX.Element => {
  return (
    <LeftImage image={Photo} alt={""}>
      <div className={"flex flex-col row-span-1 gap-5 text-2xl text-white"}>
        <div>
          <span className={"mx-2 text-red-500"}>08</span>
          <span className={"mx-2"}>유지보수</span>
        </div>

        <div>
          <div className={"text-lg"}>
            <Paragraph>대표님과 저희의 인연은 끝까지 !  작업이 완료 되었어도</Paragraph>
            <Paragraph>지속적인 모니터링과 추가 AS로 절대적인 만족을 보장합니다.</Paragraph>
          </div>
        </div>
      </div>
    </LeftImage>
  );
};