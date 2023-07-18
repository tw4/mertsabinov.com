import type { FC } from "react";
import PricingCard from "./PricingCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Pricing: FC<IProps> = ({ setCurrentPage }) => {
  return (
    <div
      id="pricing"
      onMouseEnter={() => setCurrentPage("pricing")}
      className="pt-[15vh] flex justify-center w-full">
      <div className="flex flex-col items-center w-[50vw] xl:w-[85vw] text-center">
        <h1 className="text-5xl font-bold">Transparent Pricing Plans</h1>
        <p className="text-gray-500 text-2xl mt-10 pl-[5vw] pr-[5vw] xl:text-lg">
          Choose from our range of affordable, value-packed plans designed to
          cater to diverse needs and budgets.{" "}
        </p>
        <div className="mt-20 grid grid-cols-3 gap-5 lg:grid-cols-1">
          <PricingCard
            planName="Basic"
            planPrice="299€"
            planDescriptions="Ideal for smaller projects, this plan provides a compact and effective one-page web design."
            suggested={false}
            buttonHref="/plan"
            planFeatures={[
              "Design for 1 page, includes 5 sections.",
              "Delivery time of 7 days (may vary according to special requests).",
              "2 revision rights.",
              "Source codes are provided",
            ]}
          />
          <PricingCard
            planName="Standart"
            planPrice="649€"
            planDescriptions="Suitable for more comprehensive projects, this plan provides a two-page web design, allowing for more information and detail."
            suggested={true}
            buttonHref="/plan"
            planFeatures={[
              "Design for 2 pages, each page includes 5 sections.",
              "Delivery time of 14 days (may vary according to special requests).",
              "2 revision rights.",
              "Source codes are provided.",
            ]}
          />
          <PricingCard
            planName="Premium"
            planPrice="1199€"
            planDescriptions="Perfect for the most extensive and detailed projects, this plan provides a five-page web design, enabling the creation of a multi-faceted online presence."
            suggested={false}
            buttonHref="/plan"
            planFeatures={[
              "Design for 5 pages, each page includes 5 sections.",
              "Delivery time of 30 days (may vary according to special requests).",
              "2 revision rights.",
              "Source codes are provided.",
            ]}
          />
        </div>
        <div className="mt-20 mb-20 w-full h-1 bg-gray-100" />
      </div>
    </div>
  );
};

export default Pricing;
