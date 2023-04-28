import { NavigationBar } from "@/components/NavigationBar";
import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = (): JSX.Element => {
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

      
    </>
  );
};

export default About;