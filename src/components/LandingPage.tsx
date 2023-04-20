import React, { FunctionComponent } from "react";
import { Element } from "react-scroll";
import styles from "./../styles/landing.module.css";

export const LandingPage: FunctionComponent = (): JSX.Element => {
  const [isInView, setIsInView] = React.useState<boolean>(true);

  React.useEffect(() => {
    const target = document.querySelector("[name='home']");

    const targetPosition = target?.getBoundingClientRect();

    if (targetPosition) {
      const isVisible = targetPosition.top >= 0 &&
        targetPosition.left >= 0 &&
        targetPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        targetPosition.right <= (window.innerWidth || document.documentElement.clientWidth);

      console.log(isVisible);

      setIsInView(isVisible);
    }
  }, [isInView]);

  return (
    <Element name={"home"} className={`${styles.landing}`}>
      <div className="grid justify-between w-full h-screen grid-cols-1 grid-rows-3">
        <div className="row-span-1 row-start-2 mx-20">
          <div className="flex flex-col justify-center row-span-1 row-start-2 text-end gap-y-3">
            <div className="text-5xl text-white">실패 경험 <span className="font-bold">ZERO</span></div>
            <div className="text-5xl text-white">세상에 없던 디지털 솔루션 개발 전문</div>
            <div className="text-5xl font-bold text-[#FA2B2B]">LODONG</div>
          </div>
        </div>

        <div className="flex flex-col justify-center row-span-1 row-start-3 px-20 bg-opacity-50 gap-y-3 bg-neutral-900">
          <h1 className="text-4xl font-bold text-white">We Develop Innovative</h1>
          <h1 className="text-4xl font-bold text-gray-500">Digital Solutions</h1>
          <h1 className="text-4xl font-bold text-white">Enhancing User Experience</h1>
        </div>
      </div>
    </Element>
  );
};