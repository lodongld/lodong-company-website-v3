import { LandingPage } from "@/components/LandingPage";
import { NavigationBar } from "@/components/NavigationBar";
import React, { Fragment, FunctionComponent } from "react";
import Head from "next/head";
import { HowWeWork } from "@/components/HowWeWork";
import { PageTwo } from "@/components/PageTwo";
import { PageThree } from "@/components/PageThree";
import { PageFour } from "@/components/PageFour";
import { PageFive } from "@/components/PageFive";
import { PageSix } from "@/components/PageSix";
import { PageSeven } from "@/components/PageSeven";
import { PageEight } from "@/components/PageEight";
import { Footer } from "@/components/Footer";
import { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet={"UTF-8"} />
        <meta httpEquiv={"X-UA-Compatible"} />
        <meta name={"google"} content={"notranslate"} />
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
        <title>Lodong</title>
      </Head>

      <NavigationBar />

      <LandingPage />

      <HowWeWork />

      <PageTwo />

      <PageThree />

      <PageFour />

      <PageFive />

      <PageSix />

      <PageSeven />

      <PageEight />

      <Footer />
    </>
  );
};

export default Home;