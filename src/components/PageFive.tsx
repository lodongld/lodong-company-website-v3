import React, { FunctionComponent } from "react";
import Photo from "./../img/b3a13b93967b546962311a8790e33f62.jpg";
import { RightImage } from "./Layout";

export const PageFive: FunctionComponent = (): JSX.Element => {
  return (
    <RightImage image={Photo} alt={""}>
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
    </RightImage>
  );
};