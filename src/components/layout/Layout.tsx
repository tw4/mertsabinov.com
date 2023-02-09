import Head from "next/head";
import type { ReactNode, FC } from "react";
import styles from "../../styles/Layout.module.css";
import Navbar from "../navbar/Navbar";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mert Sabinov</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am a Software Developer passionate about developing ideas in open source communities. Currently learning React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB and running open source projects. I want to work with technologies like React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB As a developer, most of my time is spent creating projects and learning new things every day."
        />
        <meta
          name="keywords"
          content="mert, mertsabinov, sabinov, mert sabinov"
        />
        <meta name="author" content="Mert Sabinov" />
      </Head>
      <Navbar />
      <main className={styles.layout}>{children}</main>
    </>
  );
};

export default Layout;
