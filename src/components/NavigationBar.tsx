import React, { FunctionComponent, useCallback, useEffect } from "react";
import Image from "next/image";
import { Link, scroller, Events, animateScroll as scroll } from "react-scroll";
import Logo from "./../img/lodong-logo.png";

export const NavigationBar: FunctionComponent = (): JSX.Element => {
  const scrollToTop = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  const scrollTo = useCallback(() => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }, []);

  const scrollToWithContainer = useCallback(() => {
    const goToContainer = new Promise<void>((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() => {
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      });
    });
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", "arguments");
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", "arguments");
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="absolute flex items-center justify-between w-full h-24 px-4 py-2 bg-transparent">
      <div className="nav-start">
        <Image src={Logo} className="w-20" alt={"lodong_logo.jpg"} />
      </div>

      <div className="flex items-center px-4 nav-end gap-x-16">
        <div className="flex nav-group gap-x-5">
          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link>
          </div>

          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="about-us" spy={true} smooth={true} duration={500}>About Us</Link>
          </div>

          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link>
          </div>

          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>Work</Link>
          </div>

          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="news" spy={true} smooth={true} duration={500}>News</Link>
          </div>

          <div className="cursor-pointer nav-item">
            <Link activeClass="active" to="careers" spy={true} smooth={true} duration={500}>Careers</Link>
          </div>
        </div>

        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
          <button className="px-4 py-2 text-white bg-black rounded-full">Contact</button>
        </Link>
      </div>
    </nav>
  );
};