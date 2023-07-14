import type { FC } from "react";
import { useRouter } from "next/router";

type IProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

/* eslint-disable @next/next/no-img-element */
const Navbar: FC<IProps> = ({ currentPage, setCurrentPage }) => {
  const router = useRouter();
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: string
  ) => {
    e.preventDefault();
    document.getElementById(page)!.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(page);
  };

  const goToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="fixed top-10 flex w-full justify-center bg-white-50">
      <nav className="flex flex-row p-3 items justify-between w-[55vw] h-[70px] bg-white/50 backdrop-blur-xl rounded-xl border-[1px] border-gray-200 lg:w-[90vw] ">
        {/* Left */}
        <div className="flex flex-row items-center w-[33%] justify-around space-x-3">
          <img
            height={50}
            width={50}
            src="https://fffuel.co/images/dddepth/dddepth-346.jpg"
            className="rounded-xl"
            alt="logo"
          />
          <p>Mert Sabinov</p>
          <span className="flex flex-row px-2 bg-gray-100 text-gray-500 font-mono text-sm rounded-md xl:hidden">
            V1.0.0
          </span>
        </div>
        {/* Center */}
        <div className="flex flex-row items-center text-center text-sm space-x-3 xl:hidden">
          <a
            onClick={(e) => handleScroll(e, "features")}
            href="#features"
            className={` ${
              currentPage === "features" ? "text-black" : "text-gray-500"
            }  hover:underline `}>
            Features
          </a>
          <a
            onClick={(e) => handleScroll(e, "pricing")}
            href="#pricing"
            className={`${
              currentPage === "pricing" ? "text-black" : "text-gray-500"
            } hover:underline`}>
            Pricing
          </a>
          <a
            onClick={(e) => handleScroll(e, "faq")}
            href="#faq"
            className={`${
              currentPage === "faq" ? "text-black" : "text-gray-500"
            } hover:underline`}>
            FAQ
          </a>
        </div>
        {/* Right */}
        <div className="flex flex-row space-x-3 items-center justify-end w-[33%] ">
          <button
            onClick={goToContact}
            className="px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-white ">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
