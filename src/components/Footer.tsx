import Image from "next/image";
import React, { FunctionComponent } from "react";
import LodongLogo from "./../img/lodong-logo.png";

export const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer className={"flex flex-row items-stretch h-24 p-5 bg-white"}>
      <div className={"flex gap-8"}>
        <Image src={LodongLogo} alt={"lodong_logo.jpg"} className={"h-auto w-auto"} />

        <div className={"flex flex-col gap"}>
          <p className={"flex gap-8"}>
            <span><span className={"font-bold"}>상호</span> : 로동</span>
            <span><span className={"font-bold"}>대표</span> : 조이준</span>
            <span><span className={"font-bold"}>사업자등록번호</span> : 000-00-00000</span>
          </p>

          <p>
            <span><span className={"font-bold"}>사업장 소재지</span> : 경기도 안양시 만안구 덕천로 152번길 25 아이에스비즈타워 B동 1506호 </span>
          </p>
        </div>
      </div>
    </footer>
  );
};