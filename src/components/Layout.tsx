import React, { FunctionComponent, ReactNode } from "react";
import { Element } from "react-scroll";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./../styles/layout.module.css";

interface LayoutProps {
  image: StaticImageData;
  alt: string;
  children: ReactNode;
}

export const RightImage: FunctionComponent<LayoutProps> = (props: LayoutProps): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        {props.children}
      </div>

      <div className="col-span-8">
        <div className="image-container">
          <Image src={props.image} alt={props.alt} className={styles.left} placeholder={"blur"}  />
        </div>
      </div>
    </Element>
  );
};

export const LeftImage: FunctionComponent<LayoutProps> = (props: LayoutProps): JSX.Element => {
  return (
    <Element name="about-us" className="grid items-center h-screen grid-cols-12 bg-black">
      <div className="col-span-8">
        <div className="image-container">
          <Image src={props.image} alt={props.alt} className={styles.right} placeholder={"blur"}  />
        </div>
      </div>

      <div className="grid items-center justify-center h-screen grid-cols-1 col-span-4 grid-rows-2 mx-10">
        {props.children}
      </div>
    </Element>
  );
};