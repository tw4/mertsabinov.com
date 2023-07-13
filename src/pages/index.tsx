import { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("features");

  return (
    <main>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Header setCurrentPage={setCurrentPage} />
      <Pricing setCurrentPage={setCurrentPage} />
      <Faq setCurrentPage={setCurrentPage} />
      <Footer />
    </main>
  );
}
