import React, { FunctionComponent } from "react";
import Photo from "./../img/team-looking-busy.jpg";
import css from "./../styles/landing.module.css";
import { Division, Heading1 } from "@/ts/Motion";

export const LandingPage: FunctionComponent = (): JSX.Element => {
  const styles = {
    backgroundImage: `url(${Photo.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <section style={styles}>
      <div className={"grid justify-between w-full h-screen grid-cols-1 grid-rows-3"}>
        <div className={"row-span-1 row-start-2 mx-20 flex justify-end"}>
          <Division className={"flex flex-col justify-end row-span-1 row-start-2 text-end gap-y-3"}>
            <div className={css.header}>실패 경험 <span className={"font-extrabold text-5xl"}>ZERO</span></div>
            <div className={css.header}>세상에 없던 디지털 솔루션 개발 전문</div>
            <div className={css.lodong}>LODONG</div>
          </Division>
        </div>

        <Division className={"flex flex-col justify-center row-span-1 row-start-3 px-10 bg-opacity-50 lg:px-16 bg-neutral-900"}>
          <Division>
            <Heading1 className={css.headerText}>We Develop Innovative</Heading1>
            <Heading1 className={css.headerTextGray}>Digital Solutions</Heading1>
            <Heading1 className={css.headerText}>Enhancing User Experience</Heading1>
          </Division>
        </Division>
      </div>
    </section>
  );
};