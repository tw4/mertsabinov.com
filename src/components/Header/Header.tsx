/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import FeaturesCard from "./FeaturesCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Header: FC<IProps> = ({ setCurrentPage }) => {
  const gotoPricingSection = () => {
    document.getElementById("pricing")!.scrollIntoView({ behavior: "smooth" });
    setCurrentPage("pricing");
  };
  return (
    <div
      onMouseEnter={() => setCurrentPage("features")}
      id="features"
      className="mt-[25vh] flex justify-center w-full">
      <div className="w-[50vw] xl:w-[85vw] text-center">
        <span className="text-sm font-bold  p-2 bg bg-gray-100 border-gray-200 border-[1px] rounded-md">
          Transform Your Online Presence With Custom Web Designs.
        </span>
        <h1 className="text-7xl font-bold mt-[8vh] xl:text-4xl">
          Elevate Your Brand with
          <span className="text-gray-400"> Custom Web</span> Designs.
        </h1>
        <p className="text-gray-500 text-2xl mt-10 pl-[5vw] pr-[5vw] xl:text-lg">
          Bring your brand to life with a website that stands out. Whether you
          are a small business, an entrepreneur, or an individual, we have the
          right plan for you.
        </p>
        <button
          onClick={gotoPricingSection}
          className="mt-20 px-7 py-2 bg-black text-white rounded-lg hover:bg-gray-800  border-2 border-transparent focus:border-white focus:outline-none focus:ring-2 focus:ring-black ">
          Start Your Journey Here
        </button>
        <p className="mt-5 text-gray-500">Get your free consultation now</p>
        <div className="mt-20 p-2 rounded-xl">
          <img
            src="/assets/banner.svg"
            alt="logo"
            className=" rounded-xl w-full h-[350px]  animate-spin"
          />
        </div>
        <div className="mt-20 mb-20 w-full h-1 bg-gray-100" />
        <div className="flex flex-col text-center items-center w-full">
          <h2 className="text-4xl w-[30vw] xl:w-[80vw]">
            Showcase of <span className="text-gray-400">Excellence</span>
          </h2>
          <p className="mt-10 text-xl text-gray-400 w-[25vw] xl:w-[70vw]">
            Explore our comprehensive portfolio of previous web design projects
            that demonstrate our expertise and dedication.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-5 lg:grid-cols-1">
          <FeaturesCard
            cardTitle="Responsive Design"
            cardDescription="Our designs are fully responsive and optimized for different screen sizes. This ensures that your website provides a great user experience on any device."
            cardImage="https://user-images.githubusercontent.com/88425310/253306881-00549cb9-b4d4-4ae3-832d-49e27a69776c.png"
          />
          <FeaturesCard
            cardTitle="SEO Optimized"
            cardDescription="Our websites are built to be SEO-friendly to help increase your visibility on search engines and attract more organic traffic."
            cardImage="https://user-images.githubusercontent.com/88425310/253307723-969ed1f1-862d-4928-bded-ca6573255480.png"
          />
          <FeaturesCard
            cardTitle="Modern Design"
            cardDescription="We provide sleek, up-to-date designs that follow the latest web design trends, ensuring your website stands out from the crowd."
            cardImage="https://raw.githubusercontent.com/mertsabinov/your-note-web-app/main/src/assets/banner.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
