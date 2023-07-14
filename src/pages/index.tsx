import { useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("features");

  return (
    <>
      <Head>
        <title>Web Design | Mert Sabinov</title>
        <meta
          name="description"
          content="Offering custom, high-quality web design solutions tailored to your needs. Flexible plans with client satisfaction as a priority. Start your journey with a free initial consultation."
        />
        <meta
          name="keywords"
          content="Web Design, Front-end, Custom Design, Freelance Web Design"
        />
        <meta name="author" content="Mert Sabinov" />
      </Head>
      <main>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Header setCurrentPage={setCurrentPage} />
        <Pricing setCurrentPage={setCurrentPage} />
        <Faq setCurrentPage={setCurrentPage} />
        <Footer />
      </main>
    </>
  );
}
