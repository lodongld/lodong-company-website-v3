import React, { FunctionComponent, useCallback, useEffect } from "react";
import Image from "next/image";
import { Link, scroller, Events, animateScroll as scroll } from "react-scroll";
import LodongLogo from "./../img/lodong-logo.png";
import HamburgerIcon from "./../img/menu.svg";

export const NavigationBar: FunctionComponent = (): JSX.Element => {
  const [collapse, setCollapse] = React.useState<boolean>(false);

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
    <nav data-aos="fade-up" className="absolute flex items-center justify-between w-full h-24 px-4 py-2 bg-transparent">
      <div className="w-[64px] h-[64px]">
        <Image src={LodongLogo} alt={"lodong_logo.jpg"} className={"w-auto h-auto"} />
      </div>

      <div className="items-center hidden px-4 lg:flex nav-end gap-x-16">
        <div className="flex flex-wrap nav-group gap-x-5">
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