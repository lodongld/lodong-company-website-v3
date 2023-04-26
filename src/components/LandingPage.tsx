import React, { FunctionComponent, Ref, RefObject } from "react";
import Image from "next/image";
import Photo from "./../img/team-looking-busy.jpg";
import css from "./../styles/landing.module.css";
import { Division, Heading2 } from "@/ts/Motion";
import DownArrow from "./../img/Vector.png";

interface Props {
  ref: RefObject<HTMLElement>;
}

export const LandingPage: FunctionComponent<Props> = (props): JSX.Element => {
  const styles = {
    backgroundImage: `url(${Photo.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (window.location.hash === "#how-we-work") {
      props.ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.ref]);

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

        <Division className={css.description}>
          <Division className={"row-span-1"}>
            <Heading2 className={`${css.headerText}`}>We Develop Innovative</Heading2>
          </Division>

          <Division className={"row-span-1"}>
            <Heading2 className={`${css.headerTextGray}`}>Digital Solutions</Heading2>
          </Division>

          <Division className={"row-span-1 flex justify-between items-center"}>
            <Heading2 className={`${css.headerText}`}>Enhancing User Experience</Heading2>
            <Image src={DownArrow} alt={"down-arrow.png"} className={css.downArrowIcon} />
          </Division>
        </Division>
      </div>
    </section>
  );
};