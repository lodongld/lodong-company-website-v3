import React, { FunctionComponent } from "react";
import Photo from "./../img/team-looking-busy.jpg";
import { motion } from "framer-motion";
import css from "./../styles/landing.module.css";

export const LandingPage: FunctionComponent = (): JSX.Element => {
  const styles = {
    backgroundImage: `url(${Photo.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const initial = {
    opacity: 0,
    y: 100
  };

  const animate = {
    opacity: 1,
    y: 0
  };

  const transition = {
    delay: 0.5,
    ease: "easeInOut",
    duration: 2
  };

  return (
    <section style={styles}>
      <div className="grid justify-between w-full h-screen grid-cols-1 grid-rows-3">
        <div className="row-span-1 row-start-2 mx-20">
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: 100
              }
            }}
            className="flex flex-col justify-center row-span-1 row-start-2 text-end gap-y-3"
          >
            <div className={css.header}>실패 경험 <span className="font-extrabold">ZERO</span></div>
            <div className={css.header}>세상에 없던 디지털 솔루션 개발 전문</div>
            <div className={css.lodong}>LODONG</div>
          </motion.div>
        </div>

        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 2 }} className="row-span-1 row-start-3 px-10 bg-opacity-50 lg:px-16 bg-neutral-900">
          <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 2 }} className={css.headerText}>We Develop Innovative</motion.h1>
          <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 2 }} className={css.headerText}>Digital Solutions</motion.h1>
          <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 2 }} className={css.headerText}>Enhancing User Experience</motion.h1>
        </motion.div>
      </div>
    </section>
  );
};